"use client"
import type { Property } from "@/lib/gallery-properties"
import { useState } from "react"

interface MelbourneStreetTransformationViewProps {
  property: Property
}

export function MelbourneStreetTransformationView({ property }: MelbourneStreetTransformationViewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!property.transformationStory) return null

  return <div className="min-h-screen bg-white"></div>
}
