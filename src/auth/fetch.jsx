import axios from 'axios'
import { setUser } from '../redux/reducers/user'
import { server_url } from '../vars'

export const registration = async (forma) => {
  try {
    const res = await axios.post(server_url + 'auth/registration', forma, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return res
  } catch (e) {
    return e.response
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(server_url + 'auth/login', {
        email,
        password,
      })
      localStorage.setItem('token', res.data.token)

      dispatch(setUser(res.data.user))
      return res
    } catch (e) {
      return e.response
    }
  }
}

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(server_url + 'auth/auth', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      console.log(e)
      localStorage.removeItem('token')
    }
  }
}

export const createProduct = async (form) => {
  console.log(form)
  await axios.post(server_url + 'api/create', form)
}

export const getOneProduct = async (id) => {
  try {
    const res = await axios.get(server_url + `api/products/${id}`, {
      params: { id },
    })
    return res
  } catch (e) {
    console.log(e)
  }
}
