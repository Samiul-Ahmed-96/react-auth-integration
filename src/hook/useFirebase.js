import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initAuthentication from "../firebase/firebaseInitialize";
initAuthentication();

const usefirebase = () =>{
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        signInWithPopup(auth,googleProvider)
        .then(res => {
            console.log(res.user);
            setUser(res.user);
        })
        .catch(error=>{
            setError(error.message);
        })
    }
    return{
        user,
        error,
        googleSignIn
    }
    
}

export default usefirebase;