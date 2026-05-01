import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'k8u9z0dx',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Helper for fetching common dental site data
export async function getDentalData() {
  // In a real scenario, this would query Sanity
  // For now, we return mock data if the client isn't configured
  try {
    const data = await client.fetch('*[_type == "siteSettings"][0]');
    return data;
  } catch (err) {
    console.warn('Sanity client error, using mock data:', err);
    return null;
  }
}
