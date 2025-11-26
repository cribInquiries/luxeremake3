export type Property = {
  id: number
  title: string
  subheading: string
  categories: string[]
  location: string
  shortDescription: string
  services?: string[]
  bedrooms: number
  bathrooms: number
  sqft: number
  price: string
  mainImage: string
  carouselImages: string[]
  description: string
  features: string[]
  amenities: string[]
  neighborhood: string | { description: string; nearby: string[] }
  transformationStory?: {
    subtitle: string
    challenge: string
    solution: string
    results: {
      originalIncome: number
      currentGross: number
      currentNet: number
      weeklyGain: number
      annualIncrease: number
      annualGrossRevenue: number
      occupancyRate: number
      expectedROI: number
      actualROI: number
      yearsManaged: number
    }
    timeline: {
      date: string
      event: string
    }[]
    testimonial?: string
    before?: string
    after?: string
    challenges?: string[]
    solutions?: string[]
  }
  financials?: {
    acquisitionCost: number
    renovationCost: number
    totalInvestment: number
    currentValue: number
    monthlyRevenue: number
    currentGross: number
    currentNet: number
    weeklyGain: number
    annualIncrease: number
    annualGrossRevenue: number
    occupancyRate: number
    expectedROI: number
    actualROI: number
    yearsManaged: number
  }
  type?: string
  gallery?: string[]
  heroImage?: string
  images?: string[]
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Cosy Glenelg Getaway",
    subheading: "Affordable family holiday home with premium amenities",
    categories: ["Property Management", "Interior Design", "Styling"],
    location: "Glenelg Beach",
    shortDescription: "5-minutes from Glenelg Beach",
    services: ["Styling", "Renovation"],
    bedrooms: 2,
    bathrooms: 1,
    sqft: 50,
    price: "$270/per night",
    mainImage: "/images/title-20image-20glenelg.jpg",
    carouselImages: [
      "/images/title-20image-20glenelg.jpg",
      "/images/loungenew.jpg",
      "/images/kitchennew.jpg",
      "/images/bedroomnew.jpg",
      "/images/bathroom-20new.jpeg",
    ],
    description:
      "Our journey with this client began when he reached out looking to purchase a property with strong short-term rental potential. He wasn't just looking for a home—he was looking for an investment that would grow. From the first call, we guided him through a comprehensive analysis of several properties, breaking down projected Airbnb earnings, long-term appreciation, and renovation potential. Once he settled on the perfect location, our team at Luxe Managements took over the transformation. We re-styled and renovated the space to create a modern, warm, and highly functional Airbnb-ready home. Every detail was intentional—from interior flow and furniture selection to lighting, amenities, and guest-ready features that elevate the stay experience. By October, we launched the listing—and the results spoke for themselves. Bookings surged immediately, outperforming traditional rental income and generating the kind of revenue only a well-optimized short-term rental can achieve. What started as a search for a property turned into a high-performing Airbnb asset. The client was blown away by how seamlessly we managed everything—from purchase support to renovation to ongoing management—and how much more profit the property produced under Luxe compared to standard renting.",
    features: [
      "Full property transformation and styling",
      "Strategic Airbnb optimization",
      "Modern herringbone tile backsplash",
      "Ambient LED lighting throughout",
      "Premium guest amenities included",
      "Coastal-inspired interior design",
    ],
    amenities: [
      "Steps from Glenelg Beach",
      "Fully equipped modern kitchen",
      "Comfortable living spaces",
      "Quality linens and towels",
      "Fast WiFi and entertainment",
      "Professional property management",
    ],
    neighborhood:
      "Glenelg Beach is Adelaide's most beloved seaside destination, offering pristine beaches, vibrant cafes, boutique shopping, and endless entertainment. Perfect for families and travelers seeking a coastal escape.",
    transformationStory: {
      subtitle: "From standard rental to high-performing Airbnb investment",
      challenge:
        "A client reached out seeking to purchase a property with strong short-term rental potential. He needed expert guidance on property selection, projected earnings analysis, and complete transformation to create an Airbnb-ready investment that would outperform traditional rental income.",
      solution:
        "Luxe Managements provided end-to-end support—from property analysis and purchase guidance to complete renovation and styling. We transformed the space with modern finishes, including herringbone tile backsplash, ambient lighting, coastal-inspired furnishings, and guest-focused amenities. Every design decision was intentional, creating a warm, functional, and highly bookable Airbnb home.",
      results: {
        originalIncome: 380,
        currentGross: 1050,
        currentNet: 680,
        weeklyGain: 300,
        annualIncrease: 15600,
        annualGrossRevenue: 54600,
        occupancyRate: 88,
        expectedROI: 24,
        actualROI: 24,
        yearsManaged: 1,
      },
      timeline: [
        { date: "Early 2024", event: "Property analysis and purchase guidance" },
        { date: "Mid 2024", event: "Complete renovation and Airbnb transformation" },
        { date: "October 2024", event: "Launched on Airbnb with immediate bookings" },
        { date: "2024-2025", event: "Consistent 88% occupancy maintained" },
      ],
      testimonial:
        "The client was blown away by how seamlessly we managed everything—from purchase support to renovation to ongoing management—and how much more profit the property produced under Luxe compared to standard renting.",
    },
  },
]

export function getPropertyById(id: number): Property | undefined {
  return properties.find((property) => property.id === id)
}
