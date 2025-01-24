import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handelclearCart = () => {
    dispatch(clearCart());
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="menu-container">
        <h1 className="restaurant-info">Your cart is empty!</h1>
      </div>
    );
  }

  return (
    <div className="menu-container">
      <div className="restaurant-info">
        <h1>Your Cart</h1>
        <p>Review your items below.</p>
      </div>
      <button className="button-52" onClick={handelclearCart}>
        clear cart
      </button>

      <div className="menu-items">
        {cartItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
