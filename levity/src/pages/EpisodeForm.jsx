import { useState } from "react"
import { createEpisode } from "../services/episode"
import { useNavigate } from "react-router-dom"

const EpisodeForm = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    date: '',
    description: '',
    image: '',
    embeddedEpisode: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await createEpisode(form)
    navigate("/episode-list")
    window.location.reload()
  }

  return localStorage.getItem('id') === "6428fdcacbf30d7c30089d83" && (
    <div className="isolate bg-[#e7e9ea] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-black tracking-wide text-gray-900 sm:text-6xl">Episode Form</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Use form to create a new episode
        </p>
      </div>
      <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-8 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
              Title
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Episode # and Title"
                required
                onChange={handleChange}
                value={form.title}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900">
              Date
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="date"
                id="date"
                placeholder="XX-XX-XXXX"
                required
                onChange={handleChange}
                value={form.date}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description of Podcast"
                required
                onChange={handleChange}
                value={form.description}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="image" className="block text-sm font-semibold leading-6 text-gray-900">
              Image
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Image from Imgur"
                required
                onChange={handleChange}
                value={form.image}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="episode" className="block text-sm font-semibold leading-6 text-gray-900">
              Embedded Episode
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="embeddedEpisode"
                id="embeddedEpisode"
                placeholder="Embedded Episode from Spotify"
                required
                onChange={handleChange}
                value={form.embeddedEpisode}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
          <button
            type="submit"
            className="bg-[#e7e9ea] transform  border-2 w-28 h-28 rounded-full duration-500 border-black hover:bg-black hover:text-white text-2xl m-auto inset-0 font-semibold leading-7 text-center text-gray-800"
          >
            Create Episode
          </button>
        </div>
      </form>
    </div >
  )
}

export default EpisodeForm