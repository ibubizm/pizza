const initialState = {
  sortBy: {
    name: 'alphabet',
    type: 'name',
  },
  category: null,
}

const filters = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: {
        name: action.payload.name.name,
        type: action.payload.name.type,
      },
    }
  }
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    }
  }
  return state
}

export default filters
