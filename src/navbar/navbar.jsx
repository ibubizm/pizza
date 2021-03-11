import React from 'react'
import logo from './logo_pizza.svg'
import basket from './basket.svg'
import {Link} from 'react-router-dom'
import './navbar.scss'


class Navbar extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="header">
                    <div className="nav__left">
                        <img src={logo} alt=""/>
                        <div className="nav__elements">
                            <div className="nav__title">
                                Ibubizm Pizza
                            </div>
                            <div className="nav__subtitle">
                                just better
                            </div>
                        </div>
                    </div>
                    <Link to="/card">
                        <div href="#" className="basket">
                            <img src={basket} alt=""/>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar