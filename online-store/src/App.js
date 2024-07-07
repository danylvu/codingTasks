import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import TotalPrice from './components/TotalPrice';
import './App.css';

function App() {
    const [totalPrice, setTotalPrice] = useState(0);

    const handleBuy = (price) => {
        setTotalPrice(totalPrice + price);
    };

    return (
        <Router>
            <div>
                <Navbar />
                {totalPrice > 0 && <TotalPrice totalPrice={totalPrice} />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products onBuy={handleBuy} />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
