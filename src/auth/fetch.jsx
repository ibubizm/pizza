import axios from 'axios'
import { setUser } from '../redux/reducers/user'
import { server_url } from '../vars'

export const registration = async (forma) => {
  try {
    const response = await axios.post(server_url + 'auth/registration', forma, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    console.log(response)
  } catch (e) {
    console.log(e)
  }
}

export const login = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(server_url + 'auth/login', {
        email,
        password,
      })
      localStorage.setItem('token', res.data.token)

      dispatch(setUser(res.data.user))
    } catch (e) {
      return e.request.status
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
