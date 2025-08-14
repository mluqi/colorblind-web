import type { Metadata } from "next";
import { Dela_Gothic_One } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";
import "./globals.css";

//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const delaGothicOne = Dela_Gothic_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dela-gothic-one",
});

export const metadata: Metadata = {
  title: {
    default: "Colorblind Prebuild Coil",
    template: "%s | Colorblind",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-96x96.png",
        sizes: "96x96",
      },
      
    ],
  },
  description:
    "Discover high-quality prebuilt coils for your vaping needs. Colorblind offers a wide range of coils designed for optimal performance and flavor.",
  keywords: [
    "prebuild coils",
    "coil building",
    "coil builder",
    "colorblind coils",
    "colorblind wire",
    "vaping coils",
    "vape accessories",
    "high-quality coils",
    "flavorful vaping",
    "coil performance",
    "coil shop",
    "vape shop",
    "vape supplies",
    "coil enthusiasts",
    "coil customization",
    "coil selection",
    "coil types",
    "coil materials",
    "coil resistance",
  ],
  openGraph: {
    title: "Colorblind Wire - Prebuild Coil",
    description:
      "Discover high-quality prebuilt coils for your vaping needs. Colorblind offers a wide range of coils designed for optimal performance and flavor.",
    url: "https://www.colorblindwire.store",
    siteName: "colorblindwire.store",
    images: [
      {
        url: "http://localhost:3000/_next/image?url=%2Fassets%2Flogo_link.png&w=3840&q=75", // Pastikan URL gambar absolut dan benar
        width: 1200,
        height: 630,
        alt: "KAMO Ecommerce Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colorblind Wire - Prebuild Coil",
    description:
      "Temukan berbagai sparepart motor gede (moge) berkualitas dan aksesorisnya di kampoengmoge.com",
    images:
      "http://localhost:3000/_next/image?url=%2Fassets%2Flogo_link.png&w=3840&q=75",
    site: "@colorblind.coils", // Tambahkan handle Twitter jika ada
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
    canonical: "https://www.colorblindwire.store",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="O1Cderxkcartk0R3ljJoP-fXdxszve1RpZe9YW-mugc"
        />
      </head>
      <body className={delaGothicOne.variable}>
        <CartProvider>
          <CartSidebar />
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
