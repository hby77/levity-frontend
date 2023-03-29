const Logos = () => {

    return (
      <div className="bg-[#e7e9ea] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn-icons-png.flaticon.com/512/3537/3537017.png"
              alt="SPOTIFY"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn-icons-png.flaticon.com/512/831/831299.png"
              alt="APPLE"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://cdn-icons-png.flaticon.com/512/2504/2504965.png"
              alt="YOUTUBE"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="INSTAGRAM"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://cdn-icons-png.flaticon.com/512/2504/2504942.png"
              alt="TIKTOK"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  
export default Logos