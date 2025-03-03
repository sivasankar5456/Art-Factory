import { Link } from "react-router-dom";
import productImage1 from "../../assets/images/Image_40@2x.png";
import productImage2 from "../../assets/images/Image_39@2x.png";
import productImage3 from "../../assets/images/pexels-max-vakhtbovych-6782342@2x.png";
import productImage4 from "../../assets/images/pexels-pixabay-164455@2x.png";
import img1 from "../../assets/images/pexels-humphrey-muleba-2045248@2x.png";
import img2 from "../../assets/images/pexels-tobias-bjørkli-2236382@2x.png";
import artGallery from "../../assets/images/art-gallerypng.png";

export function LandingPage() {
  return (
    <div className="landing-container">
      <header className="header">
        <div style={{display:'flex', alignItems:'center'}} >
          <img src={artGallery} alt="" />
        <h1>Art Gallery</h1>
        </div>
        <nav>
          <Link to="/login" className="nav-button">
            Login
          </Link>
          <Link to="/signup" className="nav-button">
            Sign Up
          </Link>
        </nav>
      </header>
      <section className="hero">
        <h2>Discover & Buy Beautiful Artworks</h2>
        <p>
          Explore a collection of stunning paintings from talented artists
          worldwide.
        </p>
        <Link to="/signup" className="cta-button">
          Get Started
        </Link>
      </section>
      <section className="gallery">
        <img src={productImage1} alt="Beautiful Art 1" />
        <img src={productImage3} alt="Beautiful Art 3" />
        <img src={productImage4} alt="Beautiful Art 4" />
        <img src={productImage2} alt="Beautiful Art 2" />
      </section>
      <section style={{ margin: "20px" }}>
        <img
          src={img2}
          alt=""
          className="post-image"
          style={{ marginBottom: "20px" }}
        />
        <img
          src={img1}
          alt=""
          className="post-image"
          style={{ marginBottom: "20px" }}
        />
      </section>
    </div>
  );
}
