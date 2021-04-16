import {combineReducers} from 'redux'
import filtersReducer from './filters'
import pizzasReducer from './pizzas'
import cartReducer from './cart'


const rootReducers = combineReducers({
    filtersReducer,
    pizzasReducer,
    cartReducer,

})

export default rootReducers