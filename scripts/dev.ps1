# Development automation script
# Checks dependencies and starts the development server
<#
Usage:
    PS e-portfolio> .\scripts\dev.ps1 [path] [pnpm commands...]
Example:
    .\scripts\dev.ps1 . dev:byte
    .\scripts\dev.ps1 . dev:artist
    .\scripts\dev.ps1 . install build
This will execute the specified pnpm commands from the monorepo root.
#>

param(
    [Parameter(Mandatory = $false, Position = 0)]
    [string]$path = $PSScriptRoot,

    [Parameter(Mandatory = $true, Position = 1, ValueFromRemainingArguments = $true)]
    [string[]]$c
)

function Remove-ItemSafe {
    param(
        [Parameter(Mandatory = $true)]
        [string]$RemovePath
    )
    if (Test-Path $RemovePath) {
        try {
            Remove-Item -Path $RemovePath -Recurse -Force
            Write-Host "Successfully removed $RemovePath." -ForegroundColor Green
        } catch {
            Write-Host "Failed to remove ${RemovePath}: $($_.Exception.Message)" -ForegroundColor Red
        }
    } else {
        Write-Host "$RemovePath not found; skipping removal." -ForegroundColor Gray
    }
}

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "   E-Portfolio Development" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "path: $path" -ForegroundColor Gray
Write-Host ""

Push-Location $path
try {
    foreach ($cmd in $c) {
        Write-Host "======================================" -ForegroundColor Cyan
        Write-Host "   Running pnpm command: $cmd" -ForegroundColor Cyan
        Write-Host "======================================" -ForegroundColor Cyan
        Write-Host ""

        switch ($cmd) {
            "install" {
                Write-Host "Cleaning up node_modules and lock file..." -ForegroundColor Yellow
                Remove-ItemSafe ".\node_modules"
                Remove-ItemSafe ".\pnpm-lock.yaml"

                Write-Host "Running 'pnpm install'..." -ForegroundColor Yellow
                pnpm install
            }
            default {
                # No special action for other commands
            }
        }

        Write-Host "  -> Running 'pnpm $cmd'" -ForegroundColor Gray
        pnpm $cmd
    }
}
finally {
    Pop-Location
}
