import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://bimtech.com.ng"),
  title: {
    default: "BimTech SOLUTIONS — Education Technology Solutions",
    template: "%s | BimTech SOLUTIONS",
  },
  description:
    "Nigeria's leading integrated education technology provider. Online Grading System, JAMB/WAEC/NECO CBT Practice, IoT Automation Bell, Biometrics Attendance & School Website Development.",
  keywords: [
    "BimTech",
    "BimTech SOLUTIONS",
    "online grading system Nigeria",
    "JAMB CBT practice",
    "WAEC CBT practice",
    "NECO CBT practice",
    "IoT school bell Nigeria",
    "biometrics attendance system",
    "school website Nigeria",
    "education technology Nigeria",
    "ModTech Nigeria",
    "CBT practice app",
    "school management system",
    "automated bell system",
    "fingerprint attendance school",
  ],
  authors: [{ name: "BimTech SOLUTIONS", url: "https://bimtech.com.ng" }],
  creator: "BimTech SOLUTIONS",
  publisher: "BimTech SOLUTIONS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://bimtech.com.ng",
    siteName: "BimTech SOLUTIONS",
    title: "BimTech SOLUTIONS — Education Technology Solutions",
    description:
      "Nigeria's leading integrated ModTech provider. Online Grading, JAMB/WAEC/NECO CBT, IoT Bell, Biometrics & School Websites.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BimTech SOLUTIONS — Education Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BimTech SOLUTIONS — Education Technology Solutions",
    description:
      "Nigeria's leading integrated ModTech provider. Online Grading, JAMB/WAEC/NECO CBT, IoT Bell, Biometrics & School Websites.",
    images: ["/og-image.jpg"],
    creator: "@bimtechltd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bimtech.com.ng",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
      </head>
      {/* Changed bg-white to bg-slate-100 (ash) */}
      <body className="bg-slate-100 text-slate-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BimTech SOLUTIONS",
              url: "https://bimtech.com.ng",
              logo: "https://bimtech.com.ng/logo.png",
              description:
                "Nigeria's leading integrated education technology provider.",
              foundingDate: "2015",
              founder: {
                "@type": "Person",
                name: "Miss. Abimbola Olayemi Omiyale",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "42 Tech Avenue, Ikeja",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-812-345-6789",
                contactType: "customer service",
                areaServed: "NG",
                availableLanguage: "English",
              },
              sameAs: [
                "https://twitter.com/bimtechltd",
                "https://linkedin.com/company/bimtechltd",
                "https://facebook.com/bimtechltd",
                "https://instagram.com/bimtechltd",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}