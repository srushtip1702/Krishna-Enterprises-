import { useNavigate } from "react-router-dom";
import "./SijoJindal.css";

const products = [
  {
    size: "14 × 16",
    image: "/products/kitchen-sinks/sijo-jindal/SJ%2014x16.jpeg",
    grade: "0.8 mm",
    price: "₹1,190",
  },
  {
    size: "15 × 12",
    image: "/products/kitchen-sinks/sijo-jindal/SJ%2015x12.jpeg",
    grade: "0.8 mm",
    price: "₹1,160",
  },
  {
    size: "18 × 16",
    image: "/products/kitchen-sinks/sijo-jindal/SJ%2018x16.jpeg",
    grade: "0.8 mm",
    price: "₹1,328",
  },
  {
    size: "19 × 16",
    image: "/products/kitchen-sinks/sijo-jindal/SJ%2019x16.jpeg",
    grade: "0.8 mm",
    price: "₹1,400",
  },
  {
    size: "20 × 17",
    image: "/products/kitchen-sinks/sijo-jindal/SJ%2020x17.jpeg",
    grade: "0.8 mm",
    price: "₹1,636",
  },
  {
    size: "21 × 18",
    image: "/products/kitchen-sinks/sijo-jindal/SJ%2021x18.jpeg",
    grade: "0.8 mm",
    price: "₹1,660",
  },
  {
    size: "22 × 18",
    image: "/products/kitchen-sinks/sijo-jindal/SJ%2022x18.jpeg",
    grade: "0.8 mm",
    price: "₹1,920",
  },
  {
    size: "24 × 18",
    image: "/products/kitchen-sinks/sijo-jindal/SJ%2024x18.jpeg",
    grade: "0.8 mm",
    price: "₹1,940",
  },
];

function SijoJindal() {

  const navigate = useNavigate();

  return (
    <div className="sijojindal-page">

      <div className="sijojindal-breadcrumb">

        <span onClick={() => navigate("/")}>
          Home
        </span>

        <span>→</span>

        <span onClick={() => navigate("/kitchen-sinks")}>
          Kitchen Sinks
        </span>

        <span>→</span>

        <strong>
          Sijo Jindal
        </strong>

      </div>


      <section className="sijojindal-header">

        <div className="sijojindal-label">
          KITCHEN SINKS · SJ
        </div>

        <h1>
          Sijo Jindal
        </h1>

        <p>
          Explore the available Sijo Jindal kitchen
          sink sizes and specifications.
        </p>

      </section>


      <section className="sijojindal-products">

        {products.map((product, index) => (

          <article
            className="sijojindal-product-card"
            key={product.size}
          >

            <div className="sijojindal-product-image">

              <img
                src={product.image}
                alt={`Sijo Jindal ${product.size} kitchen sink`}
              />

              <div className="sijojindal-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="sijojindal-tag">
                SIJO JINDAL
              </div>

            </div>


            <div className="sijojindal-product-info">

              <div className="sijojindal-product-label">
                SIJO JINDAL
              </div>

              <h2>
                Sijo Jindal
              </h2>


              <div className="sijojindal-specs">

                <div>
                  <span>SIZE</span>
                  <strong>{product.size}</strong>
                </div>

                <div>
                  <span>GRADE</span>
                  <strong>{product.grade}</strong>
                </div>

              </div>


              <div className="sijojindal-price-row">

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

export default SijoJindal;