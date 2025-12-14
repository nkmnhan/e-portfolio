# Development automation script
# Checks dependencies and starts the development server

param(
    [Parameter(Mandatory = $false)]
    [string]$projectRoot = $PSScriptRoot
)

$portfolioDir = Join-Path $projectRoot "webs\portfolio-nextjs"

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "   E-Portfolio Storybook" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
write-Host "portfolioDir: $portfolioDir" -ForegroundColor Gray
Write-Host ""

Push-Location $portfolioDir
try {

    Write-Host "Starting Storybook setup..." -ForegroundColor Green
    pnpm install

    Write-Host "Starting Storybook server..." -ForegroundColor Yellow
    Write-Host "  -> Running 'pnpm storybook' in $portfolioDir" -ForegroundColor Gray
    Write-Host ""
    Write-Host "======================================" -ForegroundColor Cyan
    Write-Host "   Server Starting..." -ForegroundColor Cyan
    Write-Host "======================================" -ForegroundColor Cyan
    Write-Host ""

    pnpm build-storybook
    pnpm storybook
}
finally {
    Pop-Location
}