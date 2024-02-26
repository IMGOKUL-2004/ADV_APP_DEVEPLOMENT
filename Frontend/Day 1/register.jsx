import { useState } from 'react';
import '../../assets/css/register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log(`Registering with username: ${username}, email: ${email}, and password: ${password}`);
    };

    return (
        <div id='bgimg'>
            <div className="register-container">
                <h2 id='rh'>Sign Up</h2>
                <div className="rinput-group">
                    <label></label>
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="rinput-group">
                    <label></label>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="rinput-group">
                    <label></label>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                <div className='rbutton'>
                    <button onClick={handleRegister} id='rb'>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Register;

