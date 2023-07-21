import './button.scss'

export const Button = ({ children, ...props }) => {
  return (
    <button className="registration__btn" {...props}>
      {children}
    </button>
  )
}
