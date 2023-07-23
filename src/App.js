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
import { privatRoutes, publicRoutes } from './routes'
import { Redirect } from 'react-router-dom'

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

      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          {...route}
        />
      ))}
      {isAuth &&
        privatRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
    </div>
  )
}

export default App
