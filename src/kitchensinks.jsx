import { useNavigate } from "react-router-dom";
import "./KitchenSinks.css";

function KitchenSinks() {
  const navigate = useNavigate();

  return (
    <div className="kitchen-sinks-page">

      <section className="kitchen-sinks-header">

        <div className="ks-label">
          KITCHEN SINKS
        </div>

        <h1>
          Our Sink <span>Collections.</span>
        </h1>

        <p>
          Explore our Sijo Jindal and Sijo kitchen
          sink collections.
        </p>

      </section>

      <section className="sink-brand-grid">

        {/* SIJO JINDAL */}

        <article
          className="sink-brand-card"
          onClick={() => navigate("/kitchen-sinks/sj")}
        >

          <div className="sink-brand-image">

            <img
              src="/products/kitchen-sinks/sijo-jindal/SJ%2014x16.jpeg"
              alt="Sijo Jindal Kitchen Sink"
            />

            <div className="sink-brand-code">
              SJ
            </div>

          </div>

          <div className="sink-brand-content">

            <div className="ks-small-label">
              SJ
            </div>

            <h2>
              Sijo Jindal
            </h2>

            <p>
              Explore the Sijo Jindal kitchen sink
              collection with multiple sizes and
              specifications.
            </p>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                navigate("/kitchen-sinks/sj");
              }}
            >
              View Products <span>→</span>
            </button>

          </div>

        </article>

        {/* SIJO */}

        <article
          className="sink-brand-card"
          onClick={() => navigate("/kitchen-sinks/s")}
        >

          <div className="sink-brand-image">

            <img
              src="/products/kitchen-sinks/sijo/S%2018x16.png"
              alt="Sijo Kitchen Sink"
            />

            <div className="sink-brand-code">
              S
            </div>

          </div>

          <div className="sink-brand-content">

            <div className="ks-small-label">
              S
            </div>

            <h2>
              Sijo
            </h2>

            <p>
              Explore the Sijo kitchen sink collection
              with its available sizes and
              specifications.
            </p>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                navigate("/kitchen-sinks/s");
              }}
            >
              View Products <span>→</span>
            </button>

          </div>

        </article>

      </section>

    </div>
  );
}

export default KitchenSinks;