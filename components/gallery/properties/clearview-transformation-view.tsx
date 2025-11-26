"use client"
import type { Property } from "@/lib/gallery-properties"

interface ClearviewTransformationViewProps {
  property: Property
}

export function ClearviewTransformationView({ property }: ClearviewTransformationViewProps) {
  if (!property.transformationStory) return null

  return <div className="min-h-screen bg-white" data-property-id="clearview-8"></div>
}
