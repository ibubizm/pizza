import './input.scss'
import {
  MdAlternateEmail,
  MdOutlineImage,
  MdOutlineAttachMoney,
} from 'react-icons/md'
import { AiOutlineUnlock, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'
import { CiPizza } from 'react-icons/ci'

export const Input = ({
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
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      {setIcon()}
      <input
        onChange={(e) => onChange({ ...obj, [fieldName]: e.target.value })}
        className={`auth__input ${icon}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}
