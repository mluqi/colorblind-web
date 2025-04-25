import Link from "next/link"

//components
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-10  text-white w-full sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-accent">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
        <h1 className="text-2xl xl:text-4xl font-semibold uppercase">Color<span className="text-accent uppercase">Blind</span></h1>
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
