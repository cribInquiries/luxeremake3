"use client"
import type { Property } from "@/lib/gallery-properties"

interface WestBeachTransformationViewProps {
  property: Property
}

export function WestBeachTransformationView({ property }: WestBeachTransformationViewProps) {
  if (!property.transformationStory) return null

  return <div className="min-h-screen bg-white"></div>
}
