import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import useAxiosPublic from "../Hooks/useAxiosPublic";


// create context for authentication
export const AuthContext = createContext(null);
// create context for authentication

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();


    // .........create nwe User With Email And Password.........
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // .........create new  User With Email And Password.........

    // Login User......
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Login User......

    // Logout user......
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //update user

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo

        });

    }

    // Logout user......

    // .........onAuthStateChanged........
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            const userInfo = { email: currentUser.email };
            // console.log(userInfo);
            if (currentUser) {
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);

                        }
                    })
            }
            if (!currentUser) {
                localStorage.removeItem('access-token');
                // console.log('Token Removed')
            }

            // console.log('current User', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])
    // .........onAuthStateChanged........

    // ......return Info....
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }
    // ......return Info....
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;