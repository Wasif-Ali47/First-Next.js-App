export const Blobs1 =() => {
  return (
    <>
    {/* background blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
           className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#b700ff] to-[#42016d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"/>
        </div>
    </>
  )
}

export const Blobs2 =() => {
  return (
    <>
    {/* background blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" >
          <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#b700ff] to-[#77429b]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" />
        </div>
    </>
  )
}


export const Blobs3 =() => {
  return (
    <>
    {/* background blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" >
          <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#b700ff] to-[#77429b]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" />
        </div>
    </>
  )
}


export const GridPattern =() => {
  return (
    <div className="pointer-events-none absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="1"
            />
          </pattern>

          <linearGradient id="fadeGradient" gradientTransform="rotate(-50)">
            <stop offset="0" stopColor="transparent" />
            <stop offset="30%" stopColor="white" />
          </linearGradient>

          <mask id="fade">
            <rect width="100%" height="100%" fill="url(#fadeGradient)" />
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fade)" />
      </svg>
    </div>
  )
}
