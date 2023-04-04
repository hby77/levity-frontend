import Instagram from "../images/InstagramLogo.png"
import Youtube from "../images/YoutubeLogo.png"
import Spotify from "../images/SpotifyLogo.png"
import TikTok from "../images/TikTokLogo.png"
import Apple from "../images/AppleLogo.png"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import axios from "axios"
import { updateTracks } from "../services/episode"


const Logos = ({id, title }) => {

  const handleClick = async (track) => {
    const res = await updateTracks(id, track, title)
    console.log("RES", res)
  }

  return (
    <div className="bg-[#282828] py-10 sm:py-32">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Link to={'https://open.spotify.com/show/6cQv7RTyIg2vk9wIPVtpyt'} target="_blank">
          <motion.img
            whileHover={{ scale: 1.2 }}
            onClick={() => handleClick("Spotify")}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={Spotify}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={'https://podcasts.apple.com/us/podcast/the-levity-podcast/id1676247399'} target="_blank">
          <motion.img
            whileHover={{ scale: 1.2 }}
            onClick={() => handleClick("Apple")}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={Apple}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={`https://www.youtube.com/@TheLevityPodcast/videos`} target="_blank">
          <motion.img
            whileHover={{ scale: 1.2 }}
            onClick={() => handleClick("Youtube")}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={Youtube}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={`https://www.tiktok.com/discover/levitypodcast`} target="_blank">
          <motion.img
            whileHover={{ scale: 1.2 }}
            onClick={() => handleClick("Tiktok")}
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={TikTok}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={'https://www.instagram.com/thelevitypodcast/'} target="_blank">
          <motion.img
            whileHover={{ scale: 1.2 }}
            onClick={() => handleClick("Instagram")}
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


