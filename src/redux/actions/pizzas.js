import axios from 'axios'
import { server_url } from '../../vars'

const sortByPrice = (mas) => {
  return mas.sort((a, b) => a.price[0] - b.price[0])
}

const sortByName = (mas) => {
  return mas.sort(function (a, b) {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })
}

const sortByRating = (mas) => {
  return mas.sort((a, b) => a.rating - b.rating)
}

//shit
export const fetchPizzas =
  (sortBy, category = null) =>
  async (dispatch) => {
    dispatch(setLoading(false))
    const { data: json } = await axios.get(server_url + 'api/products')
    if (category == null && sortBy.type === 'price') {
      return dispatch(setPizzas(sortByPrice(json)))
    }
    if (category == null && sortBy.type === 'name') {
      return dispatch(setPizzas(sortByName(json)))
    }
    if (category == null && sortBy.type === 'rating') {
      return dispatch(setPizzas(sortByRating(json)))
    }
    if (sortBy.type === 'rating') {
      return dispatch(
        setPizzas(
          json
            .filter((item) => item.category == category)
            .sort((a, b) => a.rating - b.rating)
        )
      )
    }
    if (sortBy.type === 'price') {
      return dispatch(
        setPizzas(
          json
            .filter((item) => item.category == category)
            .sort((a, b) => a.price[0] - b.price[0])
        )
      )
    }

    if (sortBy.type === 'name') {
      return dispatch(
        setPizzas(
          json
            .filter((item) => item.category == category)
            .sort((a, b) => a.name > b.name)
        )
      )
    }
  }
//shit
export const setLoading = (value) => ({
  type: 'SET_LOADING',
  payload: value,
})

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
})

export const test = (items, sortBy, category) => ({
  type: 'TEST',
  payload: { items, sortBy, category },
})
