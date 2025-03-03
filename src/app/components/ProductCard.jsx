import React from "react";
import ratingIcon from "../../assets/svg/star.svg";

const ProductCard = ({ item }) => {
  const ratingArray = Array.from(
    { length: item?.ProductRating },
    (_, i) => i + 1
  );
  return (
    <div className="product-card">
      <img src={item.productImage} alt="" className="product-image" />
      <div>
        <p>{item.productText}</p>
      </div>
      <div className="prize-rating-contiainer">
        <span>${item.ProductPrice}</span>
        <div>
          {ratingArray?.map((rating, index) => {
            return (
              <img
                src={ratingIcon}
                alt=""
                className="rating-star"
                key={rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
