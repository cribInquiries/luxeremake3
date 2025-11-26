"use client"

import { useState } from "react"

export function BlankPropertyProfile() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const profile10Data = {
    mainImageSrc: "/placeholder.svg?height=800&width=1600&text=Add+Hero+Image",
    titleText: "[Click to Add Property Title]",
    locationText: "[Click to Add Location]",
    subtitleText: "[Click to Add Property Description]",
    bedroomNumber: "[0]",
    bathroomNumber: "[0]",
    areaSize: "[0 m²]",
    dailyRate: "[$0]",
    fullDescription:
      "[Click here to add your complete property description. All text fields are independent and editing them will NOT affect any other gallery properties.]",
    featureList: [
      "[Click to edit feature 1]",
      "[Click to edit feature 2]",
      "[Click to edit feature 3]",
      "[Click to edit feature 4]",
    ],
    carouselImages: [
      "/placeholder.svg?height=600&width=900&text=Image+1",
      "/placeholder.svg?height=600&width=900&text=Image+2",
      "/placeholder.svg?height=600&width=900&text=Image+3",
      "/placeholder.svg?height=600&width=900&text=Image+4",
    ],
    preRenovationText: "[Click to add before renovation details]",
    postRenovationText: "[Click to add after renovation details]",
  }

  return <main className="min-h-screen bg-background" data-profile10-component="true"></main>
}
