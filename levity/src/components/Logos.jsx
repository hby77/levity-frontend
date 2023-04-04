import Spotify from "../images/SpotifyLogo.png"
import Apple from "../images/AppleLogo.png"
import Youtube from "../images/YoutubeLogo.png"
import TikTok from "../images/TikTokLogo.png"
import Instagram from "../images/InstagramLogo.png"
import { Link } from "react-router-dom"
import axios from "axios"
import { motion } from "framer-motion"


const Logos = ({ title }) => {

  // const handleClick = async (title, episode_title) => {
  //   const res = await axios.put(`http://127.0.0.1:5000/episodes_tracks/${id}`)
  // }

  return (
    <div className="bg-[#282828] py-10 sm:py-32">
      <div className="mx-auto  px-6 lg:px-8">
        {/* When you want to add more columns just add by increasing grid cols */}
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Link to={'https://open.spotify.com/show/6cQv7RTyIg2vk9wIPVtpyt'}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            // onClick={() => handleClick("spotify", title)}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={Spotify}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={'https://podcasts.apple.com/us/podcast/the-levity-podcast/id1676247399'}> 
          <motion.img
            whileHover={{ scale: 1.2 }}
            // onClick={() => handleClick("apple", title)}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={Apple}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={`https://www.youtube.com/@TheLevityPodcast/videos`}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            // onClick={() => handleClick("youtube", title)}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={Youtube}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={`https://www.tiktok.com/discover/levitypodcast`}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            // onClick={() => handleClick("tiktok", title)}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={TikTok}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={'https://www.instagram.com/thelevitypodcast/'}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            // onClick={() => handleClick("instagram", title)}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={Instagram}
            alt=""
            width={158}
            height={48}
            />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Logos


