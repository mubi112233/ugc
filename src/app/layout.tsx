import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import "@/styles/main.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { DesignSystemProvider } from "@/components/DesignSystemProvider";
import { SITE_URL, absoluteUrl } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "zTMUXhxUzHgubS_eqXsgD0A9vKA6zgIK-9SIJyr0VT8",
  },
  title: {
    default: "UGC Studio | High-Converting User Generated Content for TikTok, Reels, Shorts",
    template: "%s | UGC Studio",
  },
  description:
    "Creators who convert. We script, shoot, and edit UGC videos that make your product the star-optimized for TikTok, Reels, and Shorts. Fast turnaround, usage rights included.",
  keywords: [
    "UGC",
    "user generated content",
    "TikTok videos",
    "Instagram Reels",
    "YouTube Shorts",
    "video marketing",
    "content creation",
    "social media marketing",
    "video production",
    "brand content",
    "UGC Studio",
  ],
  authors: [{ name: "UGC Studio", url: SITE_URL }],
  creator: "UGC Studio",
  publisher: "UGC Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "UGC Studio",
    title: "UGC Studio | High-Converting User Generated Content",
    description:
      "On-brand short-form videos for TikTok, Reels, and Shorts. Script + shoot + edit + usage rights. Fast turnaround, proven results.",
    url: absoluteUrl("/en"),
    locale: "en_US",
    alternateLocale: ["de_DE"],
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "UGC Studio - High-Converting User Generated Content" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC Studio | High-Converting User Generated Content",
    description:
      "On-brand short-form videos for TikTok, Reels, and Shorts. Script + shoot + edit + usage rights.",
    images: [absoluteUrl("/og-image.jpg")],
  },
  alternates: {
    canonical: absoluteUrl("/en"),
    languages: {
      en: absoluteUrl("/en"),
      de: absoluteUrl("/de"),
      "x-default": absoluteUrl("/en"),
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UGC Studio",
  url: SITE_URL,
  logo: absoluteUrl("/favicon.ico"),
  description:
    "Creators who convert. We script, shoot, and edit UGC videos that make your product the star-optimized for TikTok, Reels, and Shorts.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "German"],
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Place", name: "Worldwide" },
  ],
  sameAs: [
    "https://twitter.com/ugcstudio",
    "https://instagram.com/ugcstudio",
    "https://linkedin.com/company/ugc-studio"
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "UGC Studio",
  url: SITE_URL,
  inLanguage: ["en-US", "de-DE"],
  publisher: { "@type": "Organization", name: "UGC Studio" },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const htmlLang = headersList.get("x-html-lang") || "en";

  return (
    <html lang={htmlLang} suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VLKM5WTHL8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VLKM5WTHL8');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <DesignSystemProvider defaultTheme="ugc">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </DesignSystemProvider>
      </body>
    </html>
  );
}
