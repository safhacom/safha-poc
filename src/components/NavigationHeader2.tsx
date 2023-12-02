// components/NavigationHeader.tsx
import { Dialog, Transition } from "@headlessui/react"
import { MenuIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { Fragment, useState } from "react"

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact Me", href: "#contact" },
]

const NavigationHeader2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false)
    router.push(href)
  }

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-100 text-sm font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:flex-1">
              {navigationLinks.slice(0, 2).map((link) => (
                <Link key={link.name} href={link.href} scroll={false}>
                  <p
                    onClick={() => handleNavigation(link.href)}
                    className="text-base font-medium text-gray-600 hover:text-royalblue-600"
                  >
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>
            <Link href="/">
              <Image src="/icon.png" alt="Logo" width={40} height={40} />
            </Link>
            <div className="flex items-center justify-end lg:flex-1">
              {navigationLinks.slice(2).map((link) => (
                <Link key={link.name} href={link.href} scroll={false}>
                  <p
                    onClick={() => handleNavigation(link.href)}
                    className="text-base font-medium text-gray-600 hover:text-royalblue-600"
                  >
                    {link.name}
                  </p>
                </Link>
              ))}
              <div className="-mr-2 -my-2 md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-royalblue-500"
                  aria-expanded="false"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Transition as={Fragment} show={isMenuOpen}>
        <Dialog
          as="div"
          className="relative z-10 md:hidden"
          onClose={setIsMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    {navigationLinks.map((link) => (
                      <Link key={link.name} href={link.href} scroll={false}>
                        <p
                          className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                          onClick={() => handleNavigation(link.href)}
                        >
                          {link.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-royalblue-600 text-base font-medium text-white hover:bg-royalblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royalblue-500 sm:text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default NavigationHeader2
