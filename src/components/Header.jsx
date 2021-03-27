import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

const Header = ({ totalAmount, items }) => {
  const [animate, setAnimate] = useState(false)
  const onclickHandler = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    setAnimate(true)
    const anim = setTimeout(() => {
      setAnimate(false)
    }, 800)
    return () => clearTimeout(anim)
  }, [items.length])
  return (
    <div className="header">
      <div className="inner__header">
        <div className="logo-container">
          <h1>
            mobile<span>shop</span>
          </h1>
        </div>

        <ul className="navigator">
          <li>
            <a onClick={onclickHandler} href="">
              Home
            </a>
          </li>
          <li>
            <a onClick={onclickHandler} href="">
              About
            </a>
          </li>
          <li>
            <a onClick={onclickHandler} href="">
              Services
            </a>
          </li>
          <li>
            <a onClick={onclickHandler} href="">
              <img
                src="./img/shopping-bag.png"
                alt="shopping-bag"
                className={`shopping-bag ${
                  animate && "animate__animated animate__bounce"
                }`}
              />
              <div className="total-count">{totalAmount}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  totalAmount: state.totalAmount,
  items: state.items,
})

export default connect(mapStateToProps)(Header)
