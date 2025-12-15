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

    pnpm $c
}
finally {
    Pop-Location
}