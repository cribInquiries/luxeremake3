import { notFound } from "next/navigation"
import { getPropertyById } from "@/lib/gallery-properties"
import { PropertyDetailView } from "@/components/gallery/property-detail-view"
import { PropertyTransformationView } from "@/components/gallery/properties/property-transformation-view"
import { GlenelgTransformationView } from "@/components/gallery/properties/glenelg-transformation-view"
import { WestBeachTransformationView } from "@/components/gallery/properties/west-beach-transformation-view"
import { SeafordTransformationView } from "@/components/gallery/properties/seaford-transformation-view"
import { EnfieldTransformationView } from "@/components/gallery/properties/enfield-transformation-view"
import { MelbourneStreetTransformationView } from "@/components/gallery/properties/melbourne-street-transformation-view"
import { NorwoodEstateView } from "@/components/gallery/properties/norwood-estate-view"
import { ClearviewTransformationView } from "@/components/gallery/properties/clearview-transformation-view"
import { BlankPropertyProfile } from "@/components/gallery/blank-property-profile"

interface PropertyPageProps {
  params: Promise<{
    propertyId: string
  }>
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  console.log("[v0] PropertyPage rendered with params:", params)

  const { propertyId } = await params
  const id = Number.parseInt(propertyId)

  console.log("[v0] Parsed property ID:", id)

  if (isNaN(id)) {
    notFound()
  }

  try {
    if (id === 1) {
      console.log("[v0] Rendering Glenelg property")
      const property = getPropertyById(id)
      if (!property) {
        console.error("[v0] Property 1 not found")
        notFound()
      }
      return <GlenelgTransformationView property={property} />
    }

    if (id === 2) {
      console.log("[v0] Rendering Norwood property")
      return <NorwoodEstateView />
    }

    if (id === 3) {
      console.log("[v0] Rendering West Beach property")
      const property = getPropertyById(id)
      if (!property) {
        console.error("[v0] Property 3 not found")
        notFound()
      }
      return <WestBeachTransformationView property={property} />
    }

    if (id === 4) {
      console.log("[v0] Rendering Melbourne Street property")
      const property = getPropertyById(id)
      if (!property) {
        console.error("[v0] Property 4 not found")
        notFound()
      }
      return <MelbourneStreetTransformationView property={property} />
    }

    if (id === 5) {
      console.log("[v0] Rendering Seaford property")
      const property = getPropertyById(id)
      if (!property) {
        console.error("[v0] Property 5 not found")
        notFound()
      }
      return <SeafordTransformationView property={property} />
    }

    if (id === 6) {
      console.log("[v0] Rendering Enfield property")
      const property = getPropertyById(id)
      if (!property) {
        console.error("[v0] Property 6 not found")
        notFound()
      }
      return <EnfieldTransformationView property={property} />
    }

    if (id === 8) {
      console.log("[v0] Rendering Clearview property")
      const property = getPropertyById(id)
      if (!property) {
        console.error("[v0] Property 8 not found")
        notFound()
      }
      return <ClearviewTransformationView property={property} />
    }

    if (id === 10) {
      console.log("[v0] Rendering blank property profile")
      return <BlankPropertyProfile />
    }

    console.log("[v0] Rendering fallback property view")
    const property = getPropertyById(id)

    if (!property) {
      console.error("[v0] Property not found:", id)
      notFound()
    }

    if (property.transformationStory) {
      return <PropertyTransformationView property={property} />
    }

    return <PropertyDetailView property={property} />
  } catch (error) {
    console.error("[v0] Error rendering property page:", error)
    throw error
  }
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const { propertyId } = await params
  const id = Number.parseInt(propertyId)
  const property = getPropertyById(id)

  if (!property) {
    return {
      title: "Property Not Found",
    }
  }

  const isTransformation = !!property.transformationStory

  return {
    title: isTransformation
      ? `${property.title} - Property Transformation Success Story | Luxe Managements`
      : `${property.title} | Luxe Managements`,
    description: isTransformation
      ? `Discover how Luxe Managements transformed ${property.title} into a high-performing Airbnb investment. ${property.transformationStory!.results.occupancyRate}% occupancy, $${property.transformationStory!.results.annualGrossRevenue.toLocaleString()} annual revenue. ${property.description.substring(0, 100)}...`
      : property.description,
    keywords: isTransformation
      ? [
          "Airbnb property management",
          "short-term rental management",
          "property transformation",
          "Airbnb investment",
          property.location,
          "vacation rental management",
          "property renovation",
          "Airbnb success story",
          "rental income optimization",
          "Luxe Managements",
        ].join(", ")
      : undefined,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.mainImage],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: property.title,
      description: property.description.substring(0, 200),
      images: [property.mainImage],
    },
    alternates: {
      canonical: `/gallery/${propertyId}`,
    },
  }
}
