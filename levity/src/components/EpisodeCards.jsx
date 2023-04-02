import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const EpisodeCards = ({ title, date, description, image, id, handleDelete }) => {

  const navigate = useNavigate()
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-28">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            <article className="relative isolate flex flex-col gap-12 lg:flex-row">
              <div className="relative aspect-[16/9]  sm:aspect-[2/1] lg:aspect-[square] lg:w-96 lg:shrink-0">
                <img
                  src={image}
                  alt=""
                  className="absolute inset- h-full w-full bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-2xl">
                  <time dateTime={date} className="text-gray-500">
                    {date}
                  </time>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-4xl font-black leading-10 text-gray-900 group-hover:text-gray-600">
                    <Link
                    to={`/episode-details/${id}`}>
                      <span className="absolute inset-0" />
                      {title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-lg leading-6 text-gray-600">{description}</p>
                </div>
                {localStorage.getItem('id') === "6428fdcacbf30d7c30089d83" && ( <>
                <button onClick={() => handleDelete(id)}
                  className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2">
                  DELETE
                </button>
                <button onClick={() => navigate(`/episode-form/${id}`)}
                  className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2">
                  EDIT
                </button></>)}
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EpisodeCards