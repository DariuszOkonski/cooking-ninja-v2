import { Link } from 'react-router-dom';
import './Navbar.css';
import Searchbar from './Searchbar';

import { useTheme } from './../hooks/useTheme';
import { useAuthContext } from './../hooks/useAuthContext';

export default function Navbar() {
  const { color, changeColor } = useTheme();
  const { user } = useAuthContext();

  return (
    <div className='navbar' style={{ background: color }}>
        <nav>
            <Link to='/' className='brand'>
                <h1>Recipe App</h1>
            </Link>

            {user && <Searchbar />}
            {user && <Link className='create-recipe' to='/create'>Create recipe</Link>}
        </nav>
    </div>
  )
}
