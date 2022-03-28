import { Link, useHistory } from 'react-router-dom';
import './RecipeList.css';
import { useTheme } from './../hooks/useTheme';
import Trashcan from '../assets/trashcan.svg';
import { projectFirestore } from '../firebase/config';
import { RECIPES_DB } from '../utilities/constants';

export default function RecipeList({ recipies }) {
    const { mode } = useTheme();

    const handleClick = (id) => {
        // remove element from db - use real-time data (listener when element is removed)
        projectFirestore.collection(RECIPES_DB).doc(id).delete();
    }

    if(recipies.length == 0) {
        return <div className='error'>No recipes to load...</div>
    }

    return (
        <div className='recipe-list'>
            { recipies.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`} >
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>

                    <div>{recipe.method.substring(0, 50)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img 
                        className='delete'
                        src={Trashcan} 
                        onClick={() => handleClick(recipe.id)}
                        alt="trashcan" 
                    />
                </div>
            )) }
        </div>
    )
}
