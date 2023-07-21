import { combineReducers } from 'redux'
import filtersReducer from './filters'
import pizzasReducer from './pizzas'
import cartReducer from './cart'
import { userReducer } from './user'

const rootReducers = combineReducers({
  filtersReducer,
  pizzasReducer,
  cartReducer,
  userReducer,
})

export default rootReducers
