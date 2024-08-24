import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <h2>{order.customerName}</h2>
            <p>Total Amount: ${order.totalAmount}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.itemName} - Quantity: {item.quantity} - Price: ${item.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .dashboard {
          padding: 20px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }
        h1 {
          color: #333;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
