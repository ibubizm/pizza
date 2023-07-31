import { Registration } from '../auth/registration'
import { Login } from '../auth/login'
import Basket from '../basket/basket'
import Pizzalist from '../pizzalist/pizzalist'
import { ProductDetail } from '../productItem/productDetail'
import { Admin } from '../adminPage/Admin'

export const publicRoutes = [
  { path: '/', component: Pizzalist, exact: true },
  { path: '/login', component: Login },
  { path: '/registration', component: Registration },
  { path: '/product/:id', component: ProductDetail, exact: true },
]

export const privatRoutes = [
  { path: '/basket', component: Basket },
  // { path: '/admin', component: Admin },
]
