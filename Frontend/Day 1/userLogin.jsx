import React, { useState } from 'react';
import '../../assets/css/login.css';
import { Link } from 'react-router-dom';
import img2 from '../../assets/gif/wall.gif';

const Login = () => {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`Logging in with username: ${username} and password: ${password}`);
        // Add your login logic here
    };

    return (
        <div id='bgimg'>
            <div className="login-container">
                <h2 className='ad-h'>Login</h2>
                <div className="linput-group">
                    <label className='loginlabel'></label>
                    <input type="email"
                    placeholder='Email' value={username} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="linput-group">
                    <label className='loginlabel'></label>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button onClick={handleLogin} className='lbutton'><Link to='/home'>Login</Link></button>
                <br /><br />
                <p><Link to="/register">Register here</Link></p>
                <br />
                <p> 
                   <Link to="/adminlogin">Login as Admin</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
