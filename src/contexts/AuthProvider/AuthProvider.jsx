import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

//Auth context setup
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //sign in with function
    const providerLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    
    //Register function
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //const logIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //verify email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    //Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    //OnAuth State change
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('Inside Auth State Change: ', currentUser);
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser)
            }
            setLoading(false);
        })

        return () => unsubscribe;
    },[])

    const authInfo = {user, 
        loading, 
        setLoading,
        providerLogIn, 
        logOut, 
        createUser, 
        signIn, 
        updateUserProfile,
        verifyEmail
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;