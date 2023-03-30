import { Link } from "react-router-dom"


const PicRight = ({ subtitle, title, description, button, picture, color, titlecolor, titlehover }) => {
console.log(titlecolor)
  return (
    <div className={`relative bg-[${color}]`}>
      <div
        className="relative h-80 overflow-hidden md:absolute md:right-0 md:h-full md:w-1/3 lg:w-1/2"
      >
        <img
          className="h-full w-full object-cover py-5 px-5 "
          src={picture}
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-full py-24 sm:py-32 lg:py-40 lg:px-32 ">
        <div
          className="pl-6 pr-6 md:mr-auto md:w-2/3 md:pr-16 lg:w-1/2 lg:pr-24 lg:pl-0 xl:pr-32"
        >
          <h2 className="text-base font-semibold leading-7 text-[#474d53]">
            {subtitle}
          </h2>
          <h6 className={`mt-2 text-3xl font-black tracking-wide text-[${titlecolor}] hover:text-[${titlehover}] sm:text-6xl`}>
            {title}
          </h6>
          <p className="mt-6 text-xl font-base tracking-wide leading-7 text-[#474d53]">{description}</p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex rounded-3xl bg-[#900c3e] px-4 py-3.5 text-md font-light text-white shadow-xl hover:bg-[#82123f] transition delay-50 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:text-lg"
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PicRight
