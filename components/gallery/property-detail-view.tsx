"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Property } from "@/lib/gallery-properties"

interface PropertyDetailViewProps {
  property: Property
}

export function PropertyDetailView({ property }: PropertyDetailViewProps) {
  return (
    <div className="min-h-screen bg-black">
      <Link
        href="/gallery"
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex justify-center items-center hover:bg-white/20 transition-all duration-300 group"
        aria-label="Back to gallery"
      >
        <ArrowLeft size={24} className="text-white group-hover:-translate-x-1 transition-transform duration-300" />
      </Link>

      <div className="h-full overflow-y-auto scroll-smooth"></div>
    </div>
  )
}
