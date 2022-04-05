import './Login.css'
import { useState } from 'react';
import { useLogin } from './../../hooks/useLogin';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
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

        {!isPending && <button className="btn">Login</button>}
        {isPending && <button className="btn" disabled>Logging...</button>}
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
