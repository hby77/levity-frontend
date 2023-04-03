import Client from "./api"

export const checkSession = async () => {
  try {
    const res = await Client.get("http://127.0.0.1:5000/")
    return res
  } catch (e) {
    return e.response.data.message
  }
}