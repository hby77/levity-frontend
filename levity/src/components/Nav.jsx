import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Nav = () => {

  return (
    <Disclosure as="nav" className="bg-[#282828] shadow flex ">
      {({ open }) => (
        <>
          <div className="mx-auto z-10 px-4 sm:px-6 lg:px-8">
            <div className="flex h-12 justify-between lg:h-32">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="inline-flex text-lg items-center px-1 pt-1 lg:text-5xl font-black text-[#f1b8d5] hover:border-gray-300 hover:text-[#f86122]">
                    <motion.h6
                      whileHover={{ scale: 1.5 }}>
                      HOME
                    </motion.h6>
                  </Link>
                  <Link
                    to="/about-us"
                    className="inline-flex text-lg items-center px-1 pt-1 lg:text-5xl font-black text-[#ace81e] hover:border-gray-300 hover:text-[#7d9ce2]">
                    <motion.h6
                      whileHover={{ scale: 1.5 }}
                    >ABOUT
                    </motion.h6>
                  </Link>
                  <Link
                    to="/episode-list"
                    className="inline-flex text-lg items-center px-1 pt-1 lg:text-5xl font-black text-[#65e3c6] hover:border-gray-300 hover:text-[#2035ab]">
                    <motion.h6
                      whileHover={{ scale: 1.5 }}>
                      EPISODES
                    </motion.h6>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex text-lg items-center px-1 pt-1 lg:text-5xl font-black text-[#f3b918] hover:border-gray-300 hover:text-[#169342]">
                    <motion.h6
                      whileHover={{ scale: 1.5 }}>
                      CONTACT
                    </motion.h6>
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <Link to="/">
                <Disclosure.Button
                  as="a"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-black text-[#f1b8d5] hover:border-gray-300 hover:bg-gray-50 hover:text-[#f86122]"
                >
                  HOME
                </Disclosure.Button>
              </Link>
              <Link to="/about-us">
                <Disclosure.Button
                  as="a"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-black text-[#ace81e] hover:border-gray-300 hover:bg-gray-50 hover:text-[#7d9ce2]"
                >
                  ABOUT
                </Disclosure.Button>
              </Link>
              <Link to="/episode-list">
                <Disclosure.Button
                  as="a"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-black text-[#65e3c6] hover:border-gray-300 hover:bg-gray-50 hover:text-[#2035ab]"
                >
                  EPISODES
                </Disclosure.Button>
              </Link>
              <Link to="/contact">
                <Disclosure.Button
                  as="a"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-black text-[#f3b918] hover:border-gray-300 hover:bg-gray-50 hover:text-[#169342]"
                >
                  CONTACT
                </Disclosure.Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Nav