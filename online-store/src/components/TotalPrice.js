import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TotalPrice({ totalPrice }) {
    return (
        <div className="total-price" style={{ position: 'absolute', top: 20, right: 20 }}>
            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
    );
}

export default TotalPrice;
