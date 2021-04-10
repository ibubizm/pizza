
import './pizzalist.scss'
import {fetchPizzas} from '../redux/actions/pizzas'
import {useSelector, useDispatch} from 'react-redux'
import PizzaBlock from './pizzablock'
import SortPoPop from '../sorted/sortpopop'
import Sorted from '../sorted/sorted'
import {useCallback, useEffect} from 'react'
import {setCategory, setSortPoPop} from '../redux/actions/filters'
import LoadingPizzas from './loadingPizzas'


const categoryList = ['grill', 'closed', 'spicy', 'vegan']
const sortDict = [
    {name: 'rating', type: 'popular'},
    {name: 'name', type: 'alphabet'},
    {name: 'price', type: 'price'}]

function Pizzalist(){
    const {items, isLoaded} = useSelector(({pizzasReducer}) => pizzasReducer)
    const {sortBy, category} = useSelector(({filtersReducer}) => filtersReducer)
    
    const dispatch = useDispatch()

    const selectCategory = useCallback((index) =>{
        dispatch(setCategory(index))      
    }, [])

    const selectSort = useCallback((name) =>{
        dispatch(setSortPoPop(name))
    }, [])


    useEffect(() => {
            dispatch(fetchPizzas(sortBy, category))
            console.log(sortBy)
      }, [sortBy, category])


    return( 
        <div className="container">
            <div className="sorting">
                <Sorted activeCategory={category} onClickItem={selectCategory} items={categoryList}/>
                <SortPoPop activeSortBy={sortBy} onClickSort={selectSort} prop={sortDict}/>
             </div>
            <h1 className="title">all pizzas</h1>
            <div className="items">
                {isLoaded ?  items.map((item) => 
                    <div key={`${item.name}_${item.id}`} className="item">
                        <PizzaBlock key={`${item.name}_${item.id}`} pop={item}/> 
                    </div>)
                     :
                    Array(10).fill(0).map((i, index) =>
                    <div className="item">
                        < LoadingPizzas key={index} />
                    </div> )
                    }
            </div>
        </div>
    )
}

export default Pizzalist