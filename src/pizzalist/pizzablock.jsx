import { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function PizzaBlock({ pop, onClickAdd }) {
  const [currentDoughIndex, setCurrentDoughIndex] = useState(0)
  const [currentDoughValue, setCurrentDoughValue] = useState(pop.types[0])
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0)
  const [currentSizeValue, setCurrentSizeValue] = useState(pop.sizes[0])
  const [currentPriceValue, setCurrentPriceValue] = useState(pop.price[0])

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

  return (
    <>
      <img className="item__image" src={pop.imageUrl} alt="" />
      <Link className="item__name" to={`product/${pop._id}`}>
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
        <button onClick={addPizzas} className="btn btn--add">
          +Add
        </button>
      </div>
    </>
  )
}

export default PizzaBlock
