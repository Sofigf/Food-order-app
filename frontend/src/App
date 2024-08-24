import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('/api/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    return (
        <div className="App">
            <Dashboard orders={orders} />
        </div>
    );
}

export default App;
