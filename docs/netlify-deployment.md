# Netlify Deployment Guide for Sai Medh Portfolio

Your portfolio repository is now 100% configured for Netlify with serverless function support for your contact form.

---

## What Was Configured for Netlify

1. **`netlify.toml`**:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
     functions = "netlify/functions"

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```
2. **`public/_redirects`**:
   Fallback rewrite rules ensuring `/api/*` routes to functions and all frontend routes load the single-page application smoothly.
3. **`netlify/functions/contact.ts`**:
   Dedicated Netlify Serverless Function handler utilizing your `RESEND_API_KEY` to send contact messages directly to `saimedhp@gmail.com`.
4. **Git Sync**: All Netlify configuration files have been pushed to your GitHub repository: [github.com/saimedh/portfolio](https://github.com/saimedh/portfolio) (commit `fae1294`).

---

## 2 Ways to Deploy on Netlify

### Method A: Git Integration (Recommended — Takes 1 minute)
1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. Click **Add new site** → **Import an existing project**.
3. Choose **GitHub** and select your repository: **`saimedh/portfolio`**.
4. Netlify will auto-detect `netlify.toml` (Build command: `npm run build`, Publish directory: `dist`).
5. Under **Environment variables**, add:
   - Key: `RESEND_API_KEY` | Value: `your_resend_api_key`
   - Key: `CONTACT_EMAIL` | Value: `saimedhp@gmail.com`
6. Click **Deploy portfolio**.

### Method B: Netlify CLI Terminal Deploy
Run this in your terminal inside `portfolio`:
```bash
npx netlify deploy --prod
```
- It will open a browser tab to authorize your Netlify account.
- Select **"Create & configure a new site"**.
- Set the publish directory to `dist`.
- Set the environment variable:
  ```bash
  npx netlify env:set RESEND_API_KEY "your_resend_api_key"
  npx netlify env:set CONTACT_EMAIL "saimedhp@gmail.com"
  ```
