import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from '../firebase/firebaseInitialize';

initAuthentication();

const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    //handle google sign in
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {  
                setError(error.message);
            })
    }

    //Sign Out handler
    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{
        setUser({});
        })
    }
    
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log('inside state change',user)
                setUser(user)
            }
        })
    },[])
    

    return {
        user,
        error,
        signInUsingGoogle,
        handleSignOut

    }
}

export default useFirebase;

