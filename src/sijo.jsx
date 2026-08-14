import { useNavigate } from "react-router-dom";
import "./Sijo.css";

const products = [
  {
    size: "18 × 16",
    image: "/products/kitchen-sinks/sijo/S%2018x16.png",
    grade: "1 mm",
    price: "₹2,252",
  },
  {
    size: "20 × 17",
    image: "/products/kitchen-sinks/sijo/S%2020x17.png",
    grade: "1 mm",
    price: "₹2,460",
  },
  {
    size: "21 × 18",
    image: "/products/kitchen-sinks/sijo/S%2021x18.png",
    grade: "1 mm",
    price: "₹2,580",
  },
  {
    size: "22 × 18",
    image: "/products/kitchen-sinks/sijo/S%2022x18.png",
    grade: "1 mm",
    price: "₹2,856",
  },
  {
    size: "24 × 18",
    image: "/products/kitchen-sinks/sijo/S%2024x18.png",
    grade: "1 mm",
    price: "₹2,964",
  },
];

function Sijo() {

  const navigate = useNavigate();

  return (
    <div className="sijo-page">

      <div className="sijo-breadcrumb">

        <span onClick={() => navigate("/")}>
          Home
        </span>

        <span>→</span>

        <span onClick={() => navigate("/kitchen-sinks")}>
          Kitchen Sinks
        </span>

        <span>→</span>

        <strong>
          Sijo
        </strong>

      </div>


      <section className="sijo-header">

        <div className="sijo-label">
          KITCHEN SINKS · S
        </div>

        <h1>
          Sijo
        </h1>

        <p>
          Explore the available Sijo kitchen sink
          sizes and specifications.
        </p>

      </section>


      <section className="sijo-products">

        {products.map((product, index) => (

          <article
            className="sijo-product-card"
            key={product.size}
          >

            <div className="sijo-product-image">

              <img
                src={product.image}
                alt={`Sijo ${product.size} kitchen sink`}
              />

              <div className="sijo-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="sijo-tag">
                SIJO
              </div>

            </div>


            <div className="sijo-product-info">

              <div className="sijo-product-label">
                SIJO
              </div>

              <h2>
                Sijo
              </h2>


              <div className="sijo-specs">

                <div>
                  <span>SIZE</span>
                  <strong>{product.size}</strong>
                </div>

                <div>
                  <span>GRADE</span>
                  <strong>{product.grade}</strong>
                </div>

              </div>


              <div className="sijo-price-row">

                <div>
                  <span>PRICE</span>
                  <strong>{product.price}</strong>
                </div>

                <button type="button">
                  Enquire
                </button>

              </div>

            </div>

          </article>

        ))}

      </section>

    </div>
  );
}

export default Sijo;