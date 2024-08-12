import { Route } from 'react-router-dom'
import './App.scss'
import Navbar from './navbar/navbar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './auth/fetch'
import { savedProduct } from './redux/actions/cart'
import { privatRoutes, publicRoutes } from './routes'
import { Admin } from './adminPage/Admin'

function App() {
  const dispatch = useDispatch()
  const basketItem = useSelector(({ cartReducer }) => cartReducer)
  const { isAuth, currentUser } = useSelector(({ userReducer }) => userReducer)

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
      {isAuth &&
        privatRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      {isAuth && currentUser.status && (
        <Route path={'/admin'} component={Admin} />
      )}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          {...route}
        />
      ))}
    </div>
  )
}

export default App
