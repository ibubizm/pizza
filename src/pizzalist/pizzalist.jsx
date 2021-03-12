// import React, {useState, useRef, useEffect} from 'react'
import './pizzalist.scss'
import { useState } from 'react'
import PizzaBlock from './pizzablock'


function Pizzalist(props){
    const [currentSize, setCurrentSize] = useState(0)
    const [currentDough, setCurrentDough] = useState(0)
    let propsList = props.prop
    console.log(propsList)

    const togleCurrentSize = () =>{
        setCurrentSize(!currentSize)
    }


    return(
        <div className="container">
                <h1 className="title">all pizzas</h1>
                <div className="items">
                    {propsList.map(item => 
                        <div className="item">
                            {/* {console.log(item.id)} */}
                            <PizzaBlock key={item.id} pop={item}/>
                        </div>)}
                </div>
        </div>
    )
}

export default Pizzalist