import type { Metadata } from "next";
import { Poppins, Dela_Gothic_One } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import Background from "@/components/Background";

const delaGothicOne = Dela_Gothic_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dela-gothic-one",
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
      <body className={delaGothicOne.variable}>
        {/* <Background opacity={20}> */}
          <Header />
          <main>{children}</main>
        {/* </Background> */}
      </body>
    </html>
  );
}
