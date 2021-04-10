const initialState = {
    items: [],
    isLoaded : false
}

// const pizzas = (state = initialState, action) =>{
//     if(action.type === 'SET_PIZZAS'){
//         return{
//             ...state,
//             items: action.payload,
//             isLoaded : true
//         }
//     }
//     if(action.type === 'SET_LOADING'){
//         return{
//             ...state,
//             isLoaded : action.payload,

//         }
//     }
//     return state
// }
const pizzas = (state = initialState, action) =>{
    switch(action.type){
        case 'SET_PIZZAS':
            return{
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case 'SET_LOADING':
            return{
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }

}



export default pizzas