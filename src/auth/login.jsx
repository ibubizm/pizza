import { useState } from 'react'
import { Button } from '../components/button/button'
import { Input } from '../components/input/input'
import './auth.scss'
import { login } from './fetch'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useInput } from '../hooks/form'

export const Login = () => {
  const history = useHistory()

  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true })
  const password = useInput('', { isEmpty: true, minLength: 3 })

  const dispatch = useDispatch()

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(login(email.value, password.value))
    history.push('/')
  }

  return (
    <div className="wrapper">
      <div className="form__content">
        <h1 className="form__title">Login</h1>
        <form onSubmit={submitForm}>
          <Input
            icon="email"
            field={email}
            type="email"
            fieldName={'email'}
            placeholder={'email'}
            onBlur={(e) => email.onBlur(e)}
            value={email.value}
          />
          <Input
            icon="lock"
            field={password}
            value={password.value}
            onBlur={(e) => password.onBlur(e)}
            type="password"
            fieldName={'password'}
            placeholder={'password'}
          />
          <Button
            // disabled={!email.inputValid && !password.inputValid}
            className="registration__btn"
          >
            login
          </Button>
        </form>
      </div>
    </div>
  )
}
