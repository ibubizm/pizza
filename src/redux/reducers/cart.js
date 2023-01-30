const initialState = {
  items: {},
  count: 0,
  price: 0,
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_OBJ_TO_CART': {
      const objName =
        action.payload.id + '_' + action.payload.size + action.payload.dough
      console.log(objName)
      //   const newItems = {
      //     ...state.items,
      //     [action.payload.id]: !state.items[action.payload.id]
      //       ? [action.payload]
      //       : [...state.items[action.payload.id], action.payload],
      //   }

      // const newItems = {
      //   ...state.items,
      //   [objName]: !state.items[objName]
      //     ? [action.payload]
      //     : [...state.items[objName], action.payload],
      // }

      const newItems = {
        ...state.items,
        [objName]: !state.items[objName]
          ? { ...action.payload, count: 1 }
          : {
              ...state.items[objName],
              count: state.items[objName].count + 1,
            },
      }

      const allObjInCart = [].concat.apply([], Object.values(newItems))
      const price = allObjInCart.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      )
      const count = allObjInCart.reduce((sum, obj) => obj.count + sum, 0)

      return {
        ...state,
        items: newItems,
        count,
        // count: [].concat.apply([], Object.values(newItems)).length,
        price,
      }
    }

    // case 'ADD_PRODUCT':
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //   }

    case 'REMOVE_PRODUCT':
      const objName =
        action.payload.id + '_' + action.payload.size + action.payload.dough
      const newItems = {
        ...state.items,
        [objName]: !state.items[objName]
          ? { ...action.payload, count: 1 }
          : {
              ...state.items[objName],
              count: state.items[objName].count - 1,
            },
      }

      const allObjInCartTest = [].concat.apply([], Object.values(newItems))
      const priceNew = allObjInCartTest.reduce(
        (sum, obj) => obj.price * obj.count + sum,
        0
      )

      return {
        ...state,
        items: newItems,
        count: [].concat.apply([], Object.values(newItems)).length,
        price: priceNew,
      }
    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        price: action.payload,
      }

    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        count: action.payload,
      }

    case 'CLEAN_CART':
      return {
        items: {},
        count: 0,
        price: 0,
      }

    case 'DEL_FROM_CART':
      console.log(action.payload)
      const allObjInCart = [].concat.apply([], Object.values(action.payload))
      const price = allObjInCart.reduce((sum, obj) => obj.price + sum, 0)
      const count = allObjInCart.reduce((sum, obj) => obj.count + sum, 0)

      return {
        ...state,
        items: action.payload,
        count,
        price,
      }

    default:
      return state
  }
}

export default cart
