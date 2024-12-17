import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success px-3 text-white">
      <Link className="navbar-brand text-white fw-bold" to="/">
        Paradise Nursery
      </Link>
      <div className="ms-auto">
        <Link className="mx-2 text-white text-decoration-none" to="/products">
          Products
        </Link>
        <Link className="mx-2 text-white text-decoration-none" to="/cart">
          Cart ({totalItems})
        </Link>
      </div>
    </nav>
  );
};

export default Header;
