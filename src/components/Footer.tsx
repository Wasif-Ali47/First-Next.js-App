import Link from "next/link";
import { Github, Linkedin, Instagram, Facebook, Twitch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative isolate text-gray-300 pt-16 px-6 md:px-20 border-t border-gray-800 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[72rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#de70ff] to-[#640681] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[115rem]"
        />
      </div>


      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Next js</h2>
          <p className="text-gray-400 mt-2 max-w-sm">
            Creating clean, scalable, and visually striking web experiences. Code that speaks luxury and precision.
          </p>
        </div>

        <div className="flex gap-6 text-xl">
          <Link href="https://github.com" target="_blank" className="hover:text-white transition">
            <Github />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition">
            <Linkedin />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-white transition">
            <Instagram />
          </Link>
          <Link href="https://facebook.com" target="_blank" className="hover:text-white transition">
            <Facebook />
          </Link>
          <Link href="https://twitch.tv" target="_blank" className="hover:text-white transition">
            <Twitch />
          </Link>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 py-6">
        © {new Date().getFullYear()} Wasif Devs. All rights reserved.
      </div>
    </footer>
  );
}
