import Link from "next/link"
import Image from "next/image";

//components
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-10  text-white w-full sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-accent">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
        <Image
          src="/assets/logo.png"
          alt=""
          width={300}
          height={250}
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
