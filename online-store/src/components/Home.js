import React, { useState } from 'react';

function Home() {
    const [name, setName] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        if (name.trim()) {
            setLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setName('');
    };

    return (
        <div className="container mt-5">
            {loggedIn ? (
                <>
                    <h1>Welcome, {name}!</h1>
                    <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <button
                        className="btn btn-primary mt-3"
                        onClick={handleLogin}
                        disabled={!name.trim()}
                    >
                        Login
                    </button>
                </>
            )}
        </div>
    );
}

export default Home;
