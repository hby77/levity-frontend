import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Logos from "../components/Logos"
import axios from "axios"

const EpisodeDetails = () => {

  const { id } = useParams()
  const [episode, setEpisode] = useState({})
  const [like, setLike] = useState(0)

  useEffect(() => {
    getEpisode()
  }, [])

  const getEpisode = async () => {
    const response = await axios.get(`http://127.0.0.1:5000/single_episode/${id}`)
    setEpisode(response.data)
    setLike(response.data.likes)
  }

  const handleClick = async () => {
    const res = await axios.put(`http://127.0.0.1:5000/episodes_likes/${id}`)
    setLike(like + 1)
  }

  return (
    <>
      <div className="bg-[#e7e9ea] px-6 py-20 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className=" text-4xl font-black tracking-wide text-gray-900 sm:text-6xl">{episode.title}</h2>
          <p className="mt-5 text-xl font-semibold leading-7 text-gray-600">{episode.date}</p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Episode Details</h2>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            {episode.description}
          </p>
          <button
            type="button"
            className="mt-8 bg-[#e7e9ea] transform  border-2 w-24 h-24 rounded-full duration-500 border-black hover:bg-black hover:text-white text-2xl m-auto inset-0 font-semibold leading-7 text-center text-gray-800"
            onClick={() => handleClick()}
          >
            <svg className="ml-3 w-12 h-12 fill-current" viewBox="0 0 4 28"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            {like}
          </button>
        </div>
        <iframe className="rounded-xl mt-8" src={episode.embeddedEpisode} width="100%" height="352" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <Logos title={episode.title} />
    </>
  )
}
export default EpisodeDetails

