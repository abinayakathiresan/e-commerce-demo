import React from "react";
import {Link, NavLink } from 'react-router-dom';
import './Header.css';
import logoimg from "./../.././../assets/logo.svg";
import wishlistimg from "./../.././../assets/wishlist.svg";
import cartimg from "./../.././../assets/cart.svg";
import accountimg from "./../.././../assets/account.svg";
import customercareimg from "./../.././../assets/customercare.png";

const Header = function()
{
    return(
        <>
       
        <div class = "header-top__container">
            <div class = "header-top margin-bottom">
            <div class = "header-top__left">
            <div class = "padding-4 border-right">About Us</div>
            <div class = "padding-4 border-right">My Account</div>
            <div class = "padding-4 border-right">Wishlist</div>
            <div class = "padding-4 border-right">Order Tracking</div>
            </div>
            <div class = "header-top__right">
                <div class ="padding-4 border-right">English</div>
                <div class ="padding-4 ">USD</div>
            </div>
            </div>
        </div>
        <div class = "border-bottom">
        </div>
        <div class = "logo-section__container">
            <div>
                <img class = "logo-section__image" src = {logoimg}/>
            </div>
            <div class = "logo-section__wrapper">
            <div class = "logo-section__search">
                <div class ="margin-left__20">All Category</div>
                <div class = "border-right padding-4"></div>
                <div class ="margin-left__20">
                    Search for item...
                </div>
            </div>
            </div>
            
            <div class = "user-section">
            <div class = "user-section__wrapper">
                <img class = "user-section__image padding-4" src = {wishlistimg}/>
                <div class = "user-section__icondetail">Wishlist</div>
            </div>
            <div class = "user-section__wrapper">
                <img class = "user-section__image padding-4" src = {cartimg}/>
                <div class = "user-section__icondetail">Cart</div>
            </div>
            <div class = "user-section__wrapper">
                <img class = "user-section__image padding-4" src = {accountimg}/>
                <div class = "user-section__icondetail">Account</div>
            </div>
            </div>
        </div>
        <div class = "border-bottom">
        </div>
        <div class = "header-menu__container">
            <div class = "header-menu__wrapper ">
                <div class = "header-menu__item">Browse All Categories</div>
                <div class = "header-menu__item"><Link to="/products" exact>
                    Products
                  </Link></div>
                  <div class = "header-menu__item"><Link to="/view-product" exact>
                    View Product
                  </Link></div>
                  <div class = "header-menu__item"><Link to="/users" exact>
                    Users Details
                  </Link></div>
                  <div class = "header-menu__item"><Link to="/post" exact>
                    Manage Post
                  </Link></div>
                  <div class = "header-menu__item"><Link to="/post-list" exact>
                    Post List
                  </Link></div>
                  <div class = "header-menu__item"><Link to="/comment/add" exact>
                    Manage Comments
                  </Link></div>
                  <div class = "header-menu__item"><Link to="/comment-list" exact>
                    Comments List
                  </Link></div>
                
                
            </div>
            <div class = "header-menu__customercare">
            <div>
                <img class = "header-menu__customercareimg" src = {customercareimg}/>
            </div>
            <div class = "header-menu__customercareitem">
            <div>1900-888</div>
            <div>24/7 Support Center</div>
            </div>
            </div>
        </div>
        <div class = "border-bottom">
        </div>
        {/*<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>*/}
       
        </>
    )
}
export default Header; 