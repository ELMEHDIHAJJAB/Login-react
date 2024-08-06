import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import image from './image.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      navigate('/home');
    } else {
      setError('Login et mot de passe sont incorrects');
    }
  };

  return (
    <div className="container">
        <img src={image} height={"150px"} alt="wizwazo hh" />
      {/* <h2>Login</h2> */}
      <form onSubmit={handleLogin}>
        <div>
          <label>Login :</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;

