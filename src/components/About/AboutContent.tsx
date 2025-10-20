import Image from 'next/image'
import { Blobs1, Blobs3 } from '../animations/Backgrounds'

export default function AboutContent() {
  return (
    <>
    <section className="flex flex-col lg:flex-row justify-center items-center text-start gap-8 w-full p-5 md:p-12 pt-20 lg:pt-0 min-h-screen relative isolate">
        <Blobs3/>
          {/* Profile */}
          <div className='flex justify-center items-center text-center flex-col'>
            <Image src="/avatar.svg" alt="Profile" width={200} height={200} priority/>
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl">Wasif Ali</h2>
            <p className="text-blue-600 text-sm font-medium">Web Developer</p>
          </div>
          {/* About Me Content */}
           <ul className="h-72 md:h-96 overflow-y-scroll space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400 pt-4">
              <li>
                Porfession
                <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li className="mt-4 text-lg/8 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                  </li>
                  <li className="mt-4 text-lg/8 text-gray-400">
                    Jbcaecati eveniet! Consequuntur aut dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                  </li>
                  <li className="mt-4 text-lg/8 text-gray-400">
                    Ritatis sint corporis! Enim iusto vitae assumenda obcaecati eveniet! Consequuntur aut dignissimos obcaecati impedi
                  </li>
                </ol>
              </li>
              <li>
                Background
                <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li className="mt-4 text-lg/8 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                  </li>
                  <li className="mt-4 text-lg/8 text-gray-400">
                    Jbcaecati eveniet! Consequuntur aut dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                  </li>
                  <li className="mt-4 text-lg/8 text-gray-400">
                    Ritatis sint corporis! Enim iusto vitae assumenda obcaecati eveniet! Consequuntur aut dignissimos obcaecati impedi
                  </li>
                </ul>
              </li>
              <li>
                List item three
                <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside">
                  <li className="mt-4 text-lg/8 text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perferendis dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                  </li>
                  <li className="mt-4 text-lg/8 text-gray-400">
                    Jbcaecati eveniet! Consequuntur aut dignissimos obcaecati impedit reprehenderit voluptatibus molestiae inventore!
                  </li>
                  <li className="mt-4 text-lg/8 text-gray-400">
                    Ritatis sint corporis! Enim iusto vitae assumenda obcaecati eveniet! Consequuntur aut dignissimos obcaecati impedi
                  </li>
                </ul>
              </li>
           </ul>
        <Blobs1/>
      </section>
    </>
  )
}
