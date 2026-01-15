param(
    [Parameter(Mandatory=$false)]
    [string]$urlsFile = "urls.txt",
    
    [Parameter(Mandatory=$false)]
    [string]$destFolder = "..\webs\portfolio-nextjs\public\about",
    
    [Parameter(Mandatory=$false)]
    [string]$codeFolder = "..\webs\portfolio-nextjs\app\about"
)

# Create the destination folder if it doesn't exist
if (!(Test-Path $destFolder)) {
    New-Item -ItemType Directory -Path $destFolder | Out-Null
}

$urls = Get-Content $urlsFile -Raw | ConvertFrom-Json

# Download the images
$downloadedCount = 0
foreach ($url in $urls) {
    $filename = Split-Path $url -Leaf
    $output = Join-Path $destFolder $filename
    try {
        write-Host "Downloading: $filename"
        Invoke-WebRequest -Uri $url -OutFile $output -ErrorAction Stop
        $downloadedCount++
    } catch {
        Write-Host "Failed to download: $url"
    }
}

Write-Host "`nDownloaded $downloadedCount new files"

# Get all file names (only the file name, not full path)
$fileNames = Get-ChildItem -Path $destFolder -File | Select-Object -ExpandProperty Name

# Path to the TSX file to save
$tsxFile = Join-Path $codeFolder "downloaded-files.tsx"
# Create the .tsx array content (each URL as a quoted string)
# Spaces for indentation
$urlsArrayString = $fileNames | ForEach-Object { '  "' + ($_.Trim()) + '"' }
$urlsArrayString = $urlsArrayString -join ",`n"  # Comma + newline to join

$tsxContent = @"
export const TEST_IMAGE_URLS = [
$urlsArrayString
];
"@

# Write .tsx file
Set-Content -Path $tsxFile -Value $tsxContent -Encoding UTF8
Write-Host "Image URLs written to $tsxFile"