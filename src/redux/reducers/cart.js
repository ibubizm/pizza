
const initialState = {
    items: {},
    count: 0,
    price: 0,
}

const cart = (state = initialState, action) =>{
    switch (action.type){

        case 'ADD_OBJ_TO_CART':{
            console.log(action.payload)
            const newItems = {
                ...state.items,
                [action.payload.id] : 
                    !state.items[action.payload.id] 
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload] 
                }
            
            const allObjInCart = [].concat.apply([], Object.values(newItems))
            const price = allObjInCart.reduce((sum, obj) => obj.price + sum, 0)

            return{
                ...state,
                items: newItems,
                count: [].concat.apply([], Object.values(newItems)).length,
                price
            }}
        case 'SET_TOTAL_PRICE':
            return{
                ...state,
                price: action.payload
            }

        case 'SET_TOTAL_COUNT':
            return{
                ...state,
                count: action.payload
            }

        case 'CLEAN_CART' :
            return{
                items: {},
                count: 0,
                price: 0
            }
            
        case 'DEL_FROM_CART':
            const allObjInCart = [].concat.apply([], Object.values(action.payload))
            const price = allObjInCart.reduce((sum, obj) => obj.price + sum, 0)
            
            return{
                ...state,
                items: action.payload,
                count: allObjInCart.length,
                price

            }
        
        default:
            return state
    }
    
}



export default cart