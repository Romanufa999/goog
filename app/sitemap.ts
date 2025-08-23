
const URL = "https://example.com"; // Placeholder URL

const paths = ['/', '/contacts', '/privacy', '/personal-data'];

export default function sitemap() {
  const routes = paths.map((path) => ({
    url: `${URL}${path}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
