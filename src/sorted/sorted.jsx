import React, {useState, useRef} from 'react'
import './sorted.scss'



function Sorted(props){
    const [state, setState] = useState(null)


    return(
        <div className="container">
            <div className="ass">
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
            <div className="sortpopop">
                <span>popular: </span>
                <ul>
                    <li>ass</li>
                    <li>pass</li>
                    <li>mass</li>
                </ul>
            </div>
            </div>
        </div>
    )
}



export default Sorted