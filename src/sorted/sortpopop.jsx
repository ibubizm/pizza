import {useState, useEffect, useRef} from 'react'

function SortPoPop(props){
    const [visiblePoPop, setVisiblePoPop] = useState(false)
    const [selectCatigory, setCatigory] = useState(0)
    const sortRef = useRef()
    const activeName = props.prop[selectCatigory]

    const togleVisiblePoPop = () =>{
        setVisiblePoPop(!visiblePoPop)
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
        // <div className="container">
            <div ref={sortRef} className="sort">
                <p>sorted: </p>
                <span  onClick={togleVisiblePoPop}>{activeName}</span>
                {visiblePoPop &&
                <div  className="sort__popop">
                    <ul>
                        {props.prop && props.prop.map((item, index) =>
                            <li onClick={() => setCatigory(index)} className={selectCatigory === index ? 'active': ''} key={`${item}_${index}`}>{item}</li>
                        )}
                    </ul>
                </div>}
            {/* </div> */}
        </div>
    )
}

export default SortPoPop