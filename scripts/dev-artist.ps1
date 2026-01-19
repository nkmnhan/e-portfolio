# Development automation script
# Checks dependencies and starts the development server
<#
Usage:
    PS e-portfolio> .\scripts\dev.ps1 [path] [pnpm commands...]
Example:
    .\scripts\dev.ps1 . dev build build-storybook
This will execute pnpm dev, pnpm build, and pnpm build-storybook in order.
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

$portfolioDir = Join-Path $path "webs\artist-portfolio"

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "   E-Portfolio Development" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "path: $path" -ForegroundColor Gray
Write-Host "portfolioDir: $portfolioDir" -ForegroundColor Gray
Write-Host ""

Push-Location $portfolioDir
try {
    foreach ($cmd in $c) {
        Write-Host "======================================" -ForegroundColor Cyan
        Write-Host "   Running pnpm command: $cmd" -ForegroundColor Cyan
        Write-Host "======================================" -ForegroundColor Cyan
        Write-Host ""

        switch ($cmd) {
            "build-storybook" {
                Write-Host "Cleaning up existing storybook-static folder..." -ForegroundColor Yellow
                Remove-ItemSafe ".\storybook-static"
            }
            "install" {
                Write-Host "Ensuring all dependencies are installed..." -ForegroundColor Yellow
                Remove-ItemSafe ".\node_modules"
                
                Write-Host "Cleaning up node_modules and pnpm-lock.yaml..." -ForegroundColor Yellow
                Remove-ItemSafe ".\pnpm-lock.yaml"
                
                Write-Host "Running 'pnpm install' to install dependencies..." -ForegroundColor Yellow
                pnpm install
            }
            default {
                # No special action for other commands
            }
        }

        Write-Host "  -> Running 'pnpm $cmd' in $portfolioDir" -ForegroundColor Gray
        pnpm $cmd
    }
}
finally {
    Pop-Location
}