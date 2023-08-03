import { useState, useEffect, useRef } from 'react'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/reducers/user'
import './dropdown.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const DropDown = memo(function DropDown({ img, prop }) {
  const [visiblePoPop, setVisiblePoPop] = useState(false)
  const ref = useRef()
  const { currentUser } = useSelector(({ userReducer }) => userReducer)

  const dispatch = useDispatch()

  const logoutClick = () => {
    dispatch(logout())
    localStorage.removeItem('token')
  }

  const togleVisiblePoPop = () => {
    setVisiblePoPop((prev) => !prev)
    console.log(visiblePoPop)
  }

  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisiblePoPop(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div ref={ref} className="">
      <img className="nav__avatar" src={img} onClick={togleVisiblePoPop} />
      {visiblePoPop && (
        <div className="sort__popop">
          <ul className="">
            <h3>{currentUser.name}</h3>

            {prop &&
              prop.map((obj, index) => (
                <div key={obj.link}>
                  {!obj.status && (
                    <Link to={obj.link}>
                      <li
                        className={'dropdown__item'}
                        key={`${obj.name}_${index}`}
                      >
                        {obj.name}
                      </li>
                    </Link>
                  )}
                  {currentUser.status && obj.status && (
                    <Link to={obj.link}>
                      <li
                        className={'dropdown__item'}
                        key={`${obj.name}_${index}`}
                      >
                        {obj.name}
                      </li>
                    </Link>
                  )}
                </div>
              ))}
            <li className={'dropdown__item'} onClick={logoutClick}>
              logout
            </li>
          </ul>
        </div>
      )}
    </div>
  )
})

export default DropDown
