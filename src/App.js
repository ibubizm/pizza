import { Route } from 'react-router-dom'
import './App.scss'
import Navbar from './navbar/navbar'
import Pizzalist from './pizzalist/pizzalist'
import Basket from './basket/basket'
import { ProductDetail } from './productItem/productDetail'
import { Registration } from './auth/auth'
import { Login } from './auth/login'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './auth/fetch'
import { savedProduct } from './redux/actions/cart'

function App() {
  const dispatch = useDispatch()
  const basketItem = useSelector(({ cartReducer }) => cartReducer)
  const { isAuth } = useSelector(({ userReducer }) => userReducer)

  useEffect(() => {
    dispatch(auth())
    dispatch(savedProduct(JSON.parse(localStorage.getItem('basket'))))
  }, [])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basketItem))
  }, [basketItem])

  return (
    <div className="App">
      <Navbar />
      {isAuth && <Route path="/basket" component={Basket} />}
      <Route path="/" exact component={Pizzalist} />
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <Route exact path="/product/:id" component={ProductDetail} />
    </div>
  )
}

export default App
