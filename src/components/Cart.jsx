import React, { useEffect } from "react"
import SingleCart from "./SingleCart"
import { connect } from "react-redux"
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup"

import {
  clearCart,
  getTotals,
  removeItem,
  reset,
  toggleAmount,
} from "../actions/cartActions"

const Cart = ({
  items,
  clear,
  removeItem,
  toggleAmount,
  totalPrice,
  totals,
  reset,
}) => {
  useEffect(() => {
    totals()
  }, [items])
  return (
    <>
      <div className="cart">
        <div className="cart__title">your bag</div>
        <div className="cart__container">
          <CSSTransitionGroup
            transitionName="cart"
            transitionLeaveTimeout={500}
            transitionEnterTimeout={300}
          >
            {items.length > 0 &&
              items.map((item) => (
                <SingleCart
                  toggleAmount={toggleAmount}
                  key={item.id}
                  item={item}
                  removeItem={removeItem}
                  reset={reset}
                />
              ))}
          </CSSTransitionGroup>
        </div>
        <div className="cart__footer">
          <div className="text">Total:</div>
          <span className="total-price">{totalPrice.toFixed(2)}$</span>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={clear} className="clear-btn">
          clear
        </button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  items: state.items,
  totalPrice: state.totalPrice,
})
const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch(clearCart()),
  removeItem: (id) => dispatch(removeItem(id)),
  toggleAmount: (type, id) => dispatch(toggleAmount(type, id)),
  totals: () => dispatch(getTotals()),
  reset: (id) => dispatch(reset(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
