import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"
import Logos from "../components/Logos"

const EpisodeDetails = () => {

  const { id } = useParams()

  const [episode, setEpisode] = useState({})

  const [like, setLike] = useState(0)


  useEffect(() => {
    getEpisode()
  }, [])

  const getEpisode = async () => {
    const response = await axios.get(`http://127.0.0.1:5000/single_episode/${id}`)
    console.log(response)
    setEpisode(response.data)
    setLike(response.data.likes)
  }

  const handleClick = async () => {
    const res = await axios.put(`http://127.0.0.1:5000/episodes_likes/${id}`)
    // console.log("Hello", res.data)
    setLike(like+1)
    console.log(like)
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const res = await createEpisode(form)
  //   console.log("CREATE EPISODE", res)
  //   navigate("/episode-list")
  //   window.location.reload()
  // }

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
    <button
    type="button"
    className="ml-3 inline-flex justify-center rounded-md bg-black py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600"
    onClick={() => handleClick()}
    >
      Like Button {like}
      </button>
      </div>
      {/* below this is an empty indigobox for the podcast episode */}
      <iframe height="200px" width="100%" frameborder="no" seamless src="https://player.simplecast.com/2d32a00b-1169-4e97-8164-f9e0da8f91a3?dark=true"></iframe>
      {/* above this is an empty indigobox for the podcast episode */}
    </div>
      <Logos title={episode.title} />
    </>

  )
}
export default EpisodeDetails

