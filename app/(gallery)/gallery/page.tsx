"use client"
import { useState } from "react"
import { Box, Text } from "@chakra-ui/react"

import ScheduleConsultation from "@/components/luxeComponents/scheduleConsultation"
import { DialogContent, DialogCloseTrigger, DialogRoot } from "@/components/chakra-snippets/dialog"
import DefaultSlider from "@/components/carousel/DefaultSlider"
import { X } from "lucide-react"

import houseOneImg1 from "@/public/images/dalts/houseOne/WEB/1.jpg"
import houseOneImg2 from "@/public/images/dalts/houseOne/WEB/2.jpg"
import houseOneImg3 from "@/public/images/dalts/houseOne/WEB/3.jpg"
import houseOneImg4 from "@/public/images/dalts/houseOne/WEB/4.jpg"
import houseOneImg5 from "@/public/images/dalts/houseOne/WEB/5.jpg"
import houseOneImg6 from "@/public/images/dalts/houseOne/WEB/6.jpg"
import houseOneImg7 from "@/public/images/dalts/houseOne/WEB/7.jpg"
import houseOneImg8 from "@/public/images/dalts/houseOne/WEB/8.jpg"
import houseOneImg9 from "@/public/images/dalts/houseOne/WEB/9.jpg"
import houseOneImg10 from "@/public/images/dalts/houseOne/WEB/10.jpg"

import houseTwoImg1 from "@/public/images/dalts/houseTwo/WEB/1.jpg"
import houseTwoImg2 from "@/public/images/dalts/houseTwo/WEB/2.jpg"
import houseTwoImg3 from "@/public/images/dalts/houseTwo/WEB/3.jpg"
import houseTwoImg4 from "@/public/images/dalts/houseTwo/WEB/4.jpg"
import houseTwoImg5 from "@/public/images/dalts/houseTwo/WEB/5.jpg"
import houseTwoImg6 from "@/public/images/dalts/houseTwo/WEB/6.jpg"
import houseTwoImg7 from "@/public/images/dalts/houseTwo/WEB/7.jpg"
import houseTwoImg8 from "@/public/images/dalts/houseTwo/WEB/8.jpg"
import houseTwoImg9 from "@/public/images/dalts/houseTwo/WEB/9.jpg"
import houseTwoImg10 from "@/public/images/dalts/houseTwo/WEB/10.jpg"

import houseThreeImg1 from "@/public/images/dalts/houseThree/WEB/1.jpg"
import houseThreeImg2 from "@/public/images/dalts/houseThree/WEB/2.jpg"
import houseThreeImg3 from "@/public/images/dalts/houseThree/WEB/3.jpg"
import houseThreeImg4 from "@/public/images/dalts/houseThree/WEB/4.jpg"
import houseThreeImg5 from "@/public/images/dalts/houseThree/WEB/5.jpg"
import houseThreeImg6 from "@/public/images/dalts/houseThree/WEB/6.jpg"
import houseThreeImg7 from "@/public/images/dalts/houseThree/WEB/7.jpg"
import houseThreeImg8 from "@/public/images/dalts/houseThree/WEB/8.jpg"
import houseThreeImg9 from "@/public/images/dalts/houseThree/WEB/9.jpg"
import houseThreeImg10 from "@/public/images/dalts/houseThree/WEB/10.jpg"

import houseFourImg1 from "@/public/images/dalts/houseFour/WEB/1.jpg"
import houseFourImg2 from "@/public/images/dalts/houseFour/WEB/2.jpg"
import houseFourImg3 from "@/public/images/dalts/houseFour/WEB/3.jpg"
import houseFourImg4 from "@/public/images/dalts/houseFour/WEB/4.jpg"
import houseFourImg5 from "@/public/images/dalts/houseFour/WEB/5.jpg"
import houseFourImg6 from "@/public/images/dalts/houseFour/WEB/6.jpg"
import houseFourImg7 from "@/public/images/dalts/houseFour/WEB/7.jpg"
import houseFourImg8 from "@/public/images/dalts/houseFour/WEB/8.jpg"
import houseFourImg9 from "@/public/images/dalts/houseFour/WEB/9.jpg"
import houseFourImg10 from "@/public/images/dalts/houseFour/WEB/10.jpg"

