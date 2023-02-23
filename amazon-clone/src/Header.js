import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider"; 

function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello!</span>
          <span className="header_optionLineTwo">Login</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Back</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Likes</span>
          <span className="header_optionLineTwo">Subscribe</span>
        </div>
        <Link to="/cart">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwoheader_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
