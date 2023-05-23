export function makeUrl(baseUrl: string, searchParams?: Record<string, string>): string {
  if (!searchParams) {
    return baseUrl;
  }

  const url = new URL(baseUrl);

  const entries = Object.entries(searchParams);

  entries.forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}
