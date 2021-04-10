import {useState, useEffect, useRef} from 'react'
import {memo} from 'react'
import { useSelector } from 'react-redux'
// import {setSortPoPop} from '../redux/actions/filters'

const SortPoPop = memo(function SortPoPop({prop, onClickSort, activeSortBy}){
    const [visiblePoPop, setVisiblePoPop] = useState(false)
    // const [selectCatigory, setCatigory] = useState(0)
    const sortRef = useRef()
    // const activeName = prop[selectCatigory].name

    const sortBy = useSelector(({filtersReducer}) => filtersReducer.sortBy)

    console.log(sortBy)

    const togleVisiblePoPop = () =>{
        setVisiblePoPop(!visiblePoPop)
    }

    const fun = (index) => {
        onClickSort(index)
    }

    const handleOutsideClick = (event) =>{
        if(!event.path.includes(sortRef.current)){
            setVisiblePoPop(false)
        }
        else{
            console.log('in')
        }
        
    }

    useEffect(()=>{
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return(
            <div ref={sortRef} className="sort">
                <p>sorted: </p>
                <span  onClick={togleVisiblePoPop}>{sortBy}</span>
                {visiblePoPop &&
                <div  className="sort__popop">
                    <ul>
                        {prop && prop.map((obj, index) =>
                            <li onClick={() => fun(obj.name)} 
                            className={activeSortBy === obj.name ? 
                                'active': ''} 
                                key={`${obj.name}_${index}`}>
                                    {obj.type}   
                            </li>
                        )}
                    </ul>
                </div>}
        </div>
    )
})

export default SortPoPop