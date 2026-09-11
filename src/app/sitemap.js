// src/app/sitemap.js

export default function sitemap() {
  const baseUrl = "https://bimtechsolutions.com.ng";

  // Add all your main routes here
  const routes = [
    "",          // This is the homepage (/)
    "/about",
    "/services",
    "/contact",
    // Add any other pages you have, like "/blog" or "/cbt-practice"
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModified,
    changeFrequency: "weekly", // Tells Google how often you update this page
    priority: route === "" ? 1.0 : 0.8, // Homepage gets priority 1, others get 0.8
  }));
}