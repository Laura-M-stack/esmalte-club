/**
 * Unsplash requires hotlinking its images (no re-hosting), and its CDN (imgix)
 * resizes on the fly, so we request exactly the sizes we need, in modern formats.
 */
export function unsplashUrl(base: string, width: number, ratio?: string): string {
  const params = new URLSearchParams({
    w: String(width),
    q: '72',
    auto: 'format',
    fit: 'crop',
    crop: 'entropy',
  });
  // Appended by hand: URLSearchParams would encode the colon in "4:5".
  return `${base}?${params.toString()}${ratio ? `&ar=${ratio}` : ''}`;
}

export function unsplashSrcset(base: string, widths: number[], ratio?: string): string {
  return widths.map((w) => `${unsplashUrl(base, w, ratio)} ${w}w`).join(', ');
}
