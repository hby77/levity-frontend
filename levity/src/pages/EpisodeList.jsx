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
          className=" rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-2">
          New Episode
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

