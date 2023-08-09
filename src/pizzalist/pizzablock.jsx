import { memo, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { AddToCartButton } from '../components/button/addToCartButton'

const PizzaBlock = memo(({ pop, onClickAdd }) => {
  const [currentDoughIndex, setCurrentDoughIndex] = useState(0)
  const [currentDoughValue, setCurrentDoughValue] = useState(pop.types[0])
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0)
  const [currentSizeValue, setCurrentSizeValue] = useState(pop.sizes[0])
  const [currentPriceValue, setCurrentPriceValue] = useState(pop.price[0])
  const [isClicked, setIsClicked] = useState(false)

  const addPizzas = () => {
    let obj = {
      id: pop.id,
      name: pop.name,
      img: pop.imageUrl,
      dough: currentDoughValue,
      size: currentSizeValue,
      price: currentPriceValue,
    }
    onClickAdd(obj)
    animationFun()
    localStorage.setItem('basket', JSON.stringify(obj))
  }

  const animationFun = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 1500)
  }

  return (
    <div className="item">
      <Link className="item__name" to={`product/${pop._id}`}>
        <img className="item__image" src={pop.imageUrl} alt="" />
        {pop.name}
      </Link>
      <div className="switcher">
        <div className="sm__block">
          {pop.types &&
            pop.types.map((items, index) => (
              <li
                onClick={() => {
                  setCurrentDoughIndex(index)
                  setCurrentDoughValue(items)
                }}
                key={`${items}_${index}`}
                className={
                  currentDoughIndex === index
                    ? 'switch__dough actives'
                    : 'switch__dough'
                }
              >
                {items}
              </li>
            ))}
        </div>

        <div className="dough">
          {pop.sizes.map((items, index) => (
            <li
              onClick={() => {
                setCurrentSizeIndex(index)
                setCurrentSizeValue(items)
                setCurrentPriceValue(pop.price[index])
              }}
              key={items}
              className={
                currentSizeIndex === index
                  ? 'switch__size actives'
                  : 'switch__size'
              }
            >
              {items} {pop.category !== 4 ? 'cm' : 'L'}
            </li>
          ))}
        </div>
      </div>
      <div className="price__add">
        {currentPriceValue.toFixed(1)}BYN
        <AddToCartButton isClicked={isClicked} onClick={addPizzas} />
      </div>
    </div>
  )
})

export default PizzaBlock
