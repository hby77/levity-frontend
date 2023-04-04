import axios from "axios"
import EpisodeCards from "../components/EpisodeCards"
import { deleteEpisode } from "../services/episode"
import { useNavigate } from "react-router-dom"




const EpisodeList = ({ episodes, getAllEpisodes }) => {

  const handleDelete = async (id) => {
    const res = await deleteEpisode(id)
    console.log("DELETED", res)
    getAllEpisodes()
  }



  const navigate = useNavigate()

  return (
    <div className="bg-[#e7e9ea]">
      {localStorage.getItem('id') === "6428fdcacbf30d7c30089d83" && (<>
        <button onClick={() => navigate(`/episode-form`)}
          className="mx-2 my-2 bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
          Create Episode
        </button></>)}
      {episodes.map((episode) => (
        <div key={episode._id.$oid}>
          <EpisodeCards
            key={episode.id}
            title={episode.title}
            date={episode.date}
            description={episode.description}
            image={episode.image}
            id={episode._id.$oid}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  )
}
export default EpisodeList

