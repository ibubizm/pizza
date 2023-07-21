import { useState } from 'react'
import { Button } from '../components/button/button'
import { Input } from '../components/input/input'
import './auth.scss'
import { login } from './fetch'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const Login = () => {
  const history = useHistory()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(login(user))
    history.push('/')
  }

  return (
    <div className="wrapper">
      <div className="form__content">
        <h1 className="form__title">Login</h1>
        <form onSubmit={submitForm}>
          <Input
            icon="email"
            user={user}
            onChange={setUser}
            type="email"
            placeholder={'email'}
          />
          <Input
            icon="lock"
            user={user}
            onChange={setUser}
            type="password"
            placeholder={'password'}
          />
          <Button className="registration__btn">registration</Button>
        </form>
      </div>
    </div>
  )
}
