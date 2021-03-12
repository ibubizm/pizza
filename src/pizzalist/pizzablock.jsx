import React, {useState} from 'react'

function PizzaBlock(props){
    const [currentDough, setCurrentDough] = useState(0)
    const [currentTypes, setCurrentTypes] = useState(0)
    return(
        <>
            {console.log(props)}
            <img src={props.pop.imageUrl} alt=""/>
            <div className="item__name">{props.pop.name}</div>
            <div className="switcher">
                <div className="sm__block">
                    {props.pop.types.map((items, index) => 
                        <li onClick={() => setCurrentTypes(index)}
                             key={`${items}_${index}`} 
                             className={currentTypes === index ?
                             'switch__size actives': 
                             'switch__size'}>
                                {items}cm
                        </li>)}
                </div>
                <div className="dough">
                    {props.pop.sizes.map((items, index) =>
                        <li onClick={() => setCurrentDough(index)} 
                        key={items.id} 
                        className={currentDough === index?
                             "switch__dough actives" :
                              "switch__dough" }>
                                  {items}
                        </li>
                    )}
                </div>
            </div>
                <button className="btn">+Add</button>
        </>
    )
}

export default PizzaBlock