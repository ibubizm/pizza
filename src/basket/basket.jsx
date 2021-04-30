import './basket.scss'
import basket from '../navbar/basket.svg'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import CartItem from './cart_item'
import {cleanCart, delFromCart} from '../redux/actions/cart'
import { useEffect } from 'react'


function Basket() {
    const basketItem = useSelector(({cartReducer}) => cartReducer.items)
    const {price, count} = useSelector(({cartReducer}) => cartReducer)
    const ass = [].concat.apply([], Object.values(basketItem))
    const dispatch = useDispatch()
    
    const cleanCarts = () =>{
        if(window.confirm('Are you shure?')){
            dispatch(cleanCart())
        }
    }

    
    const delItem = (id, obj, index) =>{
        // console.log(Object.values(basketItem[id]))

        delete basketItem[id]
        
        dispatch(delFromCart(basketItem))        
    }

    useEffect(delItem, [basketItem])

    return(
        <div className="container">
            <div className="cart">
                <div className="cart__content">
                    <div className="cart__title">
                        <img className="cart__logo" src={basket} alt=""/>
                        <h2>Basket</h2>
                    </div>
                    {/* {ass.map()} */}
                    <CartItem key={`${ new Date().getTime() }`} onClickClean={cleanCarts} onClickDel={delItem} ass={ass} price={price} count={count}/>  

                </div>
            </div>
        </div>
    )
}

export default Basket