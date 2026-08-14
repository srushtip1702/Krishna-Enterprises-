import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Tag,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import "./sijo.css";


/* =====================================================
   SIJO PRODUCTS
===================================================== */

const sijoProducts = [

  {
    size: "18x16",
    displaySize: "18 × 16",
    price: 2252,
    image: "/products/kitchen-sinks/S/S 18x16.png",
  },

  {
    size: "20x17",
    displaySize: "20 × 17",
    price: 2460,
    image: "/products/kitchen-sinks/S/S 20x17.png",
  },

  {
    size: "21x18",
    displaySize: "21 × 18",
    price: 2580,
    image: "/products/kitchen-sinks/S/S 21x18.png",
  },

  {
    size: "22x18",
    displaySize: "22 × 18",
    price: 2856,
    image: "/products/kitchen-sinks/S/S 22x18.png",
  },

  {
    size: "24x18",
    displaySize: "24 × 18",
    price: 2964,
    image: "/products/kitchen-sinks/S/S 24x18.png",
  },

];


function Sijo() {

  const navigate = useNavigate();


  return (

    <div className="sijo-page">


      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="sijo-topbar">

        <div className="sijo-topbar-inner">

          <span>
            KRISHNA ENTERPRISES
          </span>

          <span>
            KITCHEN SINK COLLECTION
          </span>

        </div>

      </div>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sijo-header">


        <a
          href="/"
          className="sijo-back"
        >

          <ArrowLeft size={17} />

          Back to Website

        </a>


        <div className="sijo-brand">

          <img
            src="/logo.jpeg"
            alt="Krishna Enterprises"
          />

          <div>

            <strong>
              KRISHNA
            </strong>

            <span>
              ENTERPRISES
            </span>

          </div>

        </div>


        <a
          href="tel:9892778195"
          className="sijo-call"
        >

          Call Us

        </a>


      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="sijo-hero">

        <div className="sijo-hero-content">


          <div className="sijo-label">
            KITCHEN SINKS · SIJO
          </div>


          <h1>

            Sijo

            <br />

            <span>
              Sijo Collection.
            </span>

          </h1>


          <p>

            Explore the Sijo kitchen sink
            collection, featuring practical sizes,
            dependable construction and a 1 mm grade
            specification.

          </p>


          <div className="sijo-hero-stats">


            <div>

              <strong>
                {sijoProducts.length}
              </strong>

              <span>
                Available Sizes
              </span>

            </div>


            <div>

              <strong>
                1 mm
              </strong>

              <span>
                Grade
              </span>

            </div>


            <div>

              <strong>
                SS
              </strong>

              <span>
                Material
              </span>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="sijo-breadcrumb">


        <a href="/">
          Home
        </a>


        <ArrowRight size={14} />


        <button
          type="button"
          className="breadcrumb-link"
          onClick={() =>
            navigate("/kitchen-sinks")
          }
        >
          Kitchen Sinks
        </button>


        <ArrowRight size={14} />


        <strong>
          Sijo
        </strong>


      </div>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <main className="sijo-products-section">


        <div className="sijo-section-heading">


          <div>

            <div className="sijo-label">
              SIJO · 1 MM
            </div>


            <h2>

              Available

              <br />

              <span>
                Sizes.
              </span>

            </h2>

          </div>


          <p>

            Browse the currently available Sijo
            kitchen sinks. All listed products have a
            1 mm grade specification.

          </p>


        </div>


        <div className="sijo-product-grid">


          {sijoProducts.map(
            (product, index) => (


              <article
                className="sijo-product-card"
                key={product.size}
              >


                {/* =================================================
                    PRODUCT IMAGE
                ================================================= */}

                <div className="sijo-product-image">


                  <img

                    src={product.image}

                    alt={
                      `Sijo ${product.displaySize} Kitchen Sink`
                    }

                    onError={(event) => {

                      console.error(
                        "Image not found:",
                        product.image
                      );

                      event.currentTarget.style.opacity =
                        "0.25";

                    }}

                  />


                  <div className="sijo-product-number">

                    {String(index + 1).padStart(2, "0")}

                  </div>


                  <div className="sijo-brand-badge">

                    SIJO

                  </div>


                </div>


                {/* =================================================
                    PRODUCT INFORMATION
                ================================================= */}

                <div className="sijo-product-info">


                  <div className="sijo-product-category">

                    KITCHEN SINK

                  </div>


                  <h3>
                    Sijo
                  </h3>


                  <div className="sijo-details">


                    {/* SIZE */}

                    <div className="sijo-detail">

                      <Ruler size={16} />


                      <div>

                        <span>
                          SIZE
                        </span>


                        <strong>
                          {product.displaySize}
                        </strong>

                      </div>

                    </div>


                    {/* GRADE */}

                    <div className="sijo-detail">

                      <ShieldCheck size={16} />


                      <div>

                        <span>
                          GRADE
                        </span>


                        <strong>
                          1 mm
                        </strong>

                      </div>

                    </div>


                  </div>


                  {/* PRICE */}

                  <div className="sijo-price-row">


                    <div>

                      <span>
                        PRICE
                      </span>


                      <strong>
                        ₹{product.price.toLocaleString("en-IN")}
                      </strong>

                    </div>


                    <a

                      href={
                        `https://wa.me/919892778195?text=Hello%20Krishna%20Enterprises%2C%20I%20am%20interested%20in%20the%20Sijo%20${encodeURIComponent(product.displaySize)}%20kitchen%20sink.`
                      }

                      target="_blank"

                      rel="noopener noreferrer"

                      className="sijo-enquire"
                    >

                      <MessageCircle size={16} />

                      Enquire

                    </a>


                  </div>


                </div>


              </article>

            )
          )}


        </div>

      </main>


      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <section className="sijo-info-section">


        <div className="sijo-info-card">

          <Tag size={23} />


          <div>

            <strong>
              Product Pricing
            </strong>


            <p>

              Prices shown are based on the current
              product information provided by Krishna
              Enterprises. Please contact us to confirm
              current pricing and availability.

            </p>

          </div>

        </div>


        <div className="sijo-info-card">

          <ShieldCheck size={23} />


          <div>

            <strong>
              Product Specification
            </strong>


            <p>

              Sijo kitchen sinks listed here
              are specified as 1 mm grade according
              to the current product information.

            </p>

          </div>

        </div>


      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="sijo-contact">


        <div>

          <div className="sijo-label">
            NEED ASSISTANCE?
          </div>


          <h2>

            Looking for a

            <br />

            <span>
              different size?
            </span>

          </h2>


          <p>

            Contact Krishna Enterprises for product
            availability, additional sizes and
            enquiries.

          </p>

        </div>


        <div className="sijo-contact-buttons">


          <a
            href="tel:9892778195"
            className="sijo-contact-call"
          >

            Call Us

            <ArrowRight size={17} />

          </a>


          <a

            href="https://wa.me/919892778195?text=Hello%20Krishna%20Enterprises%2C%20I%20would%20like%20to%20know%20about%20your%20Sijo%20kitchen%20sink%20collection."

            target="_blank"

            rel="noopener noreferrer"

            className="sijo-contact-whatsapp"
          >

            <MessageCircle size={17} />

            WhatsApp

          </a>


        </div>


      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="sijo-footer">


        <div>

          <strong>
            KRISHNA ENTERPRISES
          </strong>

          <span>
            Sanitaryware · Bathroom Products · Wholesale
          </span>

        </div>


        <div>

          © {new Date().getFullYear()} Krishna Enterprises

        </div>


      </footer>


    </div>

  );

}


export default Sijo;