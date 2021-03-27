import React from "react"

const SingleCart = ({ item, removeItem, toggleAmount, reset }) => {
  const { id, title, img, amount, price } = item
  return (
    <>
      <article>
        <img src={img} alt={title} />
        <div className="info">
          <div className="name">{title}</div>
          <div className="price-info">
            <div>
              <div className="text">Quantity</div>
              <div className="quantity">
                <button onClick={() => toggleAmount("decrease", id)}>-</button>
                <button onClick={() => reset(id)}>{amount}</button>
                <button onClick={() => toggleAmount("increase", id)}>+</button>
              </div>
            </div>
            <div>
              <div className="text">Price</div>
              <p className="price">{price.toFixed(2)}$</p>
            </div>
          </div>
        </div>
        <div className="times-container">
          <button onClick={() => removeItem(id)} className="times-btn">
            &times;
          </button>
        </div>
      </article>
    </>
  )
}

export default SingleCart
