import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-blue-500 p-3">
      <div>LOGO</div>
      <nav>
        <menu className="flex gap-4 items-center">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/todos" className="hover:underline">To Dos</Link>
          </li>
          <li>
            <Link href="/todos/add" className="flex border border-white px-3 py-1 rounded-lg hover:bg-white hover:text-blue-500 transition-colors">+</Link>
          </li>
        </menu>
      </nav>
    </header>
  )
}

export default Header