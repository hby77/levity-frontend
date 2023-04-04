import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const RecentEpisodes = ({episodes}) => {


  
    return (
      <div className="bg-[#e7e9ea] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-wide text-black sm:text-6xl">Latest Episodes</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              The Latest Episodes on The Levity Podcast
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {episodes.slice(0, 3).map((episode) => (
              <motion.article
                whileHover={{ scale: 1.05 }}
                key={episode.date}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={episode.image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={episode.date} className="mr-8">
                    {episode.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      
                    </svg>
                  </div>
                </div>
                <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                <Link
                    to={`/episode-details/${episode._id.$oid}`}>
                      <span className="absolute inset-0" />
                      {episode.title}
                    </Link>
                </h3>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  

export default RecentEpisodes