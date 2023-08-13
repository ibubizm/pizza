import { useEffect, useState } from 'react'

export const useInput = (initValue, validations) => {
  const [value, setValue] = useState(initValue)
  const [isDirty, setIsDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = (e) => {
    setIsDirty(true)
  }

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  }
}

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true)
  const [isEmptyMessage, setIsEmptyMessage] = useState('')

  const [minLengthError, setMinLengthError] = useState(false)
  const [minLengthMessage, setMinLengthMessage] = useState('')

  const [maxLengthError, setMaxLengthError] = useState(false)
  const [maxLengthMessage, setMaxLengthMessage] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')

  const [phoneError, setPhoneError] = useState(false)
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('')

  const [inputValue, setInputValue] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          setMinLengthMessage(`min length ${validations[validation]}`)
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false)
          break
        case 'isEmpty':
          setIsEmptyMessage("field can't be empty")
          value ? setIsEmpty(false) : setIsEmpty(true)
          break
        case 'isPhone':
          setPhoneErrorMessage('only numbers')
          const num = Number(value)
          Number.isInteger(num) ? setPhoneError(false) : setPhoneError(true)
          break
        case 'maxLength':
          setMaxLengthMessage(`max length ${validations[validation]}`)
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false)
          break
        case 'isEmail':
          setEmailErrorMessage('invalid email')
          String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            ? setEmailError(false)
            : setEmailError(true)
          break
      }
    }
  }, [value])

  useEffect(() => {
    if (
      isEmpty ||
      minLengthError ||
      maxLengthError ||
      emailError ||
      phoneError
    ) {
      setInputValue(false)
    } else setInputValue(true)
  }, [isEmpty, minLengthError, maxLengthError, emailError, phoneError])

  return {
    isEmpty,
    isEmptyMessage,
    minLengthError,
    minLengthMessage,
    maxLengthError,
    maxLengthMessage,
    emailError,
    emailErrorMessage,
    inputValue,
    phoneError,
    phoneErrorMessage,
  }
}
