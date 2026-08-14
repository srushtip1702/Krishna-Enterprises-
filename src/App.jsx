import {
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Menu,
  X,
  Droplets,
  ShowerHead,
  Bath,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* =====================================================
     PRODUCT CATEGORIES
  ===================================================== */
  const categories = [
    {
      title: "Wash Basins",
      description: "Elegant and modern basin solutions",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
      icon: <Bath size={21} />,
    },
    {
      title: "Taps",
      description: "Modern fittings for every bathroom",
      image:
        "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1000&q=85",
      icon: <Droplets size={21} />,
    },
    {
      title: "Showers",
      description: "Complete shower and bathing solutions",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
      icon: <ShowerHead size={21} />,
    },
    {
      title: "Kitchen Sinks",
      description: "Practical and stylish kitchen sink solutions",
      image: "/products/kitchen-sink.jpg",
      icon: <Waves size={21} />,
    },
  ];

  /* =====================================================
     FEATURED PRODUCTS
  ===================================================== */
  const products = [
    {
      name: "Premium Basin Collection",
      category: "Wash Basins",
      image:
        "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Modern Tap Collection",
      category: "Taps & Faucets",
      image:
        "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Modern Shower Collection",
      category: "Showers",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
    },
    {
      name: "Kitchen Sink Collection",
      category: "Kitchen Sinks",
      image: "/products/kitchen-sink.jpg",
    },
  ];

  return (
    <div className="site">
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="brand">
            <div className="logo-container">
              <img
                src="/logo.jpeg"
                alt="Krishna Enterprises"
                className="company-logo"
                onError={(event) => {
                  event.currentTarget.style.display = "none";

                  if (event.currentTarget.nextElementSibling) {
                    event.currentTarget.nextElementSibling.style.display =
                      "grid";
                  }
                }}
              />

              <div className="temporary-logo">KE</div>
            </div>

            <div className="brand-text">
              <div className="brand-name">KRISHNA</div>
              <div className="brand-subtitle">ENTERPRISES</div>
            </div>
          </a>

          <nav
            className={
              menuOpen ? "nav-links mobile-open" : "nav-links"
            }
          >
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#categories"
              onClick={() => setMenuOpen(false)}
            >
              Categories
            </a>

            <a
              href="#products"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <a
              href="tel:9892778195"
              className="nav-contact"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={16} />
              Call Us
            </a>
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <main>
        <section id="home" className="hero">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-tag">
              · BATHROOM FITTINGS · WHOLESALE
            </div>

            <h1>
              Elevated Spaces.
              <br />
              <span>Quality in Every Detail.</span>
            </h1>

            <p className="hero-description">
              From elegant basins and modern faucets to sanitaryware,
              showers, kitchen sinks and bathroom essentials —
              Krishna Enterprises brings quality products and
              dependable wholesale supply together under one roof.
            </p>

            <div className="hero-buttons">
              <a
                href="#categories"
                className="btn-primary"
              >
                Explore Collection
                <ArrowRight size={18} />
              </a>

              <a
                href="https://wa.me/919892778195?text=Hello%20Krishna%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={17} />
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-location">
              <MapPin size={16} />
              Sakinaka, Mumbai
            </div>

            <div className="hero-scroll">
              SCROLL TO EXPLORE
              <span></span>
            </div>
          </div>
        </section>

        {/* =====================================================
            TRUST BAR
        ===================================================== */}
        <section className="trust-bar">
          <div className="trust-item">
            <ShieldCheck size={23} />

            <div>
              <strong>Quality Products</strong>
              <span>Selected for reliability</span>
            </div>
          </div>

          <div className="trust-item">
            <Sparkles size={23} />

            <div>
              <strong>Modern Designs</strong>
              <span>Contemporary bathroom solutions</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            CATEGORIES
        ===================================================== */}
        <section
          id="categories"
          className="categories-section"
        >
          <div className="section-top">
            <div>
              <div className="section-label">
                OUR COLLECTION
              </div>

              <h2>
                Everything Your
                <br />
                <span>Space Needs.</span>
              </h2>
            </div>

            <p>
              Explore our range of bathroom and kitchen
              products designed for homes, projects,
              retailers and businesses.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <article
                className="category-card"
                key={index}
                onClick={() => {
                  if (
                    category.title === "Kitchen Sinks"
                  ) {
                    window.location.href =
                      "/kitchen-sinks";
                  }
                }}
                style={{
                  cursor:
                    category.title === "Kitchen Sinks"
                      ? "pointer"
                      : "default",
                }}
              >
                <div className="category-image">
                  <img
                    src={category.image}
                    alt={category.title}
                    onError={(event) => {
                      console.log(
                        "Image not found:",
                        category.image
                      );
                    }}
                  />

                  <div className="category-number">
                    0{index + 1}
                  </div>
                </div>

                <div className="category-content">
                  <div className="category-icon">
                    {category.icon}
                  </div>

                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>

                  <ArrowRight
                    className="category-arrow"
                    size={18}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            FEATURED PRODUCTS
        ===================================================== */}
        <section
          id="products"
          className="products-section"
        >
          <div className="section-top">
            <div>
              <div className="section-label">
                FEATURED PRODUCTS
              </div>

              <h2>
                Quality That
                <br />
                <span>Speaks for Itself.</span>
              </h2>
            </div>

            <p>
              Explore a selection from our product range.
              Our complete catalogue will include product
              photos, specifications and pricing.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article
                className="product-card"
                key={index}
              >
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <div className="product-badge">
                    WHOLESALE
                  </div>
                </div>

                <div className="product-details">
                  <div className="product-category">
                    {product.category}
                  </div>

                  <h3>{product.name}</h3>

                  <div className="product-bottom">
                    <span>
                      Contact for pricing
                    </span>

                    <a
                      href="https://wa.me/919892778195?text=Hello%20Krishna%20Enterprises%2C%20I%20am%20interested%20in%20your%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="catalogue-button">
            <a
              href="https://wa.me/919892778195?text=Hello%20Krishna%20Enterprises%2C%20please%20share%20your%20complete%20product%20catalogue."
              target="_blank"
              rel="noopener noreferrer"
              className="dark-button"
            >
              Request Complete Catalogue
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}
        <section
          id="about"
          className="about-section"
        >
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
              alt="Modern bathroom"
            />

            <div className="about-image-card">
              <span>KRISHNA</span>
              <strong>ENTERPRISES</strong>
              <small>
                SAKINAKA · MUMBAI
              </small>
            </div>
          </div>

          <div className="about-content">
            <div className="section-label">
              ABOUT US
            </div>

            <h2>
              Your Trusted
              <br />
              <span>Product Partner.</span>
            </h2>

            <p>
              Krishna Enterprises is a wholesale supplier
              of bathroom and sanitaryware products based
              in Sakinaka, Mumbai.
            </p>

            <p>
              From everyday bathroom essentials to modern
              fittings, sanitaryware and kitchen solutions,
              we aim to provide quality products at
              competitive wholesale rates.
            </p>

            <p>
              Our focus is simple — dependable products,
              professional service and long-term business
              relationships.
            </p>

            <div className="about-points">
              <div>
                <span>01</span>
                <strong>Quality Focused</strong>
              </div>

              <div>
                <span>02</span>
                <strong>
                  Competitive Pricing
                </strong>
              </div>

              <div>
                <span>03</span>
                <strong>Reliable Service</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}
        <section
          id="contact"
          className="contact-section"
        >
          <div className="contact-intro">
            <div className="section-label">
              GET IN TOUCH
            </div>

            <h2>
              Let's Build
              <br />
              <span>Business Together.</span>
            </h2>

            <p>
              Looking for bathroom or kitchen products
              in bulk? Contact Krishna Enterprises for
              product availability, wholesale rates and
              enquiries.
            </p>
          </div>

          <div className="contact-area">
            <a
              href="tel:9892778195"
              className="contact-box"
            >
              <Phone size={23} />

              <div>
                <span>Ramdhata Tiwari</span>
                <strong>9892778195</strong>
              </div>
            </a>

            <a
              href="tel:9322533550"
              className="contact-box"
            >
              <Phone size={23} />

              <div>
                <span>Umesh Awasthi</span>
                <strong>9322533550</strong>
              </div>
            </a>

            <a
              href="tel:8355874251"
              className="contact-box"
            >
              <Phone size={23} />

              <div>
                <span>Krishna Tiwari</span>
                <strong>8355874251</strong>
              </div>
            </a>

            <a
              href="https://wa.me/919892778195?text=Hello%20Krishna%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-box whatsapp-box"
            >
              <MessageCircle size={23} />

              <div>
                <span>QUICK ENQUIRY</span>
                <strong>
                  Chat on WhatsApp
                </strong>
              </div>
            </a>
          </div>

          <div className="address-box">
            <MapPin size={25} />

            <div>
              <span>VISIT OUR LOCATION</span>

              <strong>
                PVK Compound, Gala No. 04, Opposite Lucky
                Hotel, Kherani Road, Sakinaka, Mumbai –
                400072
              </strong>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              KE
            </div>

            <div>
              <strong>
                KRISHNA ENTERPRISES
              </strong>

              <span>
                Sanitaryware · Bathroom Products ·
                Wholesale
              </span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Krishna
            Enterprises
          </div>
        </div>
      </footer>

      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}
      <a
        href="https://wa.me/919892778195?text=Hello%20Krishna%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="WhatsApp Krishna Enterprises"
      >
        <MessageCircle size={23} />
      </a>
    </div>
  );
}

export default App;