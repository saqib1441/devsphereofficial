import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Sphere - An IT Software Company",
  description:
    "At Dev Sphere, we provide top-notch IT services, including web development, app development, digital marketing, SEO, WordPress, UI/UX design, and graphic design. Our expert team is dedicated to delivering innovative and customized solutions that help businesses thrive in the digital world. Partner with us for cutting-edge technology and exceptional results!",
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
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        {/* Favicon Links */}
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
        <meta
          name="google-site-verification"
          content="7cT9PWonrQ2_sew-UQkEqur8FYO4HK8gUpLy3z9ejCo"
        />
      </head>
      <body className={`${nunito.className} ${poppins.className} antialiased`}>
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
