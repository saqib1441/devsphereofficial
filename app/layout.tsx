import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

// Load Google Fonts
const poppins = Poppins({ subsets: ["latin"], weight: "400", display: "swap" });
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
  variable: "--font-nunito",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Dev Sphere - An IT Software Company",
  description:
    "Dev Sphere offers expert IT solutions, including web & app development, digital marketing, SEO, WordPress, UI/UX, and graphic design. Elevate your business with cutting-edge technology and innovation!",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TRCRWYNJ1P"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TRCRWYNJ1P');
            `,
          }}
        />

        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dev Sphere" />
        <link rel="canonical" href="https://www.devsphereofficial.online/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dev Sphere - An IT Software Company"
        />
        <meta
          property="og:description"
          content="Dev Sphere offers expert IT solutions, including web development, SEO, and digital marketing."
        />
        <meta
          property="og:url"
          content="https://www.devsphereofficial.online/"
        />
        <meta property="og:image" content="/og.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dev Sphere - IT Solutions" />
        <meta
          name="twitter:description"
          content="Expert IT solutions, web development, and digital marketing services."
        />
        <meta name="twitter:image" content="/og.png" />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="7cT9PWonrQ2_sew-UQkEqur8FYO4HK8gUpLy3z9ejCo"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dev Sphere",
            url: "https://www.devsphereofficial.online/",
            logo: "https://www.devsphereofficial.online/logo.png",
            description:
              "Dev Sphere provides top-notch IT solutions, including web & app development, SEO, digital marketing, and UI/UX design.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+923467890654",
              contactType: "Customer Service",
            },
          })}
        </script>
      </head>

      <body className={`${nunito.variable} ${poppins.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Toaster position="top-center" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
