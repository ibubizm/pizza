import { useState } from 'react'
import './select.scss'

export const Select = ({ name, options, selected, setSelected }) => {
  const [isActive, setActive] = useState(false)

  return (
    <div className="dropdown">
      <div className="select">
        <div className="select-btn" onClick={() => setActive(!isActive)}>
          {selected}
          <span className="triangle_down"></span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                key={option}
                onClick={(e) => {
                  setSelected(option)
                  setActive(false)
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
