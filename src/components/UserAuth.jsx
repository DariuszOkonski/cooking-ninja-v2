import { Link } from 'react-router-dom';
import './UserAuth.css';
import { useAuthContext } from './../hooks/useAuthContext';

export default function UserAuth() {
    const { user } = useAuthContext();
    
    return (
        <div className='user-auth'>
            <nav>
                <ul>
                    <li className='title'>
                        {
                            !user ? 
                            <span>Please, log in</span> : 
                            <span>You are logged as: {user.displayName}</span>
                        }
                    </li>

                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link className='btn' to='/#'>Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
