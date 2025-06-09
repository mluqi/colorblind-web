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
  title: "Colorblind",
  description: "Prebuild Coil",
  icons: {
    icon: "/assets/logo.png",
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
