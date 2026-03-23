# CV (Next.js)

Personal CV website built with Next.js.

- Website: https://ruminat.github.io/cv
- Repository: https://github.com/Ruminat/cv

## Quick start

```bash
pnpm install
pnpm dev
```

```bash
pnpm build
pnpm start
```

## Deploy (GitHub Pages)

The repository is configured for the official GitHub Pages Actions flow.

1. In repository settings, set Pages source to **GitHub Actions**.
2. Push to `main` (or run the workflow manually).

Workflow file: `.github/workflows/deploy-pages.yml`

## WSL2 + Windows browser

The dev server is started with **`-H 0.0.0.0`** so it listens on all interfaces inside WSL (needed for Windows → WSL port forwarding).

1. From **Windows**, open **`http://127.0.0.1:3000`** (not only `localhost` if IPv6 misbehaves).
2. If it still fails, in WSL run `hostname -I` and try **`http://<first-ip>:3000`** from Windows.
3. On **Windows 11**, you can enable **mirrored networking** so `localhost` matches WSL reliably — create or edit `%UserProfile%\.wslconfig`:

   ```ini
   [wsl2]
   networkingMode=mirrored
   ```

   Then run `wsl --shutdown` from PowerShell/CMD and start WSL again.

4. Allow **Node / WSL** through **Windows Firewall** if prompted, or temporarily test with the firewall off to confirm.
