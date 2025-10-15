import React from 'react'

export default function Footer() {
  return (
    <>

    <footer className="bg-white border-t mt-12 py-8">
      <div className="max-w-6xl mx-auto  flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-4 text-[#6401a1]">Next js App</h2>

        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-[1.2rem] font-semibold text-gray-600 hover:text-black transition duration-300"
          >
            Github
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-[1.2rem] font-semibold text-gray-600 hover:text-sky-500 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-[1.2rem] font-semibold text-gray-600 hover:text-blue-700 transition duration-300"
          >
            Linkedin
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-[1.2rem] font-semibold text-gray-600 hover:text-pink-500 transition duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}
