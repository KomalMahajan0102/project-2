import React, { useContext, useEffect } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Cart = ({ setShowLogin }) => {
    const {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url
    } = useContext(StoreContext);

    const navigate = useNavigate();

    console.log("items", cartItems);


    return (
        <div className="cart">
            
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className="cart-items-title cart-items-item">

                                    <img src={url+"/images/"+item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>₹{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>₹{item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className="cross">
                                        x
                                    </p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                })}
           
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotals</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-promocode">
                    <div>
                        <p>If you have a promocode, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Cart;