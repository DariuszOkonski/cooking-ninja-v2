import { Link } from 'react-router-dom';
import './RecipeList.css';
import { useTheme } from './../hooks/useTheme';

export default function RecipeList({ recipies }) {
    const { mode } = useTheme();


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
                </div>
            )) }
        </div>
    )
}
