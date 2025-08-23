
const URL = "https://example.com"; // Placeholder URL

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${URL}/sitemap.xml`,
  };
}
