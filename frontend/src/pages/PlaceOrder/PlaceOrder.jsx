import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import Header from "../../components/Header/Header";

const PlaceOrder = ({ setShowLogin }) => {
    const navigate = useNavigate();

    const { getTotalCartAmount } =
        useContext(StoreContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };




    return (
        <div>
            
            <div className="placeorder-main">
                <form className="place-order" >
                    <div className="place-order-left">
                        <p className="title">Delivery Information</p>
                        <div className="multi-fields">
                            <input
                                required
                                name="firstName"
                                value={data.firstName}
                                onChange={onChangeHandler}
                                type="text"
                                placeholder="First name"
                            />
                            <input
                                required
                                name="lastName"
                                value={data.lastName}
                                onChange={onChangeHandler}
                                type="text"
                                placeholder="Last name"
                            />
                        </div>
                        <input
                            required
                            name="email"
                            value={data.email}
                            onChange={onChangeHandler}
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            required
                            name="street"
                            value={data.street}
                            onChange={onChangeHandler}
                            type="text"
                            placeholder="Street"
                        />
                        <div className="multi-fields">
                            <input
                                required
                                name="city"
                                value={data.city}
                                onChange={onChangeHandler}
                                type="text"
                                placeholder="City"
                            />
                            <input
                                required
                                name="state"
                                value={data.state}
                                onChange={onChangeHandler}
                                type="text"
                                placeholder="State"
                            />
                        </div>
                        <div className="multi-fields">
                            <input
                                required
                                name="zipcode"
                                value={data.zipcode}
                                onChange={onChangeHandler}
                                type="text"
                                placeholder="Zip Code"
                            />
                            <input
                                required
                                name="country"
                                value={data.country}
                                onChange={onChangeHandler}
                                type="text"
                                placeholder="Country"
                            />
                        </div>
                        <input
                            required
                            name="phone"
                            value={data.phone}
                            onChange={onChangeHandler}
                            type="text"
                            placeholder="Phone"
                        />
                    </div>
                    <div className="place-order-right">
                        <div className="cart-total">
                            <h2>Cart Totals</h2>
                            <div>
                                <div className="cart-total-details">
                                    <p>Subtotals</p>
                                    <p>${getTotalCartAmount()}</p>
                                </div>
                                <hr />
                                <div className="cart-total-details">
                                    <p>Delivery Fee</p>
                                    <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                                </div>
                                <hr />
                                <div className="cart-total-details">
                                    <b>Total</b>
                                    <b>
                                        ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                                    </b>
                                </div>
                            </div>
                            <button type="submit">PROCEED TO PAYMENT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;