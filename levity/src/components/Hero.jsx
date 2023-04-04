const Hero = ({ picture }) => {
  
    return (
      <div className="bg-gray-900 ">
        <div className="relative isolate overflow-hidden pt-14 h-[20rem] sm:h-[40rem] md:h-[55rem] xl:h-[60rem] ">
          <img
            src={ picture }
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover "
          />
        </div>
      </div>
    )
  }
  
  export default Hero


