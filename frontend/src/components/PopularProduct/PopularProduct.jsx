import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';
import '../FoodDisplay/FoodDisplay.css'
import './PopularProduct.css'

function PopularProduct() {
    const { popular_items } = useContext(StoreContext);
    console.log("co", popular_items)
    return (
        <div className='food-display' id='food-display'>
            <div className='food-display-desc'>
                <p>ONLINE STORE</p>
                <h2>Popular Items</h2>
            </div>
            <div className='food-display-list'>
                {popular_items.map((item, index) => {

                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>





                })}

            </div>
        </div>
    )
}

export default PopularProduct
