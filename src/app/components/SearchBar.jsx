import React from "react";
import filterIcon from "../../assets/svg/Component _39.svg";
import searchIcon from "../../assets/svg/Component_32.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-wrapper">
        <img src={searchIcon} alt="searchIcon" className="searchIcon" />
        <input type="text" className="search" placeholder="Search here" />
      </div>
      <div className="search-filter-contianer">
        <img src={filterIcon} alt="filterIcon" className="filterIcon" />
        <span>Filters</span>
      </div>
    </div>
  );
};

export default SearchBar;
