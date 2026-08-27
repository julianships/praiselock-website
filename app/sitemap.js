export default function sitemap() {
  const baseUrl = "https://www.praiselock.com";

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    {
      url: `${baseUrl}/christian-app-blocker`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/support`, changeFrequency: "yearly", priority: 0.4 },
  ];
}
