import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CardData {
  imgUrl: string;
  title: string;
  description: string;
}

interface CardDataHeader {
  mainTitle: string;
  mainDescription: string;
}

const ServicesThreeCards = ({
  cardsData,
  CardDataHeader,
}: {
  cardsData: CardData[];
  CardDataHeader: CardDataHeader[];
}) => {
  return (
    <Box
  
      w="100%"
      px={["4%", "4%", "6%", "6%", "6%", "10%"]}
      fontFamily="arial"
      position="relative"
    >
      {/* Section Header */}
      <Box
        mb={["40px", "50px", "60px"]}
        maxWidth="800px"
        mx="auto"
        textAlign="center"
      >
        <Box
          width="40px"
          height="4px"
          bg="black"
          mx="auto"
          mb="16px"
          borderRadius="2px"
        />
        <Text
         textStyle={"heading"}
          fontWeight="700"
          mb="16px"
          lineHeight="1.2"
        >
          {CardDataHeader[0].mainTitle}
        </Text>
        <Text
          textStyle={"basicText"}
          color="#4A5568"
          lineHeight="1.6"
        >
          {CardDataHeader[0].mainDescription}
        </Text>
      </Box>

      {/* Decorative element */}


      <Box
        display="flex"
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="center"
        alignItems="stretch"
        gap={["26px", "26px", "26px", "26px"]}
        width="100%"
        position="relative"
      >
        {cardsData.map((card, index) => (
          <Box
            key={index}
            width={["100%", "100%", "100%", `${100 / 3}%`]}
            display="flex"
            flexDirection="column"
            position="relative"
            _hover={{
              transform: "translateY(-8px)",
              transition: "all 0.4s ease",
            }}
            transition="all 0.3s ease"
          >
            {/* Number indicator */}

            {/* Card image */}
            <Box
              position="relative"
              height={["240px", "260px", "280px", "300px"]}
              borderRadius="16px"
              cursor="pointer"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              _hover={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgGradient:
                  "linear(to-t, rgba(23,25,35,0.7) 0%, rgba(23,25,35,0.5) 40%, rgba(23,25,35,0.2) 80%, rgba(23,25,35,0.1) 100%)",
                zIndex: 1,
              }}
            >
              <Image
                quality={70}
                loading="lazy"
                src={card.imgUrl}
                alt={card.title}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              {/* Accent line */}

          
               
            </Box>

            {/* Card content */}
            <Box pt="20px" pb="24px" px="4px">
              <Text
                textAlign={"center"}
                color="black"
                textStyle={"subheading"}
                fontWeight="700"
                lineHeight="1.2"
                mb="8px"
              >
                {card.title}
              </Text>
              <Text
                textStyle={"smallText"}
                color="#2D3748"
                lineHeight="1.7"
                mb="16px"
                textAlign={"center"}
              >
                {card.description}
              </Text>

              {/* Learn more link */}
            </Box>

            {/* Bottom accent */}
          </Box>
        ))}
      </Box>


    </Box>
  );
};

export default ServicesThreeCards;
