import Link from "next/link"

//components
import Nav from "@/components/Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto">
        <Link href="/">
        <h1 className="text-4xl font-semibold uppercase">Color<span className="text-accent uppercase">Blind</span></h1>
        </Link>

        <div>
            <Nav />
        </div>
      </div>
    </header>
  )
}



export default Header
