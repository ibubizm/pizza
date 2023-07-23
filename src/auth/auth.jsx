import { useState } from 'react'
import { Button } from '../components/button/button'
import { Input } from '../components/input/input'
import './auth.scss'
import { registration } from './fetch'
import { useHistory } from 'react-router-dom'

export const Registration = () => {
  const history = useHistory()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    avatar: '',
  })
  const [ava, setAva] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', user.name)
    formData.append('email', user.email)
    formData.append('password', user.password)
    formData.append('avatar', user.avatar)
    formData.append('phoneNumber', user.phoneNumber)
    registration(formData)
    history.push('/login')
  }

  const imgControl = (e) => {
    setUser({ ...user, avatar: e.target.files[0] })
    setAva(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className="wrapper">
      <div className="form__content">
        {/* {ava ? <img src={ava} alt="" /> : ''} */}
        <h1 className="form__title">registration</h1>
        <form onSubmit={submitForm}>
          <Input
            icon="name"
            user={user}
            onChange={setUser}
            type="text"
            placeholder={'name'}
          />
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
          <Input
            icon="phone"
            user={user}
            onChange={setUser}
            type="text"
            placeholder={'phoneNumber'}
          />
          <input
            type="file"
            onChange={imgControl}
            accept="image/*, .png, .jpg"
            name="file"
          />
          <Button className="registration__btn">login</Button>
        </form>
      </div>
    </div>
  )
}
