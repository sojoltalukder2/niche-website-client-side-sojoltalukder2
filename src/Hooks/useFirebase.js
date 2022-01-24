import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.initialize";
import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('https://i.ibb.co/dLwpDwr/random-User.png');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError('');
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [auth]);

    const handleSignOut = () => {
        setIsLoading(true);

        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.code);
        }).finally(() => {
            setIsLoading(false);
        })
    }
    const handleEmailSignIn = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleCreateNewUser = () => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }
    const updateUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: userName, photoURL: photo
        }).then(() => {
            console.log("successful")
        })
    }

    const createNewUserInDatabase = () => {
        const newUser = {
            uName: userName,
            uImage: photo,
            uEmail: email,
            uType: 'general'
        }

        fetch('https://glacial-dawn-59195.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(res => {
            if (res.status === 200) {
                alert("User Created Succesfully.")
            }
        })
    }

    return { user, setUser, error, setError, handleSignOut, isLoading, setIsLoading, email, setEmail, password, setPassword, userName, setUserName, verifyEmail, updateUserInfo, handleEmailSignIn, handleCreateNewUser, photo, setPhoto, createNewUserInDatabase }
}

export default useFirebase;