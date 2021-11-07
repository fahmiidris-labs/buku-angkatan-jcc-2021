import Link from "next/link"
import { forwardRef } from "react"
import { useRouter } from "next/router"

import { Disclosure } from "@headlessui/react"
import { MdOutlineTouchApp } from "react-icons/md"
import { HiX, HiMenu, HiSearch, HiOutlinePencilAlt, HiOutlineLogin } from "react-icons/hi"

import { ApplicationLogo, ApplicationMark } from "../small/ApplicationLogo"

import { classNames } from "@/utils/helper"

type NavbarLinkType = {
  href: string,
}

type LinksType = {
  text: string,
  path: string,
}

export const Navbar: React.FC = () => {
  const links: LinksType[] = [
    {
      text: "Home",
      path: "/"
    },
    {
      text: "List Peserta",
      path: "/participant-list"
    },
  ]

  return (
    <Disclosure as="nav" className="bg-gray-700 fixed top-0 inset-x-0 z-50">
      {({ open }) => (
        <>
          <div className="container">
            <div className="relative flex items-center justify-center sm:justify-between h-16">

              {/* Mobile Left Menu Navigation */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
              </div>

              {/* Left Menu Navigation */}
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                  <a className="flex-shrink-0 flex items-center">
                    <ApplicationMark className="hidden lg:block h-8 w-auto" color="white" />
                    <ApplicationLogo className="block lg:hidden h-8 w-auto" />
                  </a>
                </Link>

                {/* Main Menu Navigration */}
                <div className="hidden sm:block sm:ml-4">
                  <div className="flex space-x-1">
                    {links.map((link, i) => (
                      <NavbarLink key={i} href={link.path}>
                        {link.text}
                      </NavbarLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Menu Navigation */}
              <div className="hidden lg:flex items-center justify-end">
                <div className="hidden lg:block">
                  <div className="flex justify-center items-center space-x-1">
                    
                  </div>
                </div>
              </div>

              {/* Mobile Right Menu Navigation */}
              <div className="absolute inset-y-0 right-0 flex items-center space-x-1 lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center border border-transparent p-2 rounded-lg text-white bg-gray-600 hover:bg-gray-800 duration-150 ease-in-out">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block w-5 h-5 sm:w-4 sm:h-4" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block w-5 h-5 sm:w-4 sm:h-4" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Dropdown Menu Mobile Mode */}
          <Disclosure.Panel className="lg:hidden">
            <div className="px-4 pt-2 pb-5 space-y-1 sm:hidden">
              {links.map((link, i) => (
                <Disclosure.Button as={ResponsiveNavbarLink} key={i} href={link.path}>
                  {link.text}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

const NavbarLink: React.FC<NavbarLinkType> = ({ href, children, ...props }) => {
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a
        className={classNames(
          "inline-flex justify-center items-center text-white border border-transparent",
          asPath === href && "bg-gray-600",
          "px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-600 duration-100 ease-in-out"
        )}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}

const ResponsiveNavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkType>(({ href, children, ...props }, ref) => {
  const { asPath } = useRouter()

  return (
    <Link href={href} passHref>
      <a
        href={href}
        className={classNames(
          "group block text-white border border-transparent",
          asPath === href && "bg-gray-600",
          "px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-600 duration-100 ease-in-out"
        )}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
})

ResponsiveNavbarLink.displayName = "ResponsiveNavbarLink"
