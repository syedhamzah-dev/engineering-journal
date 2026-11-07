/**
 * Calculates estimated reading time in minutes based on text content.
 * Standard adult reading speed is approximately 200 words per minute.
 */
export function getReadingTime(content: string): string {
  if (!content) return '1 min read';
  
  // Strip HTML tags and markdown formatting characters
  const cleanText = content
    .replace(/<[^>]*>/g, '')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/[#*`_~>-]/g, '')
    .trim();

  const words = cleanText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

