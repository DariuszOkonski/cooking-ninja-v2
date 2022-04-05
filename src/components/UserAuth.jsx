import { Link } from 'react-router-dom';
import './UserAuth.css';
import { useAuthContext } from './../hooks/useAuthContext';
import { useLogout } from './../hooks/useLogout';

export default function UserAuth() {
    const { user } = useAuthContext();
    const { logout } = useLogout();

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
                    
                    {!user && <li>
                        <Link to='/login'>Login</Link>
                    </li>}
                    {!user && <li>
                        <Link to='/signup'>Signup</Link>
                    </li>}
                    {user && <li>
                        <button onClick={logout} className='btn'>Logout</button>
                    </li>}
                </ul>
            </nav>
        </div>
    )
}
