# Sanity CMS Setup

This site is wired for Sanity. Right now it renders fallback content from `src/data/site.ts`. To take over content from Sanity:

## 1. Create a Sanity project
```bash
npm create sanity@latest -- --template clean --create-project "Dental Site" --dataset production
```
Run this in a **separate folder** for the Studio.

## 2. Add env vars
Create `.env` in this project:
```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

## 3. Allow CORS
At https://sanity.io/manage → your project → **API → CORS origins**, add:
- `http://localhost:*`
- your deployed URL (e.g. `https://your-app.vercel.app`)

## 4. Suggested schemas
`service`, `dentist`, `pricingPlan`, `post`, `testimonial`, `siteSettings`.

## 5. Fetch in routes
```ts
import { sanityClient } from "@/lib/sanity";
const services = await sanityClient.fetch(`*[_type=="service"]{title, slug, description, "icon": icon.asset->url}`);
```

## Deploy to Vercel
1. Push to GitHub
2. Import the repo on Vercel
3. Add the two `VITE_SANITY_*` env vars
4. Build command: `bun run build` — Output: handled by TanStack Start preset
