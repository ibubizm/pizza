import { useState, useCallback } from 'react'
import './sorted.scss'
import { useDispatch, useSelector } from 'react-redux'
import { memo } from 'react'
import {setCategory} from '../redux/actions/filters'



const Sorted = memo(function Sorted({ items, onClickItem, activeCategory }) {
    // const [state, setState] = useState(0)
    const dispatch = useDispatch()

    const fun = (index) => {
        onClickItem(index)
        // setState(index)
    }


    return (
        <div className="catigories">
            <ul className="catigories__btn">
                <li onClick={() => dispatch(setCategory(null))} className={activeCategory === null ? 'btn btn--cat active' : 'btn btn--cat'} >all</li>
                {items && items.map((item, index) =>
                    <li onClick={() => fun(index)}
                        className={activeCategory === index ?
                            'btn btn--cat active' :
                            'btn btn--cat'}
                        key={`${item}_${index}`}>
                        {item}
                    </li>)}
            </ul>
        </div>
    )
})




export default Sorted