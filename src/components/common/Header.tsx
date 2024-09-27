import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { logo } from '../../../public/assets/images'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigation = [
  { name: 'Home', href: '/', },
  { name: 'Services', href: '/services',},
  { name: 'Gallery', href: '/gallery',},
  { name: 'Projects', href: '/projects',},
  { name: 'Blogs', href: '/blogs',},
  { name: 'About', href: '/about',},
  { name: 'Contact Us', href: 'contactus',},
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar2() {
    const router = useRouter();
    const current = (link: any) => link === router.pathname;
    const [isScrolled, setIsScrolled] = useState(false)
const isHomeRoute = router.pathname === '/'
const isHomePage = router.pathname === '/'
  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('.hero-banner')
      const heroHeight = heroElement instanceof HTMLElement ? heroElement.offsetHeight : 0
      setIsScrolled(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textColorClass = isScrolled ? 'text-black' : 'text-white'
  const hoverBackgroundClass = isScrolled ? 'hover:underline' : 'hover:underline'
  return (
    <div className='w-full'>

    <Disclosure as="nav" className={`${isHomePage && isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:py-5 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className=" inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:underline hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div>
          <div className="flex flex-shrink-0 items-center">
          <Image
                alt="Your Company"
                src={( isHomePage && isScrolled) ? logo.headerlogo : logo.headerlogowhite}
                className={`${( isHomePage && isScrolled) ?"h-[72px]":"h-[52px]"} mt-2 w-auto`}
              />
              
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch ">
            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      current(item.href) ? `${ isScrolled ? 'text-secondary' : 'text-white'} ${textColorClass}` : `${textColorClass} ${hoverBackgroundClass}`,
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 gap-4 sm:pr-0">
            {/* <Button className='bg-transparent text-white border hover:border-primary'>Login</Button> */}

            {/* Profile dropdown */}
            <Button>Get a Quote</Button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                current(item.href) ? 'underline text-white' : 'text-white hover:underline hover:text-white',
                `rounded-md px-3 py-2 text-sm font-medium ${isHomeRoute && isScrolled ? 'text-secondary' : 'text-white'}`,
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </div>
  )
}
