import React from 'react'
import logo from './logo_pizza.svg'
import basket from './basket.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './navbar.scss'
import { server_url } from '../vars'
import DropDown from '../components/dropdown/dropdown'
import { getAvatar } from '../helpers/helpers'

const test = [
  { name: 'admin panel', link: '/admin', status: true },
  { name: 'history', link: '/history', status: false },
]

function Navbar() {
  const { price, count } = useSelector(({ cartReducer }) => cartReducer)
  const { isAuth, currentUser } = useSelector(({ userReducer }) => userReducer)

  return (
    <div className="container">
      <div className="header">
        <Link to="/" className="hz">
          <div className="nav__left">
            <img src={logo} alt="" />
            <div className="nav__elements">
              <div className="nav__title">Ibubizm Pizza</div>
              <div className="nav__subtitle">just better</div>
            </div>
          </div>
        </Link>
        {isAuth ? (
          <div className="nav__right">
            <Link to="/basket" className="basket_link">
              <div href="#" className="basket__btn">
                <div className="left__basket">
                  <img src={basket} alt="" />
                  {count}
                </div>
                <div className="right__basket">
                  {Number(price).toFixed(2)}BYN
                </div>
              </div>
            </Link>
            <DropDown img={getAvatar(currentUser.avatar)} prop={test} />
          </div>
        ) : (
          <div className="basket__btn">
            <Link to="/login" className="">
              <div className="left__basket">login</div>
            </Link>
            <Link to="/registration">
              <div className="right__basket">reg</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
