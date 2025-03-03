import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import ArtistCard from "../components/ArtistCard";
import Sidebar from "../components/SideBar";
import ProductCard from "../components/ProductCard";
import { cardData, artistData, productData } from "../utils/data";
import { useState } from "react";

const Dashboard = () => {
  const [isArtist, setIsArtist] = useState("Artist");

  const handleIsArtist = (val) => {
    setIsArtist(val);
  };

  return (
    <section style={{ margin: "10px", backgroundColor: "#f5f5f5" }}>
      <header className="dashboard-header">
        <div className="logo">
          <span>LOGO</span>
        </div>
        <SearchBar />
        <button className="seller-btn">Become a Seller</button>
      </header>
      <section className="dashboard-content">
        <Sidebar />

        <div className="card-container">
        <div className="card-wrapper">
          {cardData?.map((item, i) => {
            return <Card item={item} key={i} />;
          })}
            </div>
          <div className="product-card-contianer">
          <div className="product-card-wrapper">
            {productData?.map((item, i) => {
              return <ProductCard item={item} key={i} />;
            })}
          </div>
          </div>
        </div>
        <div className="artist-container">
          <div className="toggle-div">
            <button
              onClick={() => handleIsArtist("Artist")}
              className={
                isArtist === "Artist" ? "artist-active" : "artist-inactive"
              }
            >
              Artist
            </button>
            <button
              onClick={() => handleIsArtist("Photographers")}
              className={
                isArtist === "Photographers"
                  ? "artist-active"
                  : "artist-inactive"
              }
            >
              Photographers
            </button>
          </div>
          {artistData?.map((item, i) => {
            return <ArtistCard item={item} key={i} />;
          })}
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
