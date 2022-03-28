import './Create.css';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from './../../hooks/useTheme';
import { projectFirestore } from '../../firebase/config';
import { RECIPES_DB } from '../../utilities/constants';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef();
  const history = useHistory();
  const { mode } = useTheme();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const doc = { title, ingredients, method, cookingTime: cookingTime + ' minutes' };

    try {
      // add new recipe to the db
      await projectFirestore.collection(RECIPES_DB).add(doc);      
      history.push('/');

    } catch (err) {
      console.log(err);
    }    

    handleClearState();
  }

  const handleAdd = (e) => {
    e.preventDefault();

    const ing = newIngredient.trim();

    if(ing === '')
      return;

    if(ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    
    setNewIngredient('');
    ingredientInput.current.focus();
  }

  const handleClearState = () => {
    setTitle('');
    setMethod('');
    setCookingTime('');
  }  

  return (
    <div className={`create ${mode}`}>
      <h2 className='page-title'>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe tile: </span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients: </span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button 
              className="btn"
              onClick={handleAdd}
            >add</button>
          </div>
        </label>

        <p>Current ingredients: { ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe method: </span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input 
            type="number" 
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required  
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}
