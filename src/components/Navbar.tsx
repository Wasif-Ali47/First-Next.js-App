"use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTransitionRouter } from 'next-view-transitions'
import Link from 'next/link'
import { pageAnimation } from './animations/PageTransition';
import { motion, useScroll } from 'framer-motion';


const route = [
  { name: 'Home', url: '/', current: true },
  { name: 'About', url: '/about', current: false },
  { name: 'Contact', url: '/contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const scrollYProgress = useScroll().scrollYProgress

  const router = useTransitionRouter();

 

  return (
    <>
      <Disclosure
        as="nav"
        className="mx-auto mt-1 w-full bg-[#2d014b70] backdrop-blur-xs text-[#dddddd] font-bold  border-y border-white/40 z-1500 fixed top-4 left-1/2 -translate-x-1/2" >
        <motion.div className='border-t w-full origin-left'  style={{scaleX:scrollYProgress}}/>

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
                  {route.map((route) => (
                    <Link
                      key={route.name}
                      href={route.url}
                      aria-current={route.current ? 'page' : undefined}
                      onClick={ async (e) => {
                      e.preventDefault();
                      await router.push (route.url, { onTransitionReady: pageAnimation });
                    }}
                      className={classNames(
                        route.current ? ' text-[#9d00ff] ' : 'text-gray-300  hover:text-[#cf81ff] transition duration-200', ' px-3 py-2 text-sm font-medium',)}
                    >
                      {route.name}
                    </Link>
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
            {route.map((route) => (
              <DisclosureButton
                key={route.name}
                as="a"
                href={route.url}
                aria-current={route.current ? 'page' : undefined}
                onClick={ async (e) => {
                      e.preventDefault();
                      await router.push (route.url, { onTransitionReady: pageAnimation });
                    }}
                className={classNames(
                  route.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {route.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
        <motion.div className='border-b w-full origin-left'  style={{scaleX:scrollYProgress}}/>
      </Disclosure>
    </>
  )
}
