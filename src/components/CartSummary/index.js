import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button className="check-out-btn small-device" type="button">
              Checkout
            </button>
          </div>
          <button className="check-out-btn large-device" type="button">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
