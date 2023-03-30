import RecentEpisodes from "../components/RecentEpisodes"
import HomePic from "../images/LevityHero.gif"
import Logos from "../components/Logos"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div>
      <Hero 
        picture={HomePic}
      />
      <Logos />
      <RecentEpisodes />
    </div>
  )
}
export default Home