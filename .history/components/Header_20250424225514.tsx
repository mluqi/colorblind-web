import Link from "next/link"

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto">
        <Link href="/">
        <h1></h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
