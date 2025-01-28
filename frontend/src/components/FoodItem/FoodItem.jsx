import React, { useContext, useState } from 'react'
import add_icon_white from '../../assets/add_icon_white.png'
import add_icon_green from '../../assets/add_icon_green.png'
import remove_icon_red from '../../assets/remove_icon_red.png'

import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
const FoodItem = ({id,name,price,description,image}) => {
  
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className="food-item-image"  src={image} alt="" />
          <div className='like-icon'><FaHeart style={{color:"red",fontSize: "1.5em"}}/></div>
        {!cartItems[id]
          ?
         <img className="add" onClick={()=>addToCart(id)} src={add_icon_white}/>
          :<div className='food-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={add_icon_green} alt="" />
          </div>

        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>       
        </div>
        <p className='food-item-desc'>{description.substr(0,100)}...</p>
        <p className='food-item-price'>₹{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
