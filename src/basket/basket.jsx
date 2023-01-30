import './basket.scss'
import basket from '../navbar/basket.svg'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CartItem from './cart_item'
import { cleanCart, delFromCart } from '../redux/actions/cart'
import { useEffect } from 'react'

function Basket() {
  const basketItem = useSelector(({ cartReducer }) => cartReducer.items)
  const { price, count } = useSelector(({ cartReducer }) => cartReducer)
  const basketItems = [].concat.apply([], Object.values(basketItem))
  // const basketItems = []
  // for (let a in basketItem) {
  //   basketItems.push(basketItem[a][0])
  //   console.log(basketItem[a][0])
  // }

  const dispatch = useDispatch()

  const cleanCarts = () => {
    if (window.confirm('Are you shure?')) {
      dispatch(cleanCart())
    }
  }

  const delItem = (id, obj, index) => {
    // const newBasket = basketItems.splice(index, 1)
    // delete basketItem[id]
    // console.log(newBasket)
    // console.log(basketItem[id], obj)
    console.log(basketItem)

    // dispatch(delFromCart(basketItem))
  }

  useEffect(delItem, [basketItem])

  return (
    <div className="container">
      <div className="cart">
        <div className="cart__content">
          <div className="cart__title">
            <img className="cart__logo" src={basket} alt="" />
            <h2>Basket</h2>
          </div>

          <CartItem
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
