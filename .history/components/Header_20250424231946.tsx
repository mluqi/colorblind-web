import Link from "next/link"

//components
import Nav from "@/components/Nav";

const Header = () => {
  return (
    <header className="py-6 xl:py-10  text- w-full sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md border-b border-accent">
      <div className="container mx-auto">
        <Link href="/">
        <h1 className="text-4xl font-semibold uppercase">Color<span className="text-accent uppercase">Blind</span></h1>
        </Link>

        <div className="">
            <Nav />
        </div>
      </div>
    </header>
  )
}



export default Header
