import React, {useState} from 'react'

function PizzaBlock(props){
    const [currentDough, setCurrentDough] = useState(0)
    const [currentSize, setCurrentSize] = useState(0)
    let [currentType, setCurrentType] = useState({}) 
    

    const priceFunc = (item) =>{
        setCurrentType({item: item})
        console.log(currentType)
    }


    return(
        <>
            <img src={props.pop.imageUrl} alt=""/>
            <div className="item__name">{props.pop.name}</div>
            <div className="switcher">
                <div className="sm__block">
                    {props.pop.types.map((items, index) => 
                        <li onClick={() => {setCurrentDough(index)
                            setCurrentType(items)
                        priceFunc(items)}}
                             key={`${items}_${index}`} 
                             className={currentDough === index ?
                             'switch__dough actives': 
                             'switch__dough'}>
                                {items}
                        </li>)}
                </div>

                <div className="dough">
                    {props.pop.sizes.map((items, index) =>
                        <li onClick={() => setCurrentSize(index)} 
                        key={items}
                        className={currentSize === index?
                            "switch__size actives" :
                            "switch__size" }>
                                {items}cm
                        </li>
                    )}
                </div>
            </div>
            <div className="price__add">
                {props.pop.price}BYN
                <button className="btn">+Add</button>
            </div>
        </>
    )
}

export default PizzaBlock