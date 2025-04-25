import type { Metadata } from "next";
import { Poppins, Dela_Gothic_One } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";

const delaGothic = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300","400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Colorblind",
  description: "Prebuild Coil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
