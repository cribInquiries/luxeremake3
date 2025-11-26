"use client"

import { useState } from "react"
import type { Property } from "@/lib/gallery-properties"

interface PropertyTransformationViewProps {
  property: Property
}

export function PropertyTransformationView({ property }: PropertyTransformationViewProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!property.transformationStory) return null

  return <div className="min-h-screen bg-black text-white overflow-hidden"></div>
}
