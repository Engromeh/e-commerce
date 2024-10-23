import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import logo3 from './logo.png';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

   
    if (email && password) {
    
      navigate('/HomePage');
    } else {
      alert('Please fill in both fields'); 
    }
  };

  return (
    <>
      <img src={logo3} alt='RoMeH Store' className='store-image' />
      <div className='wrapper'>
        <div className='from-box login'>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            
            <div className='input-box'>
              <FaUser className="icon" />
              <input 
                type="text" 
                placeholder='ROMeh@gmail.com' 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            
            <div className='input-box'>
              <RiLockPasswordFill className="icon" /> 
              <input 
                type="password" 
                placeholder='pass' 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            <div className='forget'>
              <a href='#'>Forget password?</a>
            </div>

            <button type='submit'>Login</button>

            <div className='register'>
              <p>Don't have an account? <a href='/Register'>Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
