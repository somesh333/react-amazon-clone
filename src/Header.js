import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import  ShoppingBasketIcon  from "@material-ui/icons/ShoppingBasket";
import {Link } from  "react-router-dom";


function Header() {
  return (
    <div className="header">
    <Link to="/">
    <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
    </Link>
     
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className=" header__nav">
        <div className="header__option">
          <span className="header__optionLineOne"> hello guest</span>
          <span className="header__optionLineTwo"> Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne"> Return </span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne"> Your</span>
          <span className="header__optionLineTwo"> prime</span>
        </div>
       
<Link to="/checkout">
<div className="header__optionBasket">
            <ShoppingBasketIcon />
<sup className="header__optionLineTwo header__basketCount">0</sup>
        </div>
</Link>
      </div>
    </div>
  );
}
export default Header;