import ProductCard from "../components/ProductCard";
import "../index.css";

const plants = [
  { id: 1, name: "Snake Plant", price: 15, image: "/assets/snake.jpg" },
  { id: 2, name: "Spider Plant", price: 12, image: "/assets/spider.jpg" },
  { id: 3, name: "Peace Lily", price: 18, image: "/assets/lily.jpg" },
  { id: 4, name: "Boston Fern", price: 15, image: "/assets/fern.jpg" },
  { id: 5, name: "Rubber Plant", price: 20, image: "/assets/rubber.jpg" },
  { id: 6, name: "Aloe Vera", price: 10, image: "/assets/aloe.jpg" },
];

const ProductPage = () => (
  <div className="container mt-4">
    <h2 className="text-center mb-4 fw-bold">Air Purifying Plants</h2>
    <div className="row">
      {plants.map((plant) => (
        <div key={plant.id} className="col-md-4 mb-4">
          <ProductCard plant={plant} />
        </div>
      ))}
    </div>
  </div>
);

export default ProductPage;
