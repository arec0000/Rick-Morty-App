export function getIdFormUrl(url: string): string {
  const urlParts = url.split('/');

  const id = urlParts[urlParts.length - 1];

  return id;
}
