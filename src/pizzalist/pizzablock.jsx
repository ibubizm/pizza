import {useState, useEffect} from 'react'
// import {useDispatch} from 'react-redux'
import ContentLoader from "react-content-loader"

function PizzaBlock({pop}){
    const [currentDoughIndex, setCurrentDoughIndex] = useState(0)
    const [currentDoughValue, setCurrentDoughValue] = useState(pop.types[0])
    
    const [currentSizeIndex, setCurrentSizeIndex] = useState(0)
    const [currentSizeValue, setCurrentSizeValue] = useState(pop.sizes[0])
    const [finalPrice, setFinalPrice] = useState(pop.price)


    const addPizzas = () =>{
        let obj = {
            img : pop.imageUrl,
            dough : currentDoughValue,
            size : currentSizeValue
        }
    }
    

    const priceFunc = useEffect(() =>{

        if(currentDoughValue === 'fat'){
            setFinalPrice(pop.price * 1.23)
            if(currentSizeValue === 26){
                setFinalPrice(pop.price * 1.23)
            }
            else if(currentSizeValue === 30){
                setFinalPrice(pop.price * 1.23 + 5)
            }
            else if(currentSizeValue === 40){
                setFinalPrice(pop.price * 1.23 + 10)
            }
        }
        
        if(currentDoughValue === 'slim'){
            setFinalPrice(pop.price)
            if(currentSizeValue === 26){
                setFinalPrice(pop.price)
            }
            else if(currentSizeValue === 30){
                setFinalPrice(pop.price + 5)
            }
            else if(currentSizeValue === 40){
                setFinalPrice(pop.price + 10)
            }
        }
    }, [currentDoughValue, currentSizeValue])


    return(
        <>
            <img src={pop.imageUrl} alt=""/>
            <div className="item__name">{pop.name}</div>
            <div className="switcher">
                <div className="sm__block">
                    {pop.types.map((items, index) => 
                        <li onClick={() => {setCurrentDoughIndex(index)
                            setCurrentDoughValue(items)
                        }
                        }
                             key={`${items}_${index}`} 
                             className={currentDoughIndex === index ?
                             'switch__dough actives': 
                             'switch__dough'}>
                                {items}
                        </li>)}
                </div>

                <div className="dough">
                    {pop.sizes.map((items, index) =>
                        <li onClick={() => {setCurrentSizeIndex(index)
                            setCurrentSizeValue(items)
                            
                            }} 
                        key={items}
                        className={currentSizeIndex === index?
                            "switch__size actives" :
                            "switch__size" }>
                                {items}cm
                        </li>
                    )}
                </div>
            </div>
            <div className="price__add">
                {finalPrice.toFixed(1)}BYN
                <button onClick={addPizzas} className="btn">+Add</button>
            </div>
        </>
    )
}

export default PizzaBlock