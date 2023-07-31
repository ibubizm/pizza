import './basket.scss'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CartItem from './cart_item'
import { cleanCart, delFromCart } from '../redux/actions/cart'
import { server_url } from '../vars'
import { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { getAvatar } from '../helpers/helpers'

function Basket() {
  const basketItem = useSelector(({ cartReducer }) => cartReducer.items)
  const { price, count } = useSelector(({ cartReducer }) => cartReducer)
  const { currentUser: user } = useSelector(({ userReducer }) => userReducer)
  const basketItems = [].concat.apply([], Object.values(basketItem))
  const [avatar, setAvatar] = useState('')

  const dispatch = useDispatch()

  const cleanCarts = () => {
    if (window.confirm('Are you shure?')) {
      dispatch(cleanCart())
    }
  }

  const delItem = (obj) => {
    dispatch(delFromCart(obj))
  }

  // const getAvatar = () => {
  //   if (user.avatar != '') {
  //     setAvatar(`${server_url}avatars/${user.avatar}`)
  //   } else {
  //     setAvatar(
  //       'https://m.media-amazon.com/images/I/61hpdSzdo6L._UF894,1000_QL80_.jpg'
  //     )
  //   }
  // }

  // useEffect(() => {
  //   // getAvatar()
  //   getAvatar(user.avatar)
  // }, [])

  return (
    <div className="container">
      <div className="cart">
        <div className="cart__content">
          <div className="cart__title">
            <h2>Basket</h2>
          </div>

          <div className="person__cart">
            {}
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
