import './Signup.css'
import { useState } from 'react';
import { useSignup } from './../../hooks/useSignup';

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  }

  return (
    <div className='signup'>
      <form onSubmit={handleSubmit} className="signup-form">
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

        { !isPending && <button className="btn">Sign Up</button>}
        { isPending && <button className='btn' disabled>Loading...</button>}
        { error && <p>{error}</p>}
      </form>
    </div>
  )
}
