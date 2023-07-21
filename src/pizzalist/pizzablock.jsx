import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function PizzaBlock({ pop, onClickAdd }) {
  const [currentDoughIndex, setCurrentDoughIndex] = useState(0)
  const [currentDoughValue, setCurrentDoughValue] = useState(pop.types[0])

  const [currentSizeIndex, setCurrentSizeIndex] = useState(0)
  const [currentSizeValue, setCurrentSizeValue] = useState(pop.sizes[0])
  const [currentPriceValue, setCurrentPriceValue] = useState(pop.price[0])
  // const [finalPrice, setFinalPrice] = useState(pop.price[0])

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
    localStorage.setItem('basket', JSON.stringify(obj))
  }

  // useEffect(() => {
  //   if (currentDoughValue === 'fat') {
  //     setFinalPrice(pop.price * 1.23)
  //     if (currentSizeValue === 26) {
  //       setFinalPrice(pop.price * 1.23)
  //     } else if (currentSizeValue === 30) {
  //       setFinalPrice(pop.price * 1.23 + 5)
  //     } else if (currentSizeValue === 40) {
  //       setFinalPrice(pop.price * 1.23 + 10)
  //     }
  //   }

  //   if (currentDoughValue === 'slim') {
  //     setFinalPrice(pop.price)
  //     if (currentSizeValue === 26) {
  //       setFinalPrice(pop.price)
  //     } else if (currentSizeValue === 30) {
  //       setFinalPrice(pop.price + 5)
  //     } else if (currentSizeValue === 40) {
  //       setFinalPrice(pop.price + 10)
  //     }
  //   }
  // }, [currentDoughValue, currentSizeValue])

  return (
    <>
      <img className="item__image" src={pop.imageUrl} alt="" />
      <Link className="item__name" to={`product/${pop.id}`}>
        {pop.name}
      </Link>
      <div className="switcher">
        <div className="sm__block">
          {pop.types.map((items, index) => (
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
              {items}cm
            </li>
          ))}
        </div>
      </div>
      <div className="price__add">
        {currentPriceValue.toFixed(1)}BYN
        <button onClick={addPizzas} className="btn btn--add">
          +Add
        </button>
      </div>
    </>
  )
}

export default PizzaBlock
