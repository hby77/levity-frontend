import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const EpisodeCards = ({ title, date, description, image, id, handleDelete }) => {

  const navigate = useNavigate()

  return (
    <div className="bg-[#e7e9ea] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-28">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className=" space-y-20 lg:space-y-20">
            <motion.article whileHover={{ scale: 1.05 }} className="relative isolate flex flex-col gap-12 lg:flex-row">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/5] lg:w-96 lg:shrink-0">
                <img
                  src={image}
                  alt=""
                  className="absolute inset- h-full w-full bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-2xl lg:mt-20">
                  <time dateTime={date} className="text-gray-500">
                    {date}
                  </time>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-4xl font-black tracking-wide leading-10 text-gray-900 group-hover:text-gray-600">
                    <Link
                      to={`/episode-details/${id}`}>
                      <span className="absolute inset-0" />
                      {title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-lg leading-6 text-gray-600">{description}</p>
                </div>
                {localStorage.getItem('id') === "6428fdcacbf30d7c30089d83" && (<>
                  <button onClick={() => handleDelete(id)}
                    className="my-8 bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    DELETE
                  </button>
                  <button onClick={() => navigate(`/episode-form/${id}`)}
                    className="mx-5 my-8 bg-white text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    EDIT
                  </button></>)}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EpisodeCards