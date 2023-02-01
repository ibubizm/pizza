import React from 'react'
import logo from './logo_pizza.svg'
import basket from './basket.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './navbar.scss'

function Navbar() {
  const { price, count } = useSelector(({ cartReducer }) => cartReducer)
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
        <Link to="/basket" className="basket_link">
          <div href="#" className="basket">
            <div className="left__basket">
              <img src={basket} alt="" />
              {count}
            </div>
            <div className="right__basket">{Number(price).toFixed(2)}BYN</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
