import './input.scss'
import { MdAlternateEmail } from 'react-icons/md'
import { AiOutlineUnlock, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'

export const Input = ({ placeholder, icon, user, onChange, ...props }) => {
  const ass = () => {
    switch (icon) {
      case 'email':
        return <MdAlternateEmail className="auth__icon" />
      case 'lock':
        return <AiOutlineUnlock className="auth__icon" />
      case 'phone':
        return <AiOutlinePhone className="auth__icon" />
      case 'name':
        return <AiOutlineUser className="auth__icon" />

      default:
        break
    }
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      {ass()}
      <input
        onChange={(e) => onChange({ ...user, [placeholder]: e.target.value })}
        className={`auth__input ${icon}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}
