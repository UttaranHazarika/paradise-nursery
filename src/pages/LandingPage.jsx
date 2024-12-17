import { Link } from "react-router-dom";
import "../index.css";

const LandingPage = () => (
  <div
    className="d-flex flex-column align-items-start justify-content-center px-5"
    style={{
      height: "100vh",
      backgroundImage: "url(/background.jpg)",
      backgroundSize: "cover",
    }}
  >
    <h1 className="text-white display-4 fw-bold">
      Welcome To <br /> Paradise Nursery
    </h1>
    <p className="text-white fs-5 mb-4">Where Green Meets Serenity</p>
    <Link to="/products" className="btn btn-success btn-lg">
      Get Started
    </Link>
  </div>
);

export default LandingPage;
