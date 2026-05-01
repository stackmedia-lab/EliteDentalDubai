# Sanity.io Setup for Elite Dental

This project is configured to work with Sanity.io for content management. 

## 1. Create a Sanity Project
Run the following in your terminal (outside this environment or in your local machine):
```bash
npm create sanity@latest
```
- Select "Create new project"
- Choose "Blog" or "Clean" template (we recommend custom schemas)

## 2. Define Schemas
In your Sanity Studio, add schemas for:
- `siteSettings` (title, logo, contact info)
- `service` (title, description, icon, slug)
- `doctor` (name, specialty, bio, image)
- `testimonial` (author, content, rating)

## 3. Environment Variables
Add your project details to your Vercel/Local `.env` file:
```env
VITE_SANITY_PROJECT_ID="your_project_id_here"
VITE_SANITY_DATASET="production"
```

## 4. Deploying to Vercel
1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect the Vite project.
3. Add the environment variables in Vercel settings.
4. Set the "Build Command" to `npm run build` and "Output Directory" to `dist`.

## 5. Fetching Data
The `src/lib/sanity.ts` file already contains the client setup. You can use GROQ queries to fetch data in your components:
```ts
const services = await client.fetch('*[_type == "service"]');
```
