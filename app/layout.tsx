// app/layout.tsx
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Loading from "./loading";
import LuxeAiAssistance from "@/components/luxeComponents/LuxeAiAssistance";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ClientProviderWithFallback = dynamic(
  () => import("@/components/chakra-snippets/ClientProvider"),
  { loading: () => <Loading /> },
);

// eslint-disable-next-line import/no-unused-modules
export const metadata: Metadata = {
  title: "AirBnB Property Management in Adelaide | Luxe Managements",
  description:
    "Boost your AirBnB rental income with comprehensive property management solutions in Adelaide, offering expert guidance, seamless hosting, and premium guest experiences.",
  metadataBase: new URL("https://www.luxemanagements.com"),

  // The manifest.json file is a JSON file that contains metadata about your
  // Next.js project. It is used by the browser to determine the resources that
  // are needed to render your application.

  alternates: {
    canonical: "https://www.luxemanagements.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "AirBnB Property Management Adelaide | Luxe Managements",
    description:
      "Boost your AirBnB rental income with comprehensive property management solutions in Adelaide, offering expert guidance, seamless hosting, and premium guest experiences.",
    url: "https://www.luxemanagements.com",
    locale: "en_US",

  
    siteName: "Luxe Managements",
    images: [
      {
        url: "https://www.luxemanagements.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luxe Managements AirBnB property management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirBnB Property Management Adelaide | Luxe Managements",
    site: "@LuxeManagements",
    creator: "@LuxeManagements",

    description: "Boost your AirBnB rental income with comprehensive property management solutions in Adelaide, offering expert guidance, seamless hosting, and premium guest experiences.",
    images: ["https://www.luxemanagements.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// eslint-disable-next-line import/no-unused-modules
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        {/* Accessibility: Skip‐to‐Content */}

        {/* Performance: load non‐critical analytics after hydration */}
        <Analytics />
        <SpeedInsights />

        <ClientProviderWithFallback>
          <LuxeAiAssistance />

          {children}
        </ClientProviderWithFallback>
      </body>
    </html>
  );
}
