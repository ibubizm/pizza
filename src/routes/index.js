import { Registration } from '../auth/auth'
import { Login } from '../auth/login'
import Basket from '../basket/basket'
import Pizzalist from '../pizzalist/pizzalist'
import { ProductDetail } from '../productItem/productDetail'

export const publicRoutes = [
  { path: '/', component: Pizzalist, exact: true },
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { path: '/product/:id', component: ProductDetail, exact: true },
  // { path: '*', component: Login  },
]

export const privatRoutes = [
  { path: '/basket', component: Basket },
  // { path: '*', component: <Login /> },
]
