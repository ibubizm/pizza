import './input.scss'
import {
  MdAlternateEmail,
  MdOutlineImage,
  MdOutlineAttachMoney,
} from 'react-icons/md'
import { AiOutlineUnlock, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'
import { CiPizza } from 'react-icons/ci'

export const Input = ({
  field,
  placeholder,
  icon,
  obj,
  onChange,
  fieldName,
  ...props
}) => {
  const setIcon = () => {
    switch (icon) {
      case 'email':
        return <MdAlternateEmail className="auth__icon" />
      case 'lock':
        return <AiOutlineUnlock className="auth__icon" />
      case 'phone':
        return <AiOutlinePhone className="auth__icon" />
      case 'name':
        return <AiOutlineUser className="auth__icon" />
      case 'image':
        return <MdOutlineImage className="auth__icon" />
      case 'money':
        return <MdOutlineAttachMoney className="auth__icon" />
      case 'pizza':
        return <CiPizza className="auth__icon" />

      default:
        break
    }
  }
  return (
    <div className="custom__input">
      {field.isDirty && field.minLengthError && (
        <label htmlFor={fieldName}>{field.minLengthMessage}</label>
      )}
      {field.isDirty && field.maxLengthError && (
        <label htmlFor={fieldName}>{field.maxLengthMessage}</label>
      )}
      {field.isDirty && field.emailError && (
        <label htmlFor={fieldName}>{field.emailErrorMessage}</label>
      )}
      {field.isDirty && field.isEmpty && (
        <label htmlFor={fieldName}>{field.isEmptyMessage}</label>
      )}
      {field.isDirty && field.phoneError && (
        <label htmlFor={fieldName}>{field.phoneErrorMessage}</label>
      )}

      {console.log(field)}

      <span>
        {setIcon()}
        <input
          id={fieldName}
          onChange={(e) => field.onChange(e)}
          // onChange={(e) => onChange({ ...obj, [fieldName]: e.target.value })}
          className={`auth__input ${icon}`}
          placeholder={placeholder}
          onBlur={(e) => field.onBlur(e)}
          {...props}
        />
      </span>
    </div>
  )
}
