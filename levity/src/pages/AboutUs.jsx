import AboutPic from "../images/LevityAbout.gif"
import PicRight from "../components/PicRight"
import PicLeft from "../components/PicLeft"
import Hero from "../components/Hero"
import Hb from "../images/HBLevity.png"
import Taemin from "../images/TaeminLevity.png"
import Phil from "../images/PhilLevity.png"

const AboutUs = () => {


  return (
    <div className="bg-[#e7e9ea]">
      <Hero
        picture={AboutPic}
      />
      <PicLeft
        subtitle={"Host"}
        title={"Taemin Lee"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egesta tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egesta tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."}
        button={""}
        picture={Taemin}
        color={"#e7e9ea"} 
        titlecolor={"#ecd334"}
        />
      <PicRight
        subtitle={"Co-Host"}
        title={"HyunBin Yim"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egesta tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egesta tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."}
        button={""}
        picture={Hb}
        color={"#e7e9ea"} 
        titlecolor={"#c8325f"}
        />
      <PicLeft
        subtitle={"Co-Host"}
        title={"Phil Phan"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egesta tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egesta tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis."}
        button={""}
        picture={Phil}
        color={"#e7e9ea"}
        titlecolor={"#f08336"}
        />
    </div>
  )
}

export default AboutUs