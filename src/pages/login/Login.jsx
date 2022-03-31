import './Login.css'
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('login')
    console.log(email, password);
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Login</h3>
        <label>
          <span>email:</span>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          <span>password:</span>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button className="btn">Login</button>
      </form>
    </div>
  )
}
