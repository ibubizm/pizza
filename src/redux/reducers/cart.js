
const initialState = {
    item: {},
    count: 0
}

const cart = (state = initialState, action) =>{
    if(action.type === 'TEST'){
        return{
            ...state,
            item: action.payload
            
        }
    }
    return state
}

export default cart