// components/Header.tsx
import Burger from "./Burger"

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md z-20">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-royal-blue text-xl font-bold">Logo</div>
        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-royal-blue hover:text-peach transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-royal-blue hover:text-peach transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-royal-blue hover:text-peach transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-royal-blue hover:text-peach transition-colors"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <Burger />
      </div>
    </header>
  )
}

export default Header
