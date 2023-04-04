import Client from "./api"

export const createEpisode =  async (form) => {
  try {
    const res = Client.post(
      "http://127.0.0.1:5000/episodes", { title: form.title, description: form.description, image: form.image, date: form.date, likes: 0, embeddedEpisode: form.embeddedEpisode },
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
        `http://127.0.0.1:5000/single_episode/${id}`, { title: form.title, description: form.description, image: form.image, date: form.date, embeddedEpisode: form.embeddedEpisode },
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

export const updateTracks = async (id, title, episode_title) => {
  try {
    const res = Client.put(
      `http://127.0.0.1:5000/episode_tracks/${id}`, {track: [{title: title, episode_title: episode_title}]},
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