export const websiteConfig = {
  business: {
    name: "Handyman Greeley CO",
    tagline: "Professional Handyman Services in Greeley, Colorado",
    description: "Trusted local handyman services in Greeley, CO. From home repairs to renovations, we handle all your maintenance needs with professional quality and affordable pricing.",
    phone: "(970) 555-0123",
    email: "info@handymangreeleyco.com",
    address: "Greeley, Colorado",
    hours: "Monday - Friday: 8AM - 6PM, Saturday: 9AM - 4PM",
    license: "Licensed & Insured",
    experience: "10+ Years Experience",
    rating: 4.9,
    reviewCount: 127
  },
  
  location: {
    city: "Greeley",
    state: "Colorado",
    zipCodes: ["80631", "80632", "80633", "80634", "80639"],
    serviceRadius: "30 miles",
    serviceAreas: [
      "Greeley, CO",
      "Evans, CO",
      "Windsor, CO",
      "Eaton, CO",
      "Garden City, CO",
      "LaSalle, CO"
    ]
  },

  contact: {
    phone: "(970) 555-0123",
    phoneLink: "tel:+19705550123",
    email: "info@handymangreeleyco.com",
    website: "https://www.handymangreeleyco.com",
    socialMedia: {
      facebook: "https://facebook.com/handymangreeleyco",
      google: "https://business.google.com/handymangreeleyco",
      yelp: "https://yelp.com/biz/handymangreeleyco",
      nextdoor: "https://nextdoor.com/handymangreeleyco"
    }
  },

  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" }
  ],

  footerLinks: {
    services: [
      { name: "Home Repairs", href: "#services" },
      { name: "Bathroom & Kitchen", href: "#services" },
      { name: "Flooring Services", href: "#services" },
      { name: "Exterior Work", href: "#services" },
      { name: "Electrical & Plumbing", href: "#services" },
      { name: "Carpentry", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Service Areas", href: "#contact" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Free Estimate", href: "#contact" },
      { name: "Emergency Service", href: "#contact" },
      { name: "Maintenance Tips", href: "/blog" }
    ]
  },

  businessHours: [
    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ],

  images: {
    logo: "/logo.png",
    hero: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=1200",
    about: "https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg?auto=compress&cs=tinysrgb&w=800",
    services: "https://images.pexels.com/photos/5691661/pexels-photo-5691661.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.54094638802!2d-104.7091!3d40.4233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ea16a8b7b8b8b%3A0x1234567890abcdef!2sGreeley%2C%20CO!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
    searchUrl: "https://maps.google.com/?q=Greeley,+Colorado"
  },

  serviceCategories: [
    {
      name: "Interior Services",
      services: ["home-repairs", "bathroom-kitchen", "flooring", "electrical-plumbing"]
    },
    {
      name: "Exterior Services", 
      services: ["exterior-work", "carpentry"]
    }
  ],

  services: [
    {
      id: "home-repairs",
      name: "Home Repairs",
      description: "General home repair services including drywall, painting, and fixture installation",
      icon: "🔧",
      price: "Starting at $75"
    },
    {
      id: "bathroom-kitchen",
      name: "Bathroom & Kitchen",
      description: "Bathroom and kitchen repairs, remodeling, and fixture installation",
      icon: "🚿",
      price: "Starting at $125"
    },
    {
      id: "flooring",
      name: "Flooring Services",
      description: "Tile, vinyl, and laminate flooring installation and repair",
      icon: "🏠",
      price: "Starting at $150"
    },
    {
      id: "exterior-work",
      name: "Exterior Work",
      description: "Deck repair, fence installation, power washing, and exterior maintenance",
      icon: "🏡",
      price: "Starting at $100"
    },
    {
      id: "electrical-plumbing",
      name: "Electrical & Plumbing",
      description: "Minor electrical and plumbing repairs, fixture installation",
      icon: "⚡",
      price: "Starting at $125"
    },
    {
      id: "carpentry",
      name: "Carpentry",
      description: "Custom carpentry, furniture assembly, and woodworking projects",
      icon: "🪚",
      price: "Starting at $100"
    }
  ],

  blogPosts: [
    {
      id: "complete-guide-handyman-services-greeley",
      title: "Complete Guide to Handyman Services in Greeley, CO: What You Need to Know",
      excerpt: "If you're searching for a handyman near me in Greeley, CO, this guide will help you understand the range of handyman services available, how to find a reliable local handyman, what to expect from a licensed handyman, and typical costs in the area.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Services Guide",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800",
      keywords: ["handyman services Greeley", "local handyman", "licensed handyman", "handyman near me"],
      slug: "complete-guide-handyman-services-greeley"
    },
    {
      id: "home-repair-services-greeley-professional",
      title: "Home Repair Services in Greeley: When to Call a Professional Handyman",
      excerpt: "Maintaining a home in Greeley comes with its share of challenges, from seasonal wear to unexpected breakdowns. Knowing when to call a professional handyman can save time, money, and stress.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Home Maintenance",
      image: "https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg?auto=compress&cs=tinysrgb&w=800",
      keywords: ["home repair Greeley", "professional handyman", "DIY vs professional", "home maintenance"],
      slug: "home-repair-services-greeley-professional"
    },
    {
      id: "handyman-pricing-guide-greeley-colorado",
      title: "Handyman Pricing Guide: What Does Home Repair Cost in Greeley, Colorado?",
      excerpt: "Home repairs and maintenance are a part of every homeowner's life, but understanding what you'll pay for a handyman in Greeley, CO can help you budget and choose the right service for your needs.",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Pricing",
      image: "https://images.pexels.com/photos/5691661/pexels-photo-5691661.jpeg?auto=compress&cs=tinysrgb&w=800",
      keywords: ["handyman pricing Greeley", "home repair costs", "handyman rates Colorado", "affordable handyman"],
      slug: "handyman-pricing-guide-greeley-colorado"
    },
    {
      id: "finding-right-handyman-greeley-directory",
      title: "Finding the Right Handyman in Greeley: Your Complete Local Directory",
      excerpt: "Keeping your Greeley home in top shape means having access to reliable, skilled local handyman services. Whether you need carpentry, drywall repair, or special modifications for seniors, knowing how to hire the right handyman is essential.",
      date: "2024-01-01",
      readTime: "9 min read",
      category: "Local Directory",
      image: "https://images.pexels.com/photos/5691658/pexels-photo-5691658.jpeg?auto=compress&cs=tinysrgb&w=800",
      keywords: ["hire handyman Greeley", "local handyman directory", "handyman specialties", "senior services"],
      slug: "finding-right-handyman-greeley-directory"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Greeley, CO",
      rating: 5,
      text: "Excellent service! They fixed my kitchen faucet and installed new light fixtures. Very professional and reasonably priced.",
      service: "Kitchen Repairs"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      location: "Greeley, CO", 
      rating: 5,
      text: "Great work on our deck repair. They were on time, cleaned up after themselves, and the quality was outstanding.",
      service: "Deck Repair"
    },
    {
      id: 3,
      name: "Linda Chen",
      location: "Greeley, CO",
      rating: 5,
      text: "I needed several small repairs done around the house. They bundled everything into one visit and saved me money. Highly recommend!",
      service: "General Repairs"
    }
  ],

  seo: {
    title: "Professional Handyman Services in Greeley, CO | Licensed & Insured",
    description: "Trusted handyman services in Greeley, Colorado. Home repairs, renovations, and maintenance. Licensed, insured, and locally owned. Call (970) 555-0123 for free estimates.",
    keywords: [
      "handyman Greeley CO",
      "home repair Greeley",
      "handyman services Colorado",
      "local handyman near me",
      "licensed handyman Greeley",
      "home maintenance Greeley",
      "affordable handyman Colorado"
    ],
    canonicalUrl: "https://www.handymangreeleyco.com"
  }
};

export default websiteConfig;
