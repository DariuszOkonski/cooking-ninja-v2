import './Home.css';
import RecipeList from '../../components/RecipeList';
import { projectFirestore } from '../../firebase/config';
import { useState, useEffect } from 'react';
import { RECIPES_DB } from '../../utilities/constants';

export default function Home() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      setIsPending(true);
      setError(false);
      
      projectFirestore.collection(RECIPES_DB).get()
        .then((snapshot) => {
          if(snapshot.empty) {
            setError('No recipes to load')
            setIsPending(false);
          } else {
            let results = [];
            snapshot.docs.forEach(doc => {
              results.push({ id: doc.id, ...doc.data()})
            })

            setData(results);
            setIsPending(false);
          }
        }).catch(err => {
          setError(err.message);
          setIsPending(false);
        }) 
      
    }, [])
    

    return (
      <div className='home'>
        { error && <p className='error'>{error}</p> }
        { isPending && <p className='loading'>Loading...</p> }
        
        { data && <RecipeList recipies={data} />}

      </div>
    )
}
