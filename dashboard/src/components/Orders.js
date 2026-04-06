import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_URL;

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/orders`,{
   headers:{
     Authorization: localStorage.getItem("token")
   }
 })
  .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>
      {orders.length === 0 ? (
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
      ) : (
        <table className="order-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>

        </table>

      )}
    </div>
  );
};

export default Orders;