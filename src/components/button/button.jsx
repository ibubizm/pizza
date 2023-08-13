import './button.scss'

export const Button = ({ children, disabled, ...props }) => {
  return (
    <button disabled={!disabled} className="registration__btn" {...props}>
      {children}
    </button>
  )
}
