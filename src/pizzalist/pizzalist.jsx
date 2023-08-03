import './pizzalist.scss'
import { fetchPizzas } from '../redux/actions/pizzas'
import { useSelector, useDispatch } from 'react-redux'
import PizzaBlock from './pizzablock'
import SortPoPop from '../sorted/sortpopop'
import Sorted from '../sorted/sorted'
import { useCallback, useEffect } from 'react'
import { setCategory, setSortPoPop } from '../redux/actions/filters'
import LoadingPizzas from './loadingPizzas'
import { addObjToCart } from '../redux/actions/cart'

const categoryList = ['grill', 'classic', 'spicy', 'vegan', 'drink']
const sortDict = [
  { name: 'alphabet', type: 'name' },
  { name: 'popular', type: 'rating' },
  { name: 'price', type: 'price' },
]

function Pizzalist() {
  const { items, isLoaded } = useSelector(({ pizzasReducer }) => pizzasReducer)
  const { sortBy, category } = useSelector(
    ({ filtersReducer }) => filtersReducer
  )

  const dispatch = useDispatch()

  const selectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const selectSort = useCallback((name) => {
    dispatch(setSortPoPop(name))
  }, [])

  const addToCart = (obj) => {
    dispatch(addObjToCart(obj))
  }

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [sortBy, category])

  return (
    <div className="container">
      <div className="sorting">
        <Sorted
          activeCategory={category}
          onClickItem={selectCategory}
          items={categoryList}
        />
        <SortPoPop
          activeSortBy={sortBy.name}
          onClickSort={selectSort}
          prop={sortDict}
        />
      </div>
      <h1 className="title">
        {category === null ? ' all pizzas' : categoryList[category]}
      </h1>
      <div className="items">
        {isLoaded
          ? items.map((item) => (
              <div
                key={`${item.name}_${item.id}_${new Date().getTime()}`}
                className="item"
              >
                <PizzaBlock
                  onClickAdd={addToCart}
                  key={`${item.name}_${item.id}_${new Date().getTime()}`}
                  pop={item}
                />
              </div>
            ))
          : Array(10)
              .fill(0)
              .map((i, index) => (
                <div key={index} className="item">
                  <LoadingPizzas key={index} />
                </div>
              ))}
      </div>
    </div>
  )
}

export default Pizzalist
