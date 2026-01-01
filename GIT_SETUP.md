# Git Push Setup Instructions

## Authentication Required

The push failed because GitHub requires authentication. Here are your options:

## Option 1: Use Personal Access Token (Recommended)

1. **Create a Personal Access Token:**
   - Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name (e.g., "LIC-WebPage")
   - Select scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again)

2. **Push using the token:**
   ```bash
   git push https://<YOUR_TOKEN>@github.com/praveentmr2005-cell/LIC-WebPage.git main
   ```
   Or use your username:
   ```bash
   git push https://praveentmr2005-cell:<YOUR_TOKEN>@github.com/praveentmr2005-cell/LIC-WebPage.git main
   ```

## Option 2: Use SSH (More Secure)

1. **Generate SSH key (if you don't have one):**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **Add SSH key to GitHub:**
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub.com → Settings → SSH and GPG keys → New SSH key
   - Paste the key and save

3. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:praveentmr2005-cell/LIC-WebPage.git
   git push -u origin main
   ```

## Option 3: Use GitHub CLI

1. **Install GitHub CLI:**
   ```bash
   # Windows (using winget or chocolatey)
   winget install --id GitHub.cli
   ```

2. **Authenticate:**
   ```bash
   gh auth login
   ```

3. **Push:**
   ```bash
   git push -u origin main
   ```

## Option 4: Configure Git Credential Manager

1. **Set up credential helper:**
   ```bash
   git config --global credential.helper manager-core
   ```

2. **Push (will prompt for credentials):**
   ```bash
   git push -u origin main
   ```

## Quick Fix (Temporary)

If you just want to push quickly, use a personal access token:

```bash
# Replace YOUR_TOKEN with your actual token
git remote set-url origin https://YOUR_TOKEN@github.com/praveentmr2005-cell/LIC-WebPage.git
git push -u origin main
```

## Verify Your Setup

After pushing, verify at:
https://github.com/praveentmr2005-cell/LIC-WebPage

## Troubleshooting

- **403 Forbidden**: Check your token permissions or use SSH
- **Permission denied**: Make sure you're pushing to the correct repository
- **Repository not found**: Verify the repository exists and you have access

