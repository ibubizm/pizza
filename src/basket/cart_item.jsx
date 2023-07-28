import closeImg from '../styles/close.svg'
import trashImg from '../styles/delete.svg'
import { addObjToCart, decrementItem } from '../redux/actions/cart'
import { useDispatch } from 'react-redux'
import { BsTrash } from 'react-icons/bs'

function CartItem({
  user,
  basketItems,
  onClickDel,
  onClickClean,
  price,
  count,
}) {
  const dispatch = useDispatch()

  const dec = (obj) => {
    if (obj.count > 1) {
      dispatch(decrementItem(obj))
    }
  }
  return (
    <div className="basket__items">
      {/* <div className="clean__div">
        <button onClick={onClickClean} className="clean_cart">
          <img className="trash__img" src={trashImg} alt="" />
          clean
        </button>
      </div> */}
      {basketItems == 0 ? (
        <div className="ass">
          <h1 className="empty__h1">basket is empty</h1>
          <img
            className="empty__img"
            src="https://ikeamania.by/images/redesign/empty-cart.svg"
            alt=""
          />
        </div>
      ) : (
        basketItems.map((item) => (
          <div
            className="basket__item"
            key={`${item.id}_${item.dough}_${item.size}`}
          >
            <div className="left__side">
              <img className="basket__img" src={item.img} alt="" />
              <div className="item__content">
                <strong>{item.name}</strong>
                <div className="item__subtitle">
                  {`${item.dough}, ${item.size}cm`}
                </div>
              </div>
            </div>
            <div className="count__buttons">
              <button onClick={() => dec(item)} className="circle__btn minus">
                -
              </button>
              <div className="count">
                <strong>{item.count}</strong>
              </div>
              <button
                onClick={() => dispatch(addObjToCart(item))}
                className="circle__btn plus"
              >
                +
              </button>
            </div>
            <div className="cost">
              {Number(item.price * item.count).toFixed(2)}BYN
            </div>
            <button onClick={() => onClickDel(item)} className="close__btn">
              <BsTrash />
            </button>
          </div>
        ))
      )}
      {basketItems === 0 ? (
        ''
      ) : (
        <div className="pay__div">
          <div className="totol__count">Totol count: {count}</div>
          <div className="price__pay">
            <div className="final__price">
              Final price : {Number(price).toFixed(2)}
            </div>
            <button className="btn btn--pay">pay</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartItem
