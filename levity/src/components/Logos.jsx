import Spotify from "../images/SpotifyLogo.png"
import Apple from "../images/AppleLogo.png"
import Youtube from "../images/YoutubeLogo.png"
import TikTok from "../images/TikTokLogo.png"
import Instagram from "../images/InstagramLogo.png"
import { Link } from "react-router-dom"
const Logos = () => {

  return (
    <div className="bg-gray-700 py-10 sm:py-32">
      <div className="mx-auto  px-6 lg:px-8">
        {/* When you want to add more columns just add by increasing grid cols */}
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Link to={'https://open.spotify.com/show/6cQv7RTyIg2vk9wIPVtpyt'}>
          <img
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={Spotify}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={'https://podcasts.apple.com/us/podcast/the-levity-podcast/id1676247399'}> 
          <img
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={Apple}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={`https://www.youtube.com/@TheLevityPodcast/videos`}>
          <img
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={Youtube}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={`https://www.tiktok.com/discover/levitypodcast`}>
          <img
            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
            src={TikTok}
            alt=""
            width={158}
            height={48}
            />
            </Link>
            <Link to={'https://www.instagram.com/thelevitypodcast/'}>
          <img
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








// import Spotify from "../images/SpotifyLogo.png"
// import Apple from "../images/AppleLogo.png"
// import Youtube from "../images/YoutubeLogo.png"
// import TikTok from "../images/TikTokLogo.png"
// import Instagram from "../images/InstagramLogo.png"


// const Logos = () => {

//     return (
//       <div className="bg-gray-700 py-24">
//         <div className="mx-auto  pr-6 lg:px-8">
//           <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
//             <img
//               className="col-span-2 max-h-9 w-full object-contain lg:col-span-1"
//               src={Spotify}
//               alt="SPOTIFY"
//               width={158}
//               height={48}
//             />
//             <img
//               className="col-span-2 max-h-7 w-full object-contain lg:col-span-1"
//               src={Apple}
//               alt="APPLE"
//               width={158}
//               height={48}
//             />
//             <img
//               className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
//               src={Youtube}
//               alt="YOUTUBE"
//               width={158}
//               height={48}
//             />
//             <img
//               className="col-span-2 max-h-10 w-full object-contain sm:col-start-2 lg:col-span-1"
//               src={Instagram}
//               alt="INSTAGRAM"
//               width={158}
//               height={48}
//             />
//             <img
//               className="col-span-2 col-start-2 max-h-11 w-full object-contain sm:col-start-auto lg:col-span-1"
//               src={TikTok}
//               alt="TIKTOK"
//               width={158}
//               height={48}
//             />
//           </div>
//         </div>
//       </div>
//     )
//   }
  
// export default Logos