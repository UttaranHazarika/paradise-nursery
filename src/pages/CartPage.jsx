import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";
import "../index.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4 text-center">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="row mb-3 align-items-center shadow-sm p-3"
            >
              <div className="col-2">
                <img src={item.image} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-3 fw-bold">{item.name}</div>
              <div className="col-2 text-success fw-bold">${item.price}</div>
              <div className="col-3">
                <button
                  className="btn btn-secondary btn-sm me-2"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity - 1,
                      })
                    )
                  }
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="btn btn-secondary btn-sm mx-2"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <h4 className="fw-bold text-center mt-4">
            Total Cart Amount: ${totalCost}
          </h4>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-success me-2">Checkout</button>
            <a href="/products" className="btn btn-outline-primary">
              Continue Shopping
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
