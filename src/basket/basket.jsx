import './basket.scss'
import basket from '../navbar/basket.svg'
import closeImg from '../styles/close.svg'
import {useSelector} from 'react-redux'

function Basket() {
    const basketItem = useSelector(({cartReducer}) => cartReducer.item)
    console.log(basketItem)
    return(
        <div className="container">
            <div className="cart">
                <div className="cart__content">
                    <div className="cart__title">
                        <img className="cart__logo" src={basket} alt=""/>
                        <h2>Basket</h2>
                    </div>
                   { basketItem && <div className="basket__items">
                        <div className="basket__item">
                            <div className="left__side">
                                <img className="basket__img" src={basketItem.img} alt=""/>
                                <div className="item__content">
                                    <strong>{basketItem.name}</strong>
                                    <div className="item__subtitle">
                                       {`${basketItem.dough}, ${basketItem.size}cm` }
                                    </div>
                                </div>
                            </div>
                            <div className="count__buttons">
                                <button className="circle__btn">-</button>
                                <div className="count"><strong>1</strong></div>
                                <button className="circle__btn">+</button>
                            </div>
                            <div className="cost">
                                {basketItem.price}BYN
                            </div>
                            <button className="close__btn"><img className="close" src={closeImg} alt=""/></button>
                            
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Basket