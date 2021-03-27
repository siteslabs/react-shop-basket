export const CLEAR_CART = "CLEAR_CART"
export const REAMOVE_ITEM = "REAMOVE_ITEM"
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT"
export const GET_TOTALS = "GET_TOTALS"
export const RESET = "RESET"

export const clearCart = () => ({ type: CLEAR_CART })
export const removeItem = (id) => ({ type: REAMOVE_ITEM, payload: { id } })
export const toggleAmount = (type, id) => ({
  type: TOGGLE_AMOUNT,
  payload: { type, id },
})
export const getTotals = () => ({ type: GET_TOTALS })
export const reset = (id) => ({ type: RESET, payload: { id } })
