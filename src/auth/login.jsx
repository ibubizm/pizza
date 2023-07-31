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
            obj={user}
            onChange={setUser}
            type="email"
            fieldName={'email'}
            placeholder={'email'}
          />
          <Input
            icon="lock"
            obj={user}
            onChange={setUser}
            type="password"
            fieldName={'password'}
            placeholder={'password'}
          />
          <Button className="registration__btn">login</Button>
        </form>
      </div>
    </div>
  )
}
