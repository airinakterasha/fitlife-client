import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";


const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
        })
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
            //if user exists then issue a token
            if(currentUser){
                axios.post('http://localhost:5555/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                console.log('token response', res.data);
                })
            } else {
                axios.post('http://localhost:5555/logout', loggedUser, {withCredentials: true})
                .then(res => {
                console.log(res.data);
                })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [user?.email])
    
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        updateUserProfile,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider