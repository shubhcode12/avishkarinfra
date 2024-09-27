import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { logo } from '../../../public/assets/images'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useState } from 'react'
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

export default function Navbar() {
    const router = useRouter();
    const [menu, setmenu] = useState(false);
    const current = (link: any) => link === router.pathname;
  return (
    <Disclosure as="nav" className={` lg:mx-8 flex flex-col ${menu && "h-screen"} bg-black/40 fixed lg:top-8 inset-x-0 border border-white/20 dark:border-white/[0.2] lg:rounded-full dark:bg-black backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] `}>
      <div className="mx-auto w-full px-2 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className=" inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:underline hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={()=>setmenu(!menu)}>
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
                src={logo.headerlogowhite}
                className="pl-2 h-10 w-auto ml-4"
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
                      current(item.href) ? 'underline text-white' : 'text-white hover:underline hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 gap-4 sm:pr-0">
            
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
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>

  )
}
