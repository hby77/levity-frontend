import { Route, Routes } from "react-router-dom"
import EpisodeList from "./pages/EpisodeList"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Episode from "./pages/Episode"
import Nav from "./components/Nav"
import Home from "./pages/Home"

  function App() {
    return (
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/episode-list" element={<EpisodeList />} />
          <Route path="/episode" element={<Episode />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    );
  }

export default App;
