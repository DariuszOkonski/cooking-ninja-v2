import { Link } from 'react-router-dom';
import './RecipeList.css';

export default function RecipeList({ recipies }) {
    return (
        <div className='recipe-list'>
            { recipies.map(recipe => (
                <div key={recipe.id} className='card' >
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>

                    <div>{recipe.method.substring(0, 50)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                </div>
            )) }
        </div>
    )
}