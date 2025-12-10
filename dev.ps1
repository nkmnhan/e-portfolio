# Development automation script
# Checks dependencies and starts the development server
# Skip nothing: .\dev.ps1
# Skip download: .\dev.ps1 -skipSteps "1"
# Skip pnpm install: .\dev.ps1 -skipSteps "2"
# Skip both: .\dev.ps1 -skipSteps "12"

param(
    [Parameter(Mandatory = $false)]
    [string]$projectRoot = $PSScriptRoot,

    [Parameter(Mandatory = $false)]  
    [string]$skipSteps = ""
)

$portfolioDir = Join-Path $projectRoot "webs\portfolio-nextjs"
$tempImagesDir = Join-Path $portfolioDir "public\temp-images"
$scriptsDir = Join-Path $projectRoot "scripts"
$downloadScript = Join-Path $scriptsDir "download-images.ps1"
$urlsFile = Join-Path $scriptsDir "urls.txt"

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "   E-Portfolio Development Setup" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
write-Host "portfolioDir: $portfolioDir" -ForegroundColor Gray
write-Host "tempImagesDir: $tempImagesDir" -ForegroundColor Gray
write-Host "nodeModulesDir: $nodeModulesDir" -ForegroundColor Gray
write-Host "downloadScript: $downloadScript" -ForegroundColor Gray
write-Host "urlsFile: $urlsFile" -ForegroundColor Gray
Write-Host ""
Write-Host "Note: Checking images and dependencies before starting server..." -ForegroundColor Gray
Write-Host ""

# Step 1: Download images (unless skipped)
if ($skipSteps -notlike "*1*") {
    Write-Host "[1/3] Checking temp-images directory..." -ForegroundColor Yellow
    & $downloadScript -urlsFile $urlsFile -destFolder $tempImagesDir -codeFolder (Join-Path $portfolioDir "app\work")
    Write-Host "  [OK] Images downloaded successfully" -ForegroundColor Green
}
else {
    Write-Host "[1/3] Skipped image download (skipSteps contains '1')" -ForegroundColor DarkYellow
}


Push-Location $portfolioDir
try {

    # Step 2: Install dependencies (unless skipped)
    if ($skipSteps -notlike "*2*") {
    
        Write-Host "[2/3] Checking node_modules..." -ForegroundColor Yellow
        pnpm install
        Write-Host "  [OK] Dependencies installed successfully" -ForegroundColor Green
    }
    else {
        Write-Host "[2/3] Skipped pnpm install (skipSteps contains '2')" -ForegroundColor DarkYellow
    }

    # Step 3: Start the development server
    Write-Host "[3/3] Starting development server..." -ForegroundColor Yellow
    Write-Host "  -> Running 'pnpm dev' in $portfolioDir" -ForegroundColor Gray
    Write-Host ""
    Write-Host "======================================" -ForegroundColor Cyan
    Write-Host "   Server Starting..." -ForegroundColor Cyan
    Write-Host "======================================" -ForegroundColor Cyan
    Write-Host ""

    pnpm dev
}
finally {
    Pop-Location
}