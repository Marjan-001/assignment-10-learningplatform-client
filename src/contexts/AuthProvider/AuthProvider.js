import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

// const ThemeContext = createContext();


export const AuthContext = createContext();
const auth = getAuth(app);
const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
        // Default theme is taken as dark-theme
        localStorage.setItem("theme", "dark-theme");
        return "dark-theme";
    } else {
        return theme;
    }
};



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user', currentUser)

            setUser(currentUser);

            setLoading(false);

        });
        return () => {
            unsubscribe();
        }
    }, [])
    const [theme, setTheme] = useState(getTheme);

    function toggleTheme() {
        if (theme === "dark-theme") {
            setTheme("light-theme");
        } else {
            setTheme("dark-theme");
        }
    };

    useEffect(() => {
        const refreshTheme = () => {
            localStorage.setItem("theme", theme);
        };

        refreshTheme();
    }, [theme]);



    const authInfo = { theme, setTheme, toggleTheme, user, providerLogin, logOut, createUser, loading, setLoading, updateUserProfile, signIn }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;