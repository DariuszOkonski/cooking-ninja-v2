import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { LOGIN } from '../utilities/constants';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async(email, password) => {
        setError(null);
        setIsPending(true);

        // sign the user out
        try {            
            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            
            // dispatch logou action
            dispatch({ type: LOGIN, payload: res.user });

            // update state
            if(!isCancelled) {
                setIsPending(false)
                setError(null);
            }
        } catch (err) {
            if(!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false)
            }
        }
    }

    useEffect(() => {          
      return () => {
        setIsCancelled(true);
      }
    }, [])
    

    return { error, isPending, login }
}