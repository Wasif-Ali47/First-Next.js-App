import Link from 'next/link'

export default function Hero() {

  return (
      <div className="bg-gray-900 min-h-screen relative isolate px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div aria-hidden="true" className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
           className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#b700ff] to-[#42016d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"/>
        </div>
        <div className="mx-auto max-w-4xl py-20 md:py-40 lg:py-40">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white  sm:text-5xl mb-2">
              I’m <span className='text-[#9d00ff] font-bold border-b-2'>WASIF ALI</span> <br />
            </h1>
            <h3 className='text-4xl font-semibold tracking-tight text-balance text-neutral-300 sm:text-6xl'>a web developer.</h3>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              I love turning ideas into clean, modern web experiences. Whether it’s coding sleek UIs, experimenting with design,
                Always improving, always curious — just
              tryna be better than yesterday.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-3">
              <Link href="#Projects" className='bg-[#42016d] backdrop-blur-xs border-1 text-[#dddddd]  py-2 px-7 text-center'>Projects <span aria-hidden="true">&rarr;</span></Link>
              <Link href="#AboutMe" className='bg-[#2d014b00] border-1 text-[#dddddd] py-2 px-8 '>About <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" >
          <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#b700ff] to-[#77429b]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" />
        </div>
      </div>

  )
}
