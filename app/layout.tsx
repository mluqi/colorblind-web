import type { Metadata } from "next";
import { Dela_Gothic_One } from "next/font/google";
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
      <body className={delaGothicOne.variable}>
          <Header />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
