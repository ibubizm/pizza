import React from 'react'
import './pizzalist.scss'


function Pizzalist(props){
    let propsList = props.prop.all
    return(
        <div className="container">
                <h1 className="title">all pizzas</h1>

                <div className="items">
                {propsList.map((item, index) => 
                    <div className="item" key={`${item}_${index}`}>
                        <img src={item.img} alt=""/>
                        <div className="item__name">{item.name}</div>
                        <div className="switcher">
                            <div className="dough">
                                <div className="switch__dough">slim</div>
                                <div className="switch__dough">fat</div>
                            </div>
                            <div className="sm__block">

                                <input id="35" type="checkbox"/>
                                <label htmlFor="35">35cm</label>

                                <input id="40" type="checkbox"/>
                                <label htmlFor="40">40cm</label>

                                <input id="55" type="checkbox"/>
                                <label htmlFor="55">55cm</label>
                            </div>
                        </div>
                        <button className="btn">+Add</button>
                    </div>)}
                </div>
            </div>
    )
}


// class Pizzalist extends React.Component{
//     // constructor(props){
//     //     super(props)
//     // }
//     render(){
//         console.log(this.props.prop.all)
//         let a = this.props.prop.all
//         return (
//             <div className="container">
//                 <h1 className="title">all pizzas</h1>

//                 <div className="items">
//                 {a.map((item, index) => 
//                     <div className="item" key={index}>
//                         <img src={item.img} alt=""/>
//                         <div className="item__name">{item.name}</div>
//                         <div className="switcher">
//                             <div className="dough">
//                                 <div className="switch__dough">slim</div>
//                                 <div className="switch__dough">fat</div>
//                             </div>
//                             <div className="sm__block">

//                                 <input id="35" type="checkbox"/>
//                                 <label htmlFor="35">35cm</label>

//                                 <input id="40" type="checkbox"/>
//                                 <label htmlFor="40">40cm</label>

//                                 <input id="55" type="checkbox"/>
//                                 <label htmlFor="55">55cm</label>


//                                 {/* <div className="sm">35cm</div>
//                                 <div className="sm">45cm</div>
//                                 <div className="sm">55cm</div> */}
//                             </div>
//                         </div>
//                         <button className="btn">+Add</button>
//                     </div>)}
//                 </div>
//             </div>
//         )
//     }
// }

export default Pizzalist