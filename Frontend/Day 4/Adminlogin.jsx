import { useState } from 'react';
import '../../assets/css/login.css';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        console.log(`Logging in as $ with username: ${username} and password: ${password}`);
    };

    return (
        <div id='bgimg'>
        <div className='bgul'>
        <div className="login-container">
            <h2 className='ad-h'>Admin Login</h2>
            <br></br>
            <div className="linput-group">
                <label className='loginlabel'></label>
                <input type="email" placeholder='Email'  value={username} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="linput-group">
                <label className='loginlabel'></label>
                <input type="password" placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Link to= '/adminhome' >
            <button onClick={handleLogin}
            className='lbutton'>Login</button></Link>
          <br/><br/>
            {/* <p><Link to="/adminregister">Register here</Link></p> */}
        </div>
            {/* <p><Link to="/loginpage">Admin login</Link></p> */}
        <div>
        </div>
        </div>
        </div>
    );
};

export default AdminLogin;
