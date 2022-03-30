import { Link } from 'react-router-dom';
import './UserAuth.css';

export default function UserAuth() {
  return (
      <div className='user-auth'>
        <nav>
            <ul>
                <li className='title'>You are logged as:</li>

                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
            </ul>
        </nav>
      </div>
  )
}
