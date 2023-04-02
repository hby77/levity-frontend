import axios from "axios"

  export const signIn = async (form) => {
    try {
    const res = axios.post(
      "http://127.0.0.1:5000/signin", { email: form.email, password: form.password },
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

export const signUp = async (form) => {
  try {
    const data = await axios.post(
      "http://127.0.0.1:5000/signup", { email: form.email, password: form.password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    return data
  } catch (e) {
    return e.response
  }
}

