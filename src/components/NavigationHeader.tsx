// components/NavigationHeader.tsx
import { Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact Me", href: "#contact" },
]

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex-1 flex justify-start lg:w-0">
          <ul className="hidden lg:flex space-x-8">
            {navigationLinks.slice(0, 2).map((link) => (
              <li
                key={link.name}
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                <Link href={link.href}>
                  <p className="text-base font-medium">{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center lg:flex-1">
          <Link href="/">
            <p>
              <Image src="/icon.png" alt="Logo" width={40} height={40} />
            </p>
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center lg:w-0">
          <ul className="hidden lg:flex space-x-8">
            {navigationLinks.slice(2).map((link) => (
              <li
                key={link.name}
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                <Link href={link.href}>
                  <p className="text-base font-medium">{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
            >
              {isMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <Transition
        show={isMenuOpen}
        enter="transition-opacity ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="lg:hidden fixed inset-0 z-20 bg-white h-screen">
          <div className="flex justify-between items-center p-5 border-b border-gray-300">
            <Link href="/">
              <p>
                <Image src="/icon.png" alt="Logo" width={40} height={40} />
              </p>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
            >
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="space-y-6 p-5">
            {navigationLinks.map((link) => (
              <li
                key={link.name}
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                <Link href={link.href}>
                  <p
                    className="text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </header>
  )
}

export default NavigationHeader
