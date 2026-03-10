# Vercel Deployment Configuration

## ⚠️ IMPORTANT: Root Directory Setting

This project must be built from the **ROOT directory** (`.`), NOT from the `frontend/` subfolder.

### Current Project Structure:
- **Root directory** (`/`) - Contains NEW code with routing, Services, Journey, Pricing, FAQ
- **Nested folder** (`/frontend/`) - Contains OLD code (should be ignored)

### Vercel Settings Required:

1. Go to Vercel Dashboard → Your Project → Settings → General
2. Find **"Root Directory"** setting
3. Make sure it is:
   - **Empty/Blank** OR
   - Set to **`.`** (dot/period)
   - **NOT** set to `frontend/`

4. Save settings
5. Go to Deployments tab
6. Click "Redeploy" on the latest deployment

### Build Configuration:
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: Vite

---

**Note:** The `frontend/` subfolder contains old code and should not be used for deployment.
