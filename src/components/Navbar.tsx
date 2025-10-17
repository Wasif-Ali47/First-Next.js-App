// import Link from 'next/link'
// import React from 'react'

// export default function Navbar() {
//   return (
//     <>
//     <div className="mx-auto mt-1 w-[90%] bg-[#2d014b70] backdrop-blur-xs px-4 py-3 text-[#dddddd] flex justify-between items-center font-bold rounded-4xl  border-1 z-50 fixed top-4 left-1/2 -translate-x-1/2" >
//               <a className="text-2xl px-7" href={"/"}>Next App</a>
//               <div className="flex gap-15 ">
//               <Link href={"/"} className='hover:text-[#9d00ff] transition duration-200 ' >Home</Link>
//               <Link href={"/about"} className='hover:text-[#9d00ff] transition duration-200 ' >About</Link>
//               <Link href={"/contact"} className='hover:text-[#9d00ff] transition duration-200 ' >Contact</Link>
//               </div>
//               <div className='flex gap-1'>
//               <a href="#" className='bg-[#dddddd] text-[#2d014b] rounded-2xl py-2 px-3 '>Sign in</a>
//               <a href="#" className='bg-[#2d014b00] border-1 text-[#dddddd] rounded-2xl py-2 px-3 '>Sign up</a>
//               </div>
//             </div>
//     </>
//   )
// }





import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Example() {
  return (
    <>
    <Disclosure
      as="nav"
      className="mx-auto mt-1 w-full bg-[#2d014b70] backdrop-blur-xs text-[#dddddd] font-bold  border-t border-b border-white/40 z-1500 fixed top-4 left-1/2 -translate-x-1/2" >      
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-[#9d00ff] ' : 'text-gray-300  hover:text-[#cf81ff] transition duration-200', ' px-3 py-2 text-sm font-medium', )}
                    >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* sign in / sign up buttons */}
          <div className='flex gap-1'>
              <Link href="#" className='bg-[#42016d] text-white hover:bg-transparent font-light border border-white/70 py-2 px-3 text-center transition duration-200'>Sign in</Link>
              <Link href="#" className='bg-transparent text-white hover:bg-[#42016d] font-light border border-white/70 py-2 px-3 text-center transition duration-200'>Sign up</Link>
             </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </>
  )
}
