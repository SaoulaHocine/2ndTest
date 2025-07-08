// Utility functions to read and parse CSV data
export const readCSVFile = async (filePath: string): Promise<string[]> => {
  try {
    const response = await fetch(filePath);
    const text = await response.text();
    return text.split('\n').filter(line => line.trim() !== '');
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return [];
  }
};

// Convert Google Drive share links to direct image URLs
export const convertGoogleDriveUrl = (shareUrl: string): string => {
  const fileIdMatch = shareUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (fileIdMatch) {
    return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
  }
  return shareUrl;
};

// Load and convert hero images from CSV
export const loadHeroImages = async (): Promise<string[]> => {
  const urls = await readCSVFile('/src/data/heroImages.csv');
  return urls.map(convertGoogleDriveUrl);
};

// Load and convert testimonial images from CSV
export const loadTestimonialImages = async (): Promise<string[]> => {
  const urls = await readCSVFile('/src/data/testimonialImages.csv');
  return urls.map(convertGoogleDriveUrl);
};