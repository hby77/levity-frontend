import { useState, useEffect } from "react"
import axios from "axios"
import EpisodeCards from "../components/EpisodeCards"


const EpisodeList = () => {

  const [episodes, setEpisodes] = useState([])

  const getAllEpisodes = async () => {
    const response = await axios.get("http://127.0.0.1:5000/episodes")
    console.log(response)
    setEpisodes(response.data)
  }

  useEffect(() => {
    getAllEpisodes()
  }, [])

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://127.0.0.1:5000/single_episode/${id}`)
    console.log("Hello", res)
    getAllEpisodes()
  }


  return (
    <div>
      {episodes.map((episode) => (
        <div key={episode._id.$oid}>
          <EpisodeCards
            key={episode.id}
            title={episode.title}
            date={episode.date}
            description={episode.description}
            image={episode.image}
            id={episode._id.$oid}
          />
          <button onClick={() => handleDelete(episode._id.$oid)}>
            <span>delete</span>
          </button>
        </div>
      ))}
    </div>
  )
}
export default EpisodeList

