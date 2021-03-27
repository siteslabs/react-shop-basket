import {
  CLEAR_CART,
  GET_TOTALS,
  REAMOVE_ITEM,
  RESET,
  TOGGLE_AMOUNT,
} from "../actions/cartActions"
import items from "../data"

const initialState = {
  items: items,
  totalAmount: 0,
  totalPrice: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, items: [] }

    case REAMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      }
    case RESET: {
      const newItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: 1 }
        }
        return item
      })
      return {
        ...state,
        items: newItems,
      }
    }

    case TOGGLE_AMOUNT: {
      const newItems = state.items
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === "increase") {
              return { ...item, amount: item.amount + 1 }
            }
            if (action.payload.type === "decrease") {
              return { ...item, amount: item.amount - 1 }
            }
          }
          return item
        })
        .filter((item) => item.amount !== 0)
      return {
        ...state,
        items: newItems,
      }
    }

    case GET_TOTALS: {
      let { TAmount, TPrice } = state.items.reduce(
        (total, item) => {
          const { amount, price } = item
          total.TAmount += amount
          total.TPrice += amount * price
          return total
        },
        {
          TAmount: 0,
          TPrice: 0,
        }
      )
      TAmount = parseFloat(TAmount.toFixed(2))

      return {
        ...state,
        totalAmount: TAmount,
        totalPrice: TPrice,
      }
    }

    default:
      return state
  }
}

export default reducer
