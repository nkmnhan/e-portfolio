# Development automation script
# Checks dependencies and starts the development server

param(
    [Parameter(Mandatory = $false)]
    [string]$path = $PSScriptRoot,

    [Parameter(Mandatory = $true)]
    [string]$c = "dev"
)

$portfolioDir = Join-Path $path "webs\portfolio-nextjs"

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "   E-Portfolio Development" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
write-Host "portfolioDir: $portfolioDir" -ForegroundColor Gray
Write-Host ""

Push-Location $portfolioDir
try {

    Write-Host "Starting development setup..." -ForegroundColor Green
    pnpm install

    Write-Host "Starting development server..." -ForegroundColor Yellow
    Write-Host "  -> Running 'pnpm dev' in $portfolioDir" -ForegroundColor Gray
    Write-Host ""
    Write-Host "======================================" -ForegroundColor Cyan
    Write-Host "   Server Starting..." -ForegroundColor Cyan
    Write-Host "======================================" -ForegroundColor Cyan
    Write-Host ""

    if ($c -eq "build-storybook") {
    Write-Host "Cleaning up existing storybook-static folder..." -ForegroundColor Yellow
        if (Test-Path ".\storybook-static") {
            try {
                Remove-Item -Path ".\storybook-static" -Recurse -Force
                Write-Host "Successfully removed storybook-static." -ForegroundColor Green
            } catch {
                Write-Host "Failed to remove storybook-static: $($_.Exception.Message)" -ForegroundColor Red
            }
        } else {
            Write-Host "storybook-static folder not found; skipping cleanup." -ForegroundColor Gray
        }
    }

    pnpm $c
}
finally {
    Pop-Location
}