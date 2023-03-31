import EpisodeDetails from "./pages/EpisodeDetails"
import { Route, Routes } from "react-router-dom"
import EpisodeForm from "./pages/EpisodeForm"
import ContactForm from "./pages/ContactForm"
import EpisodeList from "./pages/EpisodeList"
import Footer from "./components/Footer"
import AboutUs from "./pages/AboutUs"
import SignIn from "./pages/SignIn"
import Nav from "./components/Nav"
import Home from "./pages/Home"

  function App() {

    return (
      <div>
        <Nav />
        <Routes>
          <Route path="/episode-details/:id" element={<EpisodeDetails />} />
          <Route path="/episode-list" element={<EpisodeList />} />
          <Route path="/episode-form" element={<EpisodeForm />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    );
  }

export default App;
