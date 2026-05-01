# Vercel Deployment Guide

To deploy this Elite Dental website to Vercel:

1. **Push to GitHub**:
   - Create a new repository on GitHub.
   - Pust this code to the repository.

2. **Vercel Project Setup**:
   - Log in to [vercel.com](https://vercel.com).
   - Click **Add New** > **Project**.
   - Import your GitHub repository.

3. **Framework Preset**:
   - Vercel should automatically detect **Vite**.
   - If not, select "Vite" as the Framework Preset.

4. **Environment Variables**:
   - Under the "Environment Variables" section, add:
     - `VITE_SANITY_PROJECT_ID`
     - `VITE_SANITY_DATASET`
     - `GEMINI_API_KEY` (if you use AI features)

5. **Deploy**:
   - Click **Deploy**. Vercel will build the app and provide a production URL.

## Automatic Deployments
Every time you push to the `main` branch, Vercel will automatically trigger a new deployment.
