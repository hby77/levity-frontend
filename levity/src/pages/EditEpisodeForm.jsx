import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


const EditEpisodeForm = () => {
  
  const {id} = useParams()

  const [episode, setEpisode] = useState({})
  const [Form, setForm] = useState({
    title: '',
    date: '',
    description: '',
    image: ''
  })
  
  const handleChange = (e) => {
    setForm({ ...Form, [e.target.id]: e.target.value})
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    checkForm()
    const response = await axios.put(`http://127.0.0.1:5000/single_episode/${id}`, Form)
    console.log(response)
  }

  const checkForm = () => {
    if (Form.title === "") Form.title = episode.title
    if (Form.date === "") Form.date = episode.date
    if (Form.description === "") Form.description = episode.description
    if (Form.image === "") Form.image = episode.image
  }

  useEffect(() => {
    getUpdate()
  },[])


const getUpdate = async () => {
  const response = await axios.get(`http://127.0.0.1:5000/single_episode/${id}`)
  console.log(response)
  setEpisode(response.data) 
}

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Episode Form</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Use form to update this episode
        </p>
      </div>
      <form onSubmit={handleSubmit} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
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
                placeholder={episode.title}
                required
                onChange={handleChange}
                value={Form.title === "" ? episode.title : Form.title}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                placeholder={episode.date}
                required
                onChange={handleChange}
                value={Form.date === "" ? episode.date : Form.date}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                placeholder={episode.description}
                required
                onChange={handleChange}
                value={Form.description === "" ? episode.description : Form.description}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                placeholder={episode.image}
                required
                onChange={handleChange}
                value={Form.image === "" ? episode.image : Form.image}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update Episode
          </button>
        </div>
      </form>
    </div>
  )
}
export default EditEpisodeForm