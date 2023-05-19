import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create a new user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // update user profile info
    const updateUserProfile = (name, photo, currentUser) => {
        setLoading(true);
        return updateProfile(currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // user login with email password
    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google Sign in
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // user log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // forgot password 
    const forgotPassword = email => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // observer user auth state
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInformation = {
        createUser,
        updateUserProfile,
        userSignIn,
        googleSignIn,
        logOut,
        forgotPassword,
        user,
        loading
    } 
    return (
        <AuthContext.Provider value={ authInformation }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;