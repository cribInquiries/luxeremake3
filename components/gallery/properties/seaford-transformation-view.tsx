"use client"
import type { Property } from "@/lib/gallery-properties"

interface SeafordTransformationViewProps {
  property: Property
}

export function SeafordTransformationView({ property }: SeafordTransformationViewProps) {
  if (!property.transformationStory) return null

  return (
    <div className="min-h-screen bg-white p-12">
      <h1 className="text-4xl font-bold">{property.title}</h1>
      <p className="mt-4 text-xl">{property.description}</p>
      <p className="mt-8 text-gray-600">Full Seaford transformation view coming soon...</p>
    </div>
  )
}
