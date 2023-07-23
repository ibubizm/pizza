import './productDetail.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min'
import { addObjToCart } from '../redux/actions/cart'
import { Button } from '../components/button/button'

export const ProductDetail = () => {
  const { id } = useParams()
  const [piz, setPiz] = useState()

  const [currentDoughValue, setCurrentDoughValue] = useState()
  const [currentSizeValue, setCurrentSizeValue] = useState()
  const [currentPriceValue, setCurrentPriceValue] = useState()
  const { items } = useSelector(({ pizzasReducer }) => pizzasReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    items.forEach((i) => {
      if (i.id == id) {
        setPiz(i)
        setCurrentSizeValue(i.sizes[0])
        setCurrentDoughValue(i.types[0])
        setCurrentPriceValue(i.price[0])
      }
    })
  }, [])

  const addToCart = () => {
    const obj = {
      id: piz.id,
      name: piz.name,
      img: piz.imageUrl,
      size: currentSizeValue,
      dough: currentDoughValue,
      price: currentPriceValue,
    }
    console.log(obj)
    dispatch(addObjToCart(obj))
  }

  const toggleSize = (e) => {
    setCurrentSizeValue(e.target.value)
    setCurrentPriceValue(piz.price[piz.sizes.indexOf(+e.target.value)])
  }

  const handleClick = () => {
    history.push('/')
  }

  return (
    <div className="container">
      {piz && (
        <div className="detail__page">
          <div>
            <span className="btn__back" onClick={handleClick}>
              &#8592; back
            </span>
            <img src={piz.imageUrl} alt="" />
          </div>
          <div>
            <h2>{piz.name}</h2>
            <p>{piz.description}</p>
            <div className="detail__page__options">
              <select
                value={currentSizeValue}
                onChange={toggleSize}
                name="size"
              >
                {piz.sizes.map((i, index) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <select
                value={currentDoughValue}
                onChange={(e) => {
                  setCurrentDoughValue(e.target.value)
                }}
                name="dough"
              >
                {piz.types.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <span>{currentPriceValue}BYN</span>
              <Button onClick={addToCart}>add</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
