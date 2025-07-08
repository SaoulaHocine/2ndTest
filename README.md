# Elite Handyman Services Website

A professional, responsive website for a handyman business built with React, TypeScript, and Tailwind CSS.

## 🔧 Easy Configuration

All website content can be easily updated by modifying the configuration file:

### `src/config/websiteData.ts`

This single file contains all the website data including:

- **Business Information**: Name, tagline, description, years of experience
- **Location & Service Areas**: City, state, service areas list
- **Contact Information**: Phone, email, website URL
- **Business Hours**: Weekdays, Saturday, Sunday hours
- **Services**: Complete list of services with descriptions and features
- **Testimonials**: Customer reviews and ratings
- **Social Media**: Links to social platforms
- **SEO Settings**: Meta titles, descriptions, keywords
- **Google Maps**: Embed URLs and direct links

## 📝 How to Update Website Content

### 1. Business Details
```typescript
business: {
  name: "Your Business Name",
  tagline: "Your Business Tagline",
  description: "Your business description...",
  // ... other settings
}
```

### 2. Location & Service Areas
```typescript
location: {
  city: "Your City",
  state: "Your State", 
  serviceAreas: [
    "Area 1",
    "Area 2",
    // Add more areas
  ]
}
```

### 3. Contact Information
```typescript
contact: {
  phone: "(XXX) XXX-XXXX",
  email: "your@email.com",
  // ... other contact details
}
```

### 4. Services
```typescript
services: [
  {
    title: "Service Name",
    description: "Service description",
    features: ["Feature 1", "Feature 2"]
  }
  // Add more services
]
```

### 5. Business Hours
```typescript
businessHours: {
  weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
  saturday: "Saturday: 9:00 AM - 4:00 PM",
  sunday: "Sunday: Emergency Services Only"
}
```

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Form**: Functional contact form with email integration
- **Image Carousels**: Hero and testimonial image sliders
- **Google Maps**: Embedded location map
- **Modern Design**: Clean, professional appearance
- **Fast Loading**: Optimized for performance

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
├── config/             # Website configuration
│   └── websiteData.ts  # Main configuration file
├── data/               # CSV files for images
└── utils/              # Utility functions
```

## 🎨 Customization

### Fonts
The website uses Inter font for a modern, professional look. You can change this in `tailwind.config.js`.

### Colors
Primary color scheme uses blue tones. Update colors in the Tailwind classes throughout the components.

### Images
- Hero images: Update `images.hero` array in config
- Testimonial images: Update `images.testimonials` array in config
- CSV files: Place image URLs in `src/data/` CSV files

## 📧 Contact Form Setup

The contact form sends emails to the address specified in `websiteConfig.contact.email`. Make sure to update this with your actual email address.

## 🗺️ Google Maps Setup

Update the Google Maps URLs in the config file:
- `googleMaps.embedUrl`: For the embedded map
- `googleMaps.directUrl`: For the "View on Google Maps" link

## 📱 Social Media

Update social media links in the `socialMedia` section of the config file.

---

**Need help?** All website content is centralized in `src/config/websiteData.ts` for easy updates!