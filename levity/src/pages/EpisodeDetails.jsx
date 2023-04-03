import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"
import Logos from "../components/Logos"

const EpisodeDetails = () => {

  const { id } = useParams()

  const [episode, setEpisode] = useState({})

  useEffect(() => {
    getEpisode()
  }, [])

  const getEpisode = async () => {
    const response = await axios.get(`http://127.0.0.1:5000/single_episode/${id}`)
    console.log(response)
    setEpisode(response.data)
  }
  return (
    <>
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{episode.title}</h2>
        <p className="mt-4 text-base font-semibold leading-7 text-gray-600">{episode.date}</p>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Episode Details</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {episode.description}
        </p>
      </div>
      {/* below this is an empty indigobox for the podcast episode */}
      <div className="bg-indigo-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <br />
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          </div>
        </div>
      </div>
      {/* above this is an empty indigobox for the podcast episode */}
    </div>
      <Logos />
    </>

  )
}
export default EpisodeDetails




