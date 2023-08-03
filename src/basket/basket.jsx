import './basket.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CartItem from './cart_item'
import { cleanCart, delFromCart } from '../redux/actions/cart'
import { getAvatar } from '../helpers/helpers'

function Basket() {
  const basketItem = useSelector(({ cartReducer }) => cartReducer.items)
  const { price, count } = useSelector(({ cartReducer }) => cartReducer)
  const { currentUser: user } = useSelector(({ userReducer }) => userReducer)
  const basketItems = [].concat.apply([], Object.values(basketItem))

  const dispatch = useDispatch()

  const cleanCarts = () => {
    if (window.confirm('Are you shure?')) {
      dispatch(cleanCart())
    }
  }

  const delItem = (obj) => {
    dispatch(delFromCart(obj))
  }

  return (
    <div className="container">
      <div className="cart">
        <div className="cart__content">
          <div className="cart__title">
            <h2>Basket</h2>
          </div>

          <div className="person__cart">
            <img
              className="person__cart__img"
              src={getAvatar(user.avatar)}
              alt="avatar"
            />
            <div className="person__cart__data">
              <h2>{user.name}</h2>
              <span>{user.email}</span>
              <span>{user.phoneNumber}</span>
            </div>
          </div>

          <CartItem
            user={user}
            key={`${new Date().getTime()}`}
            onClickClean={cleanCarts}
            onClickDel={delItem}
            basketItems={basketItems}
            price={price}
            count={count}
          />
        </div>
      </div>
    </div>
  )
}

export default Basket
