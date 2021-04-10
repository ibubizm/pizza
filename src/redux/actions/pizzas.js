

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoading(false))
    console.log(category)
    fetch(`http://localhost:3001/pizzas?${category != null ? `category=${category}` : ''}&_sort=${sortBy}`)
    .then(resp => resp.json())
    .then(json => dispatch(setPizzas(json)))
}

export const setLoading = (value) => ({
    type: 'SET_LOADING',
    payload: value
})

export const setPizzas = (items) =>({
    type: 'SET_PIZZAS',
    payload: items
})