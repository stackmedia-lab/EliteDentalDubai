import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

/**
 * Sanity client configuration.
 *
 * To enable Sanity-powered content:
 * 1. Create a project at https://sanity.io/manage
 * 2. Replace `projectId` below with your project ID
 * 3. Add your deployed origin (e.g. https://your-app.lovable.app) under
 *    Project → API → CORS origins
 * 4. Run `npx sanity@latest init` in a separate folder for the Studio
 *
 * Until then, pages render hardcoded fallback content.
 */
export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "your-project-id",
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
};

export const sanityClient = createClient(sanityConfig);

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}

export const isSanityConfigured = sanityConfig.projectId !== "your-project-id";
