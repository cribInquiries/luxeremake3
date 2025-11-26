"use client"

import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"

export function NorwoodEstateView() {
  const independentData = {
    propertyName: "Parkland Vista Luxury Retreat",
    locationCity: "Adelaide CBD",
    tagline: "Experience the Adelaide CBD and Parklands in Luxury",
    bedroomCount: 2,
    bathroomCount: 1,
    squareMeters: 80,
    pricePerNight: 220,
    heroImageUrl: "/images/afterimagest.jpg",
    aboutText:
      "Parkland Vista Luxury Retreat offers an elevated stay experience overlooking tranquil parklands, blending modern comfort with a refined, resort-inspired aesthetic. Thoughtfully styled throughout, the home features spacious living areas, premium bedding, and a fully equipped kitchen designed for both short and extended stays. Guests can unwind on the private outdoor patio with leafy views, enjoy high-end amenities, and relax in a space curated for comfort, privacy, and relaxation. With its serene setting and contemporary design, this retreat is perfect for families, couples, or business travellers seeking a peaceful escape without compromising on luxury.",
    highlight1: "Edit Feature 1",
    highlight2: "Edit Feature 2",
    highlight3: "Edit Feature 3",
    highlight4: "Edit Feature 4",
    highlight5: "Edit Feature 5",
    highlight6: "Edit Feature 6",
    beforeAfterComparisons: [
      {
        title: "Living Room Styling",
        beforeImage: "/images/beforeimage.jpg",
        afterImage: "/images/afterimagest.jpg",
      },
    ],
    galleryImages: [
      { src: "/images/mainviewst.jpg", alt: "Modern living and dining area with gray sofa and glass table" },
      { src: "/images/mainbedroom1.jpg", alt: "Main bedroom with wooden furniture and coastal artwork" },
      { src: "/images/bedroom2lookingout.jpg", alt: "Bedroom view looking out to kitchen and living area" },
      { src: "/images/bedroom2photost.jpg", alt: "Bright bedroom with corner windows and beach artwork" },
      { src: "/images/stoutside.jpg", alt: "Modern apartment building exterior on GK Terrace" },
      { src: "/images/kitchenst.jpg", alt: "Contemporary white kitchen with mirror backsplash and LED lighting" },
    ],
  }

  const incomeData = [
    { period: "Before Luxe", income: 750, fill: "#ef4444" },
    { period: "After Luxe", income: 1400, fill: "#10b981" },
  ]

  return (
    <div className="min-h-screen bg-black text-white" data-gallery-id="property-2-independent">
      <Link
        href="/gallery"
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md flex justify-center items-center hover:bg-black transition-all duration-300 group"
        aria-label="Back to gallery"
      >
        <ArrowLeft size={24} className="text-white group-hover:-translate-x-1 transition-transform duration-300" />
      </Link>

      <div className="p-12">
        <h1 className="text-4xl font-bold mb-6">{independentData.propertyName}</h1>
        <p className="text-xl mb-12">{independentData.tagline}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p>{independentData.aboutText}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc list-inside">
              <li>{independentData.highlight1}</li>
              <li>{independentData.highlight2}</li>
              <li>{independentData.highlight3}</li>
              <li>{independentData.highlight4}</li>
              <li>{independentData.highlight5}</li>
              <li>{independentData.highlight6}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Before & After</h2>
          {independentData.beforeAfterComparisons.map((comparison, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold mb-2">{comparison.title}</h3>
              <div className="flex gap-4">
                <Image src={comparison.beforeImage || "/placeholder.svg"} alt="Before Image" width={300} height={200} />
                <Image src={comparison.afterImage || "/placeholder.svg"} alt="After Image" width={300} height={200} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {independentData.galleryImages.map((image, index) => (
              <Image key={index} src={image.src || "/placeholder.svg"} alt={image.alt} width={300} height={200} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Income Comparison</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={incomeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Bar dataKey="income" fill="#8884d8">
                {incomeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
