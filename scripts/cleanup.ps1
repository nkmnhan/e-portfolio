# Recursively scan the directory and delete folders whose names contain "bin", "obj", "node_modules", or "storybook-static"
param(
    [Parameter(Mandatory = $false)]
    [string]$path = $PSScriptRoot
)

$foldersToDeletePatterns = @('*bin*', '*obj*', '*node_modules*', '*storybook-static*')  # Changed to patterns for "contains" logic

Get-ChildItem -Path $path -Recurse -Directory | ForEach-Object {
    $folderName = $_.Name
    $matches = $foldersToDeletePatterns | Where-Object { $folderName -like $_ }
    if ($matches) {
        Write-Host "Deleting folder: $($_.FullName)" -ForegroundColor Red
        try {
            Remove-Item -Path $_.FullName -Recurse -Force
        } catch {
            Write-Host "Failed to delete $($_.FullName): $($_.Exception.Message)" -ForegroundColor Yellow
        }
    }
}