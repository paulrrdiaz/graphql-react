import axios from 'axios'

const { API } = process.env

export const getUser = async (id) => {
  try {
    const { data } = await axios.get(`${API}/users/${id}`)

    return data
  } catch (error) {
    console.error(error.response.statusText, 'error')
  }
}

export const getCompany = async (id) => {
  try {
    const { data } = await axios.get(`${API}/companies/${id}`)

    return data
  } catch (error) {
    console.error(error.response.statusText, 'error')
  }
}

export const getUsersFromCompany = async (id) => {
  try {
    const { data } = await axios.get(`${API}/companies/${id}/users`)

    return data
  } catch (error) {
    console.error(error.response.statusText, 'error')
  }
}

export const addUser = async (body) => {
  try {
    const { data } = await axios.post(`${API}/users`, body)

    return data
  } catch (error) {
    console.error(error.response.statusText, 'error')
  }
}

export const deleteUser = async (id) => {
  try {
    const { data } = await axios.delete(`${API}/users/${id}`)

    return data
  } catch (error) {
    console.error(error.response.statusText, 'error')
  }
}

export const editUser = async (id, body) => {
  try {
    const { data } = await axios.patch(`${API}/users/${id}`, body)

    return data
  } catch (error) {
    console.error(error.response.statusText, 'error')
  }
}
