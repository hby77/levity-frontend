import Client from "./api"

export const createEpisode =  async (form) => {
  try {
    const res = Client.post(
      "http://127.0.0.1:5000/episodes", { title: form.title, description: form.description, image: form.image, date: form.date, likes: 0 },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    return res
  } catch (e) {
    return e.response
  }
}

  export const updateEpisode = async (id, form) => {
    try {
      const res = Client.put(
        `http://127.0.0.1:5000/single_episode/${id}`, { title: form.title, description: form.description, image: form.image, date: form.date },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      return res
    } catch (e) {
      return e.response
    }
  }

  export const deleteEpisode = async (id) => {
    try {
    const res = Client.delete(
      `http://127.0.0.1:5000/single_episode/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    return res
    } catch (e) {
    return e.response
  }
  
}