import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import "../index.css";

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();

  return (
    <div className="card product-card shadow-sm" style={{ width: "18rem" }}>
      <img src={plant.image} className="card-img-top" alt={plant.name} />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{plant.name}</h5>
        <p className="card-text text-success fw-bold">${plant.price}</p>
        <button
          className="btn btn-outline-success"
          onClick={() => dispatch(addToCart(plant))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
