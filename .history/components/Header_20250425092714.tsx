import Link from "next/link"
import Image from "next/image";

//components
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="py-5 xl:py-8  text-white w-full sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-accent">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
        <Image 
            src="/assets/logo.png" 
            alt="Logo" 
            width={500} 
            height={500}
            className="w-40 xl:w-64 h-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden xl:flex gap-8">
            <Nav />
        </div>

        <div className="xl:hidden">
            <MobileNav />
        </div>
      </div>
    </header>
  )
}



export default Header
