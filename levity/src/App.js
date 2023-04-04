import EditEpisodeForm from "./pages/EditEpisodeForm"
import EpisodeDetails from "./pages/EpisodeDetails"
import { Route, Routes } from "react-router-dom"
import EpisodeForm from "./pages/EpisodeForm"
import ContactForm from "./pages/ContactForm"
import EpisodeList from "./pages/EpisodeList"
import { useState, useEffect } from "react"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"
import SignIn from "./pages/SignIn"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import axios from "axios"

function App() {

  const [episodes, setEpisodes] = useState([])

  const getAllEpisodes = async () => {
    const response = await axios.get("http://127.0.0.1:5000/episodes")
    await response.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    setEpisodes(response.data)
  }

  useEffect(() => {
    getAllEpisodes()
  }, [])

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/episode-details/:id" element={<EpisodeDetails />} />
        <Route path="/episode-form/:id" element={<EditEpisodeForm getAllEpisodes={getAllEpisodes} />} />
        <Route path="/episode-list" element={<EpisodeList episodes={episodes} setEpisodes={setEpisodes} useEffect={useEffect} getAllEpisodes={getAllEpisodes} />} />
        <Route path="/episode-form" element={<EpisodeForm />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home episodes={episodes} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
