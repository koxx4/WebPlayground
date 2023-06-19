import { auth } from './Init';
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import {useState, useEffect} from 'react';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const logInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log({result});
        const user = result.user;
    } catch (error) {
        console.log({error});
        alert(error.message);
    }
};

export const logInWithGithub = async () => {
    try {
        const result = await signInWithPopup(auth, githubProvider);
        console.log({result});
        const user = result.user;
    } catch (error) {
        console.log({error});
        alert(error.message);
    }
};

export const useUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return unsubscribe;
    }, []);

    return user;
};

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log({error});
        alert(error.message);
    }
}