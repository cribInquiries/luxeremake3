"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Bed, Bath, Square } from "lucide-react"
import type { Property } from "@/lib/gallery-properties"
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts"

interface GlenelgTransformationViewProps {
  property: Property
}

export function GlenelgTransformationView({ property }: GlenelgTransformationViewProps) {
  if (!property.transformationStory) return null

  const story = property.transformationStory

  const propertyValueData = [
    { period: "Before Luxe", value: 457000, fill: "#94a3b8" },
    { period: "After Luxe", value: 520000, fill: "#10b981" },
  ]

  const incomeComparisonData = [
    { period: "Traditional Rental", annual: 24440, fill: "#ef4444" },
    { period: "With Luxe (Airbnb)", annual: 38000, fill: "#10b981" },
  ]

  const revenueTimelineData = [
    { month: "Oct", traditional: 2037, airbnb: 2850 },
    { month: "Nov", traditional: 2037, airbnb: 3100 },
    { month: "Dec", traditional: 2037, airbnb: 3600 },
    { month: "Jan", traditional: 2037, airbnb: 3800 },
    { month: "Feb", traditional: 2037, airbnb: 3400 },
    { month: "Mar", traditional: 2037, airbnb: 3200 },
    { month: "Apr", traditional: 2037, airbnb: 2900 },
    { month: "May", traditional: 2037, airbnb: 3000 },
    { month: "Jun", traditional: 2037, airbnb: 3100 },
    { month: "Jul", traditional: 2037, airbnb: 2950 },
    { month: "Aug", traditional: 2037, airbnb: 3200 },
    { month: "Sep", traditional: 2037, airbnb: 2900 },
  ]

  const renovationChanges = [
    {
      title: "Modern Herringbone Backsplash",
      reason: "Creates visual interest and a premium aesthetic that photographs beautifully for listings",
    },
    {
      title: "Ambient LED Strip Lighting",
      reason: "Adds warmth and creates a cozy atmosphere that guests love and remember",
    },
    {
      title: "Coastal Color Palette",
      reason: "Connects the space to the nearby beach, creating a cohesive Glenelg experience",
    },
    {
      title: "Open Shelving with Styling",
      reason: "Combines functionality with decorative appeal, making the space feel curated and homely",
    },
    {
      title: "Quality Bedding & Linens",
      reason: "Premium comfort drives positive reviews and repeat bookings",
    },
    {
      title: "Modern Bathroom Fixtures",
      reason: "Clean, hotel-quality finishes elevate the guest experience and justify higher nightly rates",
    },
    {
      title: "Strategic Furniture Placement",
      reason: "Maximizes flow and functionality in the compact space",
    },
    {
      title: "Professional Styling & Artwork",
      reason: "Creates an Instagram-worthy aesthetic that guests share, driving organic marketing",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <Link
        href="/gallery"
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md flex justify-center items-center hover:bg-black transition-all duration-300 group"
        aria-label="Back to gallery"
      >
        <ArrowLeft size={24} className="text-white group-hover:-translate-x-1 transition-transform duration-300" />
      </Link>

      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto scroll-smooth">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0 animate-[zoom_30s_ease-in-out_infinite]">
            <Image
              src={property.mainImage || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover opacity-50"
              priority
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-[fadeInUp_1s_ease-out]">
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                Transformation Success Story
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight text-balance leading-[0.95] animate-[fadeInUp_1s_ease-out_0.2s_both]">
              {property.title}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light text-balance max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both]">
              {property.subheading}
            </p>
          </div>
        </section>

        {/* Property Details Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Location</div>
                  <div className="text-lg font-bold text-black">Glenelg</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bed className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Bedrooms</div>
                  <div className="text-lg font-bold text-black">2</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Bath className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Bathrooms</div>
                  <div className="text-lg font-bold text-black">1</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                  <Square className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Land Size</div>
                  <div className="text-lg font-bold text-black">40 m²</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Story Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">Transformation Story</h2>
            <div className="prose max-w-none text-gray-700">
              {story.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Property Value Comparison Chart */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">PropertyValue Comparison</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={propertyValueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Income Comparison Chart */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">Income Comparison</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={incomeComparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Bar dataKey="annual">
                  {incomeComparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Revenue Timeline Chart */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">Revenue Timeline</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={revenueTimelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Line type="monotone" dataKey="traditional" stroke="#ef4444" name="Traditional Rental" />
                <Line type="monotone" dataKey="airbnb" stroke="#10b981" name="With Luxe (Airbnb)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Renovation Changes Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8">Renovation Changes</h2>
            <ul className="list-disc pl-6">
              {renovationChanges.map((change, index) => (
                <li key={index} className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{change.title}</h3>
                  <p className="text-gray-700">{change.reason}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
