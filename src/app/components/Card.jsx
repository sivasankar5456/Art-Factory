import React, { useState } from "react";
import threeDots from "../../assets/svg/vertical_dots.png";
import blcakHeartIcon from "../../assets/svg/heart-1.svg";
import redHeartIcon from "../../assets/svg/red-heart.png";
import whiteHeartIcon from "../../assets/svg/heart-2.svg";
import commentIcon from "../../assets/svg/comment-1.svg";
import shareIcon from "../../assets/svg/share.svg";

const Card = ({ item }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const favIcon1 = !isFavourite ? (
    <img
      src={whiteHeartIcon}
      alt="whiteHeartIcon"
      className="like-logo"
      onClick={handleFavourite}
    />
  ) : (
    <img
      src={redHeartIcon}
      alt="redHeartIcon"
      className="like-logo"
      onClick={handleFavourite}
    />
  );
  const favIcon2 = !isFavourite ? (
    <img
      src={blcakHeartIcon}
      alt="blackHeartIcon"
      className="reactionIcon"
      onClick={handleFavourite}
    />
  ) : (
    <img
      src={redHeartIcon}
      alt="redHeartIcon"
      className="red-heart"
      onClick={handleFavourite}
    />
  );

  return (
    <div className="card">
      <div className="card-post">
        <div className="card-header">
          <div className="card-header-image-text-contianer">
            <img
              src={item.userImage}
              alt="profile1"
              className="profile-image"
            />
            <div className="card-header-text-container">
              <h3>{item.userName}</h3>
              <span>{item.userText}</span>
            </div>
          </div>

          <img src={threeDots} alt="threeDots" />
        </div>
        <p className="post-text">
          {item.description}{" "}
          <button className="readmore-btn">Read More.</button>
        </p>
        <div className="post-image-container">
          <img src={item.postImage} alt="" className="post-image" />
          {favIcon1}
        </div>
      </div>
      <div className="post-reactions-container">
        <div className="post-reactions-wrapper">
          {favIcon2}
          <label htmlFor="">{item.likes}</label>
          <img
            src={commentIcon}
            alt="commentIcon"
            className="reactionIcon"
          />{" "}
          <label htmlFor="">{item.comments}</label>
          <img src={shareIcon} alt="shareIcon" className="reactionIcon" />{" "}
          <label htmlFor="">{item.shares}</label>
        </div>
      </div>
    </div>
  );
};

export default Card;
