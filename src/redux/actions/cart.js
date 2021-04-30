export const setPrice = (price) =>({
    type: 'SET_TOTAL_PRICE',
    payload: price
})

export const addObjToCart = (obj) =>({
    type: 'ADD_OBJ_TO_CART',
    payload: obj
})

export const cleanCart = () =>({
    type: 'CLEAN_CART',
})

export const delFromCart = (obj) =>({
    type: 'DEL_FROM_CART',
    payload: obj
})