import houseFiveImg1 from "@/public/images/dalts/houseFive/WEB/1.jpg"
import houseFiveImg2 from "@/public/images/dalts/houseFive/WEB/2.jpg"
import houseFiveImg3 from "@/public/images/dalts/houseFive/WEB/3.jpg"
import houseFiveImg4 from "@/public/images/dalts/houseFive/WEB/4.jpg"
import houseFiveImg5 from "@/public/images/dalts/houseFive/WEB/5.jpg"
import houseFiveImg6 from "@/public/images/dalts/houseFive/WEB/6.jpg"
import houseFiveImg7 from "@/public/images/dalts/houseFive/WEB/7.jpg"
import houseFiveImg8 from "@/public/images/dalts/houseFive/WEB/8.jpg"
import houseFiveImg9 from "@/public/images/dalts/houseFive/WEB/9.jpg"
import houseFiveImg10 from "@/public/images/dalts/houseFive/WEB/10.jpg"

import houseSixImg1 from "@/public/images/dalts/houseSix/WEB/1.jpg"
import houseSixImg2 from "@/public/images/dalts/houseSix/WEB/2.jpg"
import houseSixImg3 from "@/public/images/dalts/houseSix/WEB/3.jpg"
import houseSixImg4 from "@/public/images/dalts/houseSix/WEB/4.jpg"
import houseSixImg5 from "@/public/images/dalts/houseSix/WEB/5.jpg"
import houseSixImg6 from "@/public/images/dalts/houseSix/WEB/6.jpg"
import houseSixImg7 from "@/public/images/dalts/houseSix/WEB/7.jpg"
import houseSixImg8 from "@/public/images/dalts/houseSix/WEB/8.jpg"
import houseSixImg9 from "@/public/images/dalts/houseSix/WEB/9.jpg"
import Image from "next/image"
import Link from "next/link"
import { properties } from "@/lib/gallery-properties"

// Category list
const categoriesList = ["All", "Property Management", "Styling", "Renovation"]

