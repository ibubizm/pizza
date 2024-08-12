import './productDetail.scss'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { addObjToCart } from '../redux/actions/cart'
import { getOneProduct } from '../auth/fetch'
import { AddToCartButton } from '../components/button/addToCartButton'
import { Select } from '../components/select/select'

export const ProductDetail = () => {
  const { id } = useParams()
  const [piz, setPiz] = useState()

  const [currentDoughValue, setCurrentDoughValue] = useState()
  const [currentSizeValue, setCurrentSizeValue] = useState()
  const [currentPriceValue, setCurrentPriceValue] = useState()
  const [isClicked, setIsClicked] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    getOneProduct(id).then(({ data }) => {
      setPiz(data)
      setCurrentSizeValue(data.sizes[0])
      setCurrentDoughValue(data.types[0])
      setCurrentPriceValue(data.price[0])
    })
  }, [])

  const addToCart = () => {
    const obj = {
      id: piz._id,
      name: piz.name,
      img: piz.imageUrl,
      size: currentSizeValue,
      dough: currentDoughValue,
      price: currentPriceValue,
    }
    animationFunc()
    dispatch(addObjToCart(obj))
  }

  const animationFunc = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 1500)
  }

  const toggleSize = (e) => {
    setCurrentSizeValue(e)
    // setCurrentSizeValue(e.target.value)
    // setCurrentPriceValue(piz.price[piz.sizes.indexOf(+e.target.value)])
    setCurrentPriceValue(piz.price[piz.sizes.indexOf(e)])
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
          <div className="detail__page__content">
            <h2>{piz.name}</h2>
            <p>{piz.description}</p>
            <div className="detail__page__options">
              {/* <select
                value={currentSizeValue}
                onChange={toggleSize}
                name="size"
              >
                {piz.sizes.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select> */}
              <Select
                name={'ass'}
                options={piz.sizes}
                selected={currentSizeValue}
                setSelected={toggleSize}
              />
              {piz.types.length !== 0 && (
                <Select
                  name={'dough'}
                  options={piz.types}
                  selected={currentDoughValue}
                  setSelected={setCurrentDoughValue}
                />
                // <select
                //   value={currentDoughValue}
                //   onChange={(e) => {
                //     setCurrentDoughValue(e.target.value)
                //   }}
                //   name="dough"
                // >
                //   {piz.types.map((i) => (
                //     <option key={i} value={i}>
                //       {i}
                //     </option>
                //   ))}
                // </select>
              )}
              <span>{currentPriceValue}BYN</span>
              <AddToCartButton isClicked={isClicked} onClick={addToCart} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
