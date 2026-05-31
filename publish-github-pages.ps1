param(
  [string]$RepoName = "ai-investment-committee",
  [switch]$Private
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  throw "GitHub CLI is not installed. Install gh first, then rerun this script."
}

gh auth status | Out-Null

$visibility = if ($Private) { "--private" } else { "--public" }

if (-not (git remote get-url origin 2>$null)) {
  gh repo create $RepoName $visibility --source . --remote origin --push
} else {
  git push -u origin HEAD
}

$owner = gh api user --jq ".login"
gh api --method POST "repos/$owner/$RepoName/pages" `
  -F "source[branch]=master" `
  -F "source[path]=/" 2>$null

Write-Host "GitHub Pages requested. Check: https://$owner.github.io/$RepoName/"