const Gallery = () => {
  // STATES FOR THE GALLERY & MODAL
  const [clickedImage, setClickedImage] = useState<{
    img: string
    title: string
    subheading: string
    categories: string[]
    brand: string
    location?: string
    bedrooms?: number
    bathrooms?: number
    carasoleImg?: any
  } | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState("All")

  // STATES FOR FILTER & SEARCH
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isExpanded, setIsExpanded] = useState(true)

  // Category list
  const categories = categoriesList

  // Toggle a category
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    if (category === "All") {
      setSelectedCategories([])
    } else {
      setSelectedCategories([category])
    }
  }

  // Enhanced gallery items with more details
  const galleryItems = [
    {
      img: houseOneImg10,
      title: "Modern Beachside Villa",
      subheading: "Luxury property with ocean views and premium amenities",
      categories: ["Property Management"],
      brand: "Luxe Properties",
      location: "Bondi Beach",
      bedrooms: 4,
      bathrooms: 3,
      carasoleImg: [
        {
          img1: houseOneImg10,
          img2: houseOneImg2,
          img3: houseOneImg3,
          img4: houseOneImg4,
          img5: houseOneImg5,
          img6: houseOneImg6,
          img7: houseOneImg7,
          img8: houseOneImg8,
          img9: houseOneImg9,
          img10: houseOneImg1,
        },
      ],
    },
    {
      img: houseTwoImg10,
      title: "Contemporary Apartment",
      subheading: "Urban living with designer finishes and city views",
      categories: ["Interior Design", "Styling"],
      brand: "Urban Dwellings",
      location: "CBD",
      bedrooms: 2,
      bathrooms: 2,
      carasoleImg: [
        {
          img1: houseTwoImg10,
          img2: houseTwoImg2,
          img3: houseTwoImg3,
          img4: houseTwoImg4,
          img5: houseTwoImg5,
          img6: houseTwoImg6,
          img7: houseTwoImg7,
          img8: houseTwoImg8,
          img9: houseTwoImg9,
          img10: houseTwoImg1,
        },
      ],
    },
    {
      img: houseThreeImg10,
      title: "Renovated Heritage Home",
      subheading: "Classic architecture with modern interior updates",
      categories: ["Renovation", "Interior Design"],
      brand: "Heritage Renovations",
      location: "Paddington",
      bedrooms: 3,
      bathrooms: 2,
      carasoleImg: [
        {
          img1: houseThreeImg10,
          img2: houseThreeImg2,
          img3: houseThreeImg3,
          img4: houseThreeImg4,
          img5: houseThreeImg5,
          img6: houseThreeImg6,
          img7: houseThreeImg7,
          img8: houseThreeImg8,
          img9: houseThreeImg9,
          img10: houseThreeImg1,
        },
      ],
    },
    {
      img: houseFourImg10,
      title: "Luxury Penthouse",
      subheading: "Exclusive top-floor residence with panoramic views",
      categories: ["Property Management", "Styling"],
      brand: "Elite Properties",
      location: "Darling Harbour",
      bedrooms: 3,
      bathrooms: 3,
      carasoleImg: [
        {
          img1: houseFourImg10,
          img2: houseFourImg2,
          img3: houseFourImg3,
          img4: houseFourImg4,
          img5: houseFourImg5,
          img6: houseFourImg6,
          img7: houseFourImg7,
          img8: houseFourImg8,
          img9: houseFourImg9,
          img10: houseFourImg1,
        },
      ],
    },
    {
      img: houseFiveImg1,
      title: "Waterfront Estate",
      subheading: "Expansive property with private dock and landscaped gardens",
      categories: ["Property Management"],
      brand: "Prestige Homes",
      location: "Rose Bay",
      bedrooms: 5,
      bathrooms: 4,
      carasoleImg: [
        {
          img1: houseFiveImg1,
          img2: houseFiveImg2,
          img3: houseFiveImg3,
          img4: houseFiveImg4,
          img5: houseFiveImg5,
          img6: houseFiveImg6,
          img7: houseFiveImg7,
          img8: houseFiveImg8,
          img9: houseFiveImg9,
          img10: houseFiveImg10,
        },
      ],
    },
    {
      img: houseSixImg1,
      title: "Minimalist Townhouse",
      subheading: "Clean lines and thoughtful design in a central location",
      categories: ["Interior Design", "Renovation"],
      brand: "Modern Living",
      location: "Surry Hills",
      bedrooms: 3,
      bathrooms: 2,
      carasoleImg: [
        {
          img1: houseSixImg1,
          img2: houseSixImg2,
          img3: houseSixImg3,
          img4: houseSixImg4,
          img5: houseSixImg5,
          img6: houseSixImg6,
          img7: houseSixImg7,
          img8: houseSixImg8,
          img9: houseSixImg9,
          img10: houseSixImg9,
        },
      ],
    },
  ]

  // Filtering logic based on search term and selected categories
  const filteredGalleryItems = galleryItems.filter((item) => {
    const lowerSearch = searchTerm.toLowerCase()
    const matchesSearch =
      item.title.toLowerCase().includes(lowerSearch) ||
      item.subheading.toLowerCase().includes(lowerSearch) ||
      (item.location && item.location.toLowerCase().includes(lowerSearch))

    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.some((cat) => item.categories.includes(cat))

    return matchesSearch && matchesCategory
  })

  // Items per page
  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredGalleryItems.length / itemsPerPage)

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredGalleryItems.slice(indexOfFirstItem, indexOfLastItem)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const filteredProperties =
    activeCategory === "All"
      ? properties
      : properties.filter(
          (property) =>
            property.categories.includes(activeCategory) ||
            (property.services && property.services.includes(activeCategory)),
        )

  const comingSoonCount = Math.max(0, 9 - filteredProperties.length)
  const comingSoonCards = Array.from({ length: comingSoonCount }, (_, i) => i)

  return (
    <>
      {/* Enhanced Header Section with Decorative Elements */}
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="100%"
        paddingY={["60px", "70px", "80px"]}
        overflow="hidden"
      >
        {/* Decorative elements */}
        <Box
          position="absolute"
          top="20px"
          left="10%"
          width="40px"
          height="40px"
          borderTop="2px solid #e0e0e0"
          borderLeft="2px solid #e0e0e0"
          opacity="0.6"
        />
        <Box
          position="absolute"
          bottom="20px"
          right="10%"
          width="40px"
          height="40px"
          borderBottom="2px solid #e0e0e0"
          borderRight="2px solid #e0e0e0"
          opacity="0.6"
        />

        {/* Main heading with enhanced typography */}
        <Box position="relative">
          <Text
            as="h1"
            fontSize={["42px", "48px", "56px"]}
            fontWeight="700"
            fontFamily="arial"
            letterSpacing="-0.02em"
            marginBottom="6px"
            color="#000"
          >
            Gallery
          </Text>
          <Box width="40px" height="3px" backgroundColor="#000" margin="0 auto" marginBottom="20px" />
          <Text
            fontSize={["16px", "18px", "20px"]}
            fontWeight="400"
            fontFamily="arial"
            color="#666"
            maxWidth="600px"
            lineHeight="1.6"
          >
            Check out our latest work showcasing premium properties and exceptional interior design.
          </Text>
        </Box>
      </Box>

      {/* Category Filter Tabs */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginBottom="40px"
        paddingX={["20px", "30px"]}
      >
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={["10px", "15px", "20px"]}>
          {categories.map((category) => (
            <Box
              key={category}
              onClick={() => handleCategoryChange(category)}
              cursor="pointer"
              paddingX={["12px", "16px", "20px"]}
              paddingY={["8px", "10px", "12px"]}
              borderRadius="30px"
              backgroundColor={activeCategory === category ? "#000" : "transparent"}
              border="1px solid"
              borderColor={activeCategory === category ? "#000" : "#e0e0e0"}
              transition="all 0.3s ease"
              _hover={{
                backgroundColor: activeCategory === category ? "#000" : "#f5f5f5",
              }}
            >
              <Text
                fontSize={["14px", "15px", "16px"]}
                fontWeight={activeCategory === category ? "600" : "400"}
                color={activeCategory === category ? "#fff" : "#333"}
                fontFamily="arial"
              >
                {category}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Main Gallery Container with Enhanced Layout */}
      <Box
        width="100%"
        maxWidth="1400px"
        margin="0 auto"
        paddingX={["20px", "30px", "40px", "60px"]}
        paddingBottom="80px"
      >
        {/* Gallery Grid with Improved Visual Appeal */}
        <Box
          display="grid"
          gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={["24px", "30px", "40px"]}
          width="100%"
        >
          {filteredProperties.map((property) => {
            const isComingSoon = property.id === 9 || property.id === 10

            if (isComingSoon) {
              return (
                <article key={property.id} className="opacity-60 cursor-default">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg h-72 md:h-80 lg:h-[320px] w-full mb-4 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center px-6">
                      <p className="text-3xl font-bold text-gray-500 mb-2">Coming Soon</p>
                      <p className="text-sm text-gray-400 leading-relaxed">Your property could be featured here</p>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-gray-500/70 backdrop-blur-sm rounded-full z-10">
                      <span className="text-xs font-semibold text-white uppercase tracking-wide">Upcoming</span>
                    </div>
                  </div>
                  <div className="px-1">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-500 mb-1">{property.title}</h2>
                    <p className="text-sm text-gray-400 mb-2">{property.shortDescription}</p>
                  </div>
                </article>
              )
            }

            return (
              <Link key={property.id} href={`/gallery/${property.id}`} className="group cursor-pointer">
                <article>
                  {/* Property Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg h-72 md:h-80 lg:h-[320px] w-full mb-4">
                    <Image
                      src={property.mainImage || "/placeholder.svg?height=320&width=400"}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full z-10">
                      <span className="text-xs font-semibold text-white uppercase tracking-wide">
                        Property Management
                      </span>
                    </div>

                    {property.services && property.services.length > 0 && (
                      <div className="absolute top-16 left-4 flex flex-wrap gap-1.5 max-w-[calc(100%-5rem)] z-10">
                        {property.services.map((service, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-md text-[10px] font-medium text-gray-800"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>

                  {/* Property Information */}
                  <div className="px-1">
                    <h2 className="text-lg md:text-xl font-semibold text-black mb-1">{property.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{property.shortDescription}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-gray-700">
                        {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {property.bathrooms} {property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}

          {comingSoonCards.map((index) => (
            <article key={`coming-soon-${index}`} className="opacity-60 cursor-default">
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-72 md:h-80 lg:h-[320px] w-full mb-4 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-gray-600 mb-1">Future Transformation</p>
                  <p className="text-sm text-gray-500 leading-relaxed">Let us showcase your success story</p>
                </div>

                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gray-500/70 backdrop-blur-sm rounded-full z-10">
                  <span className="text-xs font-semibold text-white uppercase tracking-wide">Upcoming</span>
                </div>
              </div>

              <div className="px-1">
                <h2 className="text-lg md:text-xl font-semibold text-gray-500 mb-1">Future Transformation</h2>
                <p className="text-sm text-gray-400 mb-2">Let us showcase your success story</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-400">Contact us</span>
                </div>
              </div>
            </article>
          ))}
        </Box>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Box display="flex" justifyContent="center" alignItems="center" marginTop="60px" gap="8px">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                onClick={() => paginate(index + 1)}
                cursor="pointer"
                width="10px"
                height="10px"
                borderRadius="50%"
                backgroundColor={currentPage === index + 1 ? "#000" : "#e0e0e0"}
                transition="all 0.3s ease"
                _hover={{
                  backgroundColor: currentPage === index + 1 ? "#000" : "#aaa",
                }}
              />
            ))}
          </Box>
        )}
      </Box>

      {/* Enhanced Modal Dialog for Clicked Image */}
      <DialogRoot size="full" open={modalOpen} onOpenChange={(details) => setModalOpen(details.open)}>
        <DialogContent
          bg="white"
          color="white"
          rounded="10px"
          w={["100%", "100%", "100%", "100%", "100%", "100%"]}
          h={["100%", "100%", "100%", "100%", "100%", "100%"]}
          borderRadius="10px"
        >
          {clickedImage && (
            <Box position="relative" width="100%" height="100%" display="flex" flexDirection="column">
              {/* Property Details Header */}
              <Box
                padding="20px"
                borderBottom="1px solid #eee"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="white"
                color="black"
              >
                <Box>
                  <Text fontSize={["20px", "24px"]} fontWeight="700" fontFamily="arial">
                    {clickedImage.title}
                  </Text>
                  <Text fontSize="16px" color="#666" fontFamily="arial">
                    {clickedImage.location}
                  </Text>
                </Box>

                <Box display="flex" alignItems="center" gap="16px">
                  <Box display="flex" alignItems="center" gap="4px">
                    <Text fontSize="14px" fontWeight="500" color="#333">
                      {clickedImage.bedrooms} Beds
                    </Text>
                  </Box>

                  <Box display="flex" alignItems="center" gap="4px">
                    <Text fontSize="14px" fontWeight="500" color="#333">
                      {clickedImage.bathrooms} Baths
                    </Text>
                  </Box>
                </Box>
              </Box>

              {/* Slider Container */}
              <Box
                flex="1"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                position="relative"
                backgroundColor="#f5f5f5"
              >
                <Box width={["95%", "95%", "95%", "90%", "85%", "80%"]}>
                  <DefaultSlider items={clickedImage.carasoleImg?.[0]} />
                </Box>

                {/* Navigation Arrows */}
              </Box>

              {/* Property Description Footer */}
              <Box padding="20px" borderTop="1px solid #eee" backgroundColor="white" color="black">
                <Text fontSize="16px" lineHeight="1.6" color="#333" fontFamily="arial">
                  {clickedImage.subheading}
                </Text>
              </Box>
            </Box>
          )}

          {/* Enhanced Close Button */}
          <DialogCloseTrigger
            as={Box}
            position="absolute"
            top="100px"
            right="16px"
            width="40px"
            height="40px"
            borderRadius="50%"
            backgroundColor="rgba(255,255,255,0.9)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            boxShadow="0 2px 10px rgba(0,0,0,0.1)"
            zIndex="10"
            onClick={() => setModalOpen(false)}
            _hover={{
              backgroundColor: "white",
            }}
            _focus={{ outline: "none" }}
          >
            <X size={20} color="#000" />
          </DialogCloseTrigger>
        </DialogContent>
      </DialogRoot>

      {/* Enhanced Separator with Design Element */}
      <Box
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        marginY={["60px", "80px", "100px"]}
        paddingX="20px"
      >
        <Box width="100%" height="1px" backgroundColor="#e0e0e0" />
        <Box position="absolute" backgroundColor="white" paddingX="20px">
          <Box
            width="40px"
            height="40px"
            borderRadius="50%"
            border="1px solid #e0e0e0"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="20px" height="20px" borderRadius="50%" backgroundColor="#000" />
          </Box>
        </Box>
      </Box>

      <ScheduleConsultation />
    </>
  )
}

export default Gallery
