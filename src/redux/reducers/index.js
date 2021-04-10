import {combineReducers} from 'redux'
import filtersReducer from './filters'
import pizzasReducer from './pizzas'


const rootReducers = combineReducers({
    filtersReducer,
    pizzasReducer,
})

export default rootReducers