import { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";





const Login = () => {

  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error, setError] = useState('');


  const navigate=useNavigate()


  
     const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:4005/login', {
          email: email,
          password: password,
        });
  
        if (response.data.success) {
          alert('Login successful');
          console.log(response.data);
          navigate('/homepage');
        } 
        else {
          setError('Invalid Password. Please try again.');
          console.log(response.data);

        }
      } catch (err) {
        setError('Error occurred during login. Please try again.');
      }
    };

  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm" onSubmit={handleSubmit}>
      <label>Email</label>
      <input className="loginInput" type="text" placeholder="Enter your email..."
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input className="loginInput" type="password" placeholder="Enter your password..." 
      value={password}
      onChange={(e) => setPassword(e.target.value)}/>
      <button className="loginButton">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
      <button className="loginRegisterButton">Register</button>
      </div>
  )
}

export default Login