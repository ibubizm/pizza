import { useEffect, useState } from 'react'
import { Button } from '../components/button/button'
import { Input } from '../components/input/input'
import './auth.scss'
import { registration } from './fetch'
import { useHistory } from 'react-router-dom'
import { useInput } from '../hooks/form'

export const Registration = () => {
  const [disButton, setDisButton] = useState(true)
  const [message, setMessage] = useState('')
  const history = useHistory()
  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true })
  const name = useInput('', { isEmpty: true, minLength: 2 })
  const password = useInput('', { isEmpty: true, minLength: 3 })
  const phone = useInput('', {
    isEmpty: true,
    minLength: 7,
    isPhone: true,
    maxLength: 7,
  })

  // const [user, setUser] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   phoneNumber: '',
  //   avatar: '',
  // })

  const [ava, setAva] = useState('')

  const disableButton = () => {
    if (
      name.inputValue &&
      email.inputValue &&
      password.inputValue &&
      phone.inputValue
    ) {
      setDisButton(true)
    } else setDisButton(false)
  }

  useEffect(() => {
    disableButton()
  }, [name, email, password, phone])

  const submitForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('password', password.value)
    formData.append('avatar', ava)
    formData.append('phoneNumber', phone.value)
    registration(formData).then(({ data }) => setMessage(data.message))
    // history.push('/login')
  }

  const imgControl = (e) => {
    setAva(e.target.files[0])
  }
  return (
    <div className="wrapper">
      <div className="form__content">
        {message && <span>{message}</span>}
        {ava ? <img src={URL.createObjectURL(ava)} alt="" /> : ''}
        <h1 className="form__title">registration</h1>
        <form onSubmit={submitForm}>
          <Input
            icon="name"
            field={name}
            value={name.value}
            type="text"
            fieldName={'name'}
            placeholder={'name'}
          />
          <Input
            icon="email"
            field={email}
            value={email.value}
            type="email"
            fieldName={'email'}
            placeholder={'email'}
          />
          <Input
            icon="lock"
            field={password}
            value={password.value}
            type="password"
            fieldName={'password'}
            placeholder={'password'}
          />
          <Input
            icon="phone"
            field={phone}
            value={phone.value}
            type="text"
            fieldName={'phoneNumber'}
            placeholder={'phoneNumber'}
          />
          <input
            type="file"
            onChange={imgControl}
            accept="image/*, .png, .jpg"
            name="file"
          />
          <Button disabled={disButton} className="registration__btn">
            registration
          </Button>
        </form>
      </div>
    </div>
  )
}
