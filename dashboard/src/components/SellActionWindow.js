import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";


const SellActionWindow = ({ uid }) => {

    const { closeSellWindow } = useContext(GeneralContext);
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleSellClick = async () => {
        try {
            await axios.post("http://localhost:3002/orders", {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "SELL"
            });
            // console.log("sell button cilck")
            closeSellWindow()
        } catch (error) {
            alert(error.response?.data || "Sell failed");
        }

    }

    const handleCancelClick = () => {
        closeSellWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}

                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}

                        />
                    </fieldset>
                </div>
            </div>

            {/* BUTTONS */}
            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <button className="btn btn-blue"
                        onClick={handleSellClick}>
                        SELLing
                    </button>
                    <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;