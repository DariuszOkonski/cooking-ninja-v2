import './Signup.css'
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password, displayName);
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Signup</h3>
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
        <label>
          <span>display name:</span>
          <input 
            type="text" 
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
        </label>

        <button className="btn">Sign Up</button>
      </form>
    </div>
  )
}
