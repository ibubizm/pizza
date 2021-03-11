import React, {useState} from 'react'
import './sorted.scss'



function Sorted(props){
    const [state, setState] = useState(null)

    return(
        // <div className="container">
            <div className="catigories">
                <ul className="catigories__btn">
                    <li onClick={() => setState(null)} className={state === null ? 'btn btn--cat active': 'btn btn--cat'} >all</li>
                    {props.items && props.items.map((item, index) => 
                        <li onClick={() => setState(index)}
                            className={state === index ?
                                'btn btn--cat active' : 
                                'btn btn--cat'}
                            key={`${item}_${index}`}>
                                {item}
                        </li>)}
                </ul>
            </div>
        // </div>
    )
}




export default Sorted