# read all paths and sub paths in the current directory
# if contains "bin" or "obj" or "node_modules", delete the folder and all its contents
# write to console which folders are being deleted
param(
    [Parameter(Mandatory = $false)]
    [string]$path = $PSScriptRoot
)

$foldersToDelete = @('/bin/', '/obj/', '/node_modules/')

Get-ChildItem -Path $path -Recurse -Directory | ForEach-Object {
    if ($_.Name -in $foldersToDelete) {
        Write-Host "Deleting folder: $($_.FullName)"
        Remove-Item -Path $_.FullName -Recurse -Force
    }
}