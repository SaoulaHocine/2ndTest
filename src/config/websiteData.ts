// Website Configuration - Update all website details here
export const websiteConfig = {
  // Business Information
  business: {
    name: "saoula Hocine Handyman",
    tagline: "Your Trusted Handyman in Greeley",
    description: "Quality home repairs, maintenance, and improvements serving Greeley, Colorado with over 15 years of experience. Licensed, insured, and committed to excellence in every project in Northern Colorado.",
    yearsExperience: 15,
    projectsCompleted: 500,
    satisfactionRate: 100,
    rating: 4.9,
    reviewCount: 127
  },

  // Location & Service Areas
  location: {
    city: "Greeley",
    state: "Colorado",
    stateAbbr: "CO",
    zipCode: "80631",
    coordinates: {
      latitude: "40.4233",
      longitude: "-104.7091"
    },
    serviceAreas: [
      "Downtown Greeley",
      "West Greeley", 
      "East Greeley",
      "Evans",
      "Garden City",
      "LaSalle",
      "Milliken",
      "Windsor"
    ]
  },

  // Contact Information
  contact: {
    phone: "+213554261617",
    phoneLink: "tel:+19705550123",
    email: "mrsaoulahocine@gmail.com",
    emailLink: "mailto:mrsaoulahocine@gmail.com",
    website: "https://elitehandymangreeley.com"
  },

  // Business Hours
  businessHours: {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 4:00 PM", 
    sunday: "Sunday: Emergency Services Only",
    structured: "Mo-Fr 08:00-18:00, Sa 09:00-16:00"
  },

  // Services Offered
  services: [
    {
      title: "General Repairs",
      description: "Fixing doors, windows, drywall, and general household repairs",
      features: ["Door & Window Repair", "Drywall Patching", "Trim & Molding", "Hardware Installation"]
    },
    {
      title: "Painting Services", 
      description: "Interior and exterior painting with professional finish",
      features: ["Interior Painting", "Exterior Painting", "Trim Painting", "Color Consultation"]
    },
    {
      title: "Electrical Work",
      description: "Safe and reliable electrical installations and repairs", 
      features: ["Outlet Installation", "Light Fixtures", "Ceiling Fans", "Switch Replacement"]
    },
    {
      title: "Plumbing Services",
      description: "Plumbing repairs and installations for your home",
      features: ["Faucet Repair", "Toilet Installation", "Pipe Repairs", "Drain Cleaning"]
    },
    {
      title: "Home Maintenance",
      description: "Regular maintenance to keep your home in top condition",
      features: ["Seasonal Inspections", "Preventive Maintenance", "Safety Checks", "Weatherproofing"]
    },
    {
      title: "Installation Services",
      description: "Professional installation of various home fixtures", 
      features: ["TV Mounting", "Shelving Installation", "Cabinet Hardware", "Appliance Setup"]
    }
  ],

  // Service Categories for Contact Form
  serviceCategories: [
    "General Repairs",
    "Painting Services", 
    "Electrical Work",
    "Plumbing Services",
    "Home Maintenance",
    "Installation Services",
    "Other"
  ],

  // Social Media Links
  socialMedia: {
    facebook: "#",
    twitter: "#", 
    instagram: "#",
    linkedin: "#"
  },

  // Navigation Menu
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ],

  // Footer Links
  footerLinks: {
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Sitemap", href: "#" }
    ]
  },

  // Customer Testimonials
  testimonials: [
    {
      name: "Sarah Johnson",
      location: "Downtown Greeley",
      rating: 5,
      text: "Absolutely fantastic service! They fixed our kitchen cabinet doors and installed new shelving. The work was completed on time and exceeded our expectations. Highly recommend!",
      service: "Kitchen Repairs & Installation"
    },
    {
      name: "Mike Rodriguez", 
      location: "West Greeley",
      rating: 5,
      text: "Professional, reliable, and reasonably priced. They painted our entire living room and dining area. The attention to detail was impressive, and they cleaned up perfectly.",
      service: "Interior Painting"
    },
    {
      name: "Emily Chen",
      location: "East Greeley", 
      rating: 5,
      text: "Great experience from start to finish. They installed ceiling fans in three bedrooms and fixed several electrical outlets. Very knowledgeable and safety-conscious.",
      service: "Electrical Work"
    },
    {
      name: "David Thompson",
      location: "Old Town Greeley",
      rating: 5, 
      text: "Outstanding craftsmanship! They repaired our front porch railing and painted the exterior trim. The work looks amazing and has held up beautifully through all weather.",
      service: "Exterior Repairs & Painting"
    },
    {
      name: "Lisa Martinez",
      location: "South Greeley",
      rating: 5,
      text: "Quick response time and excellent communication. They fixed our leaky faucet and installed a new toilet. Fair pricing and quality work. Will definitely use again!",
      service: "Plumbing Services"
    },
    {
      name: "Robert Wilson",
      location: "North Greeley", 
      rating: 5,
      text: "Helped us with multiple small repairs around our office building. Very professional team, always on time, and they handle everything efficiently. Great for ongoing maintenance.",
      service: "Commercial Maintenance"
    }
  ],

  // Google Maps Configuration
  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97265.56962704977!2d-104.78913042089844!3d40.42330623974371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ea3eea78c829f%3A0x59c07df041ca1520!2sGreeley%2C%20CO!5e0!3m2!1sen!2sus!4v1751927500000!5m2!1sen!2sus",
    directUrl: "https://www.google.com/maps/place/Greeley,+CO/@40.4233062,-104.7891304,12z/data=!3m1!4b1!4m6!3m5!1s0x876ea3eea78c829f:0x59c07df041ca1520!8m2!3d40.4233062!4d-104.7091021!16zL20vMDEwNzNy?entry=ttu"
  },

  // SEO Configuration
  seo: {
    title: "Elite Handyman Services - Professional Home Repairs & Maintenance",
    description: "Professional handyman services in Greeley, Colorado for home repairs, maintenance, and improvements. Licensed, insured, and serving Northern Colorado with quality craftsmanship.",
    keywords: "handyman Greeley Colorado, home repair Greeley, maintenance contractor Colorado, local handyman Northern Colorado, home improvement Greeley",
    ogTitle: "Elite Handyman Services - Greeley, Colorado Home Repairs",
    ogDescription: "Quality handyman services for all your home repair and maintenance needs in Greeley, Colorado. Licensed, insured, and trusted by local homeowners."
  },

  // Image URLs (fallback to Pexels if CSV images don't load)
  images: {
    hero: [
      'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5025640/pexels-photo-5025640.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    testimonials: [
      'https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5025638/pexels-photo-5025638.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
};

export default websiteConfig;
