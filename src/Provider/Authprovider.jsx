
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState, } from "react";

import { auth } from "../Config/firebase.config";
export const AuthContext = createContext(null)


const Authprovider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);




    const googleProvider = new GoogleAuthProvider();


    // google login  
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //  profile update fn
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo

        })
    }



    //   create User 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //   loging  Account 
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //   logOut account 
    const logOut = () => {
        return signOut(auth);

    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false);
            // if user exists then issue a token

        });
        return () => {
            return unsubscribe();
        };
    }, [user?.email]);




    const authInformatiopn = {
        googleLogin,
        createUser,
        user,
        signin,
        logOut,
        loading,
        handleUpdateProfile,
    }

    return (
        <AuthContext.Provider value={authInformatiopn}>
            {children}
        </AuthContext.Provider>
    );
};



export default Authprovider;

