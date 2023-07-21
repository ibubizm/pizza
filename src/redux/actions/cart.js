export const setPrice = (price) => ({
  type: 'SET_TOTAL_PRICE',
  payload: price,
})

export const addObjToCart = (obj) => ({
  type: 'ADD_OBJ_TO_CART',
  payload: obj,
})

export const cleanCart = () => ({
  type: 'CLEAN_CART',
})

export const delFromCart = (obj) => ({
  type: 'DEL_FROM_CART',
  payload: obj,
})

export const inclementItem = (obj) => ({
  type: 'ADD_PRODUCT',
  payload: obj,
})

export const decrementItem = (obj) => ({
  type: 'REMOVE_PRODUCT',
  payload: obj,
})

export const savedProduct = (obj) => ({
  type: 'SAVED_PRODUCT',
  payload: obj,
})
