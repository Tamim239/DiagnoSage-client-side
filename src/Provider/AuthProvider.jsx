import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);
  const [couponData, setCouponData] = useState('')
  const [bookData, setBookData] = useState();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = async () => {
    setLoading(true)
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    })
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Assign local storage, in memory,
        const userInfo = { email: currentUser.email };
        try {
          const res = await axios.post('http://localhost:5000/jwt', userInfo);
          if (res.data.token) {
            localStorage.setItem('token', res.data.token);
          }
        } catch (error) {
          console.error('Error fetching JWT:', error);
          // Optionally handle the error
        }
      } else {
        // Do something (remove token)
        localStorage.removeItem('token');
      }
      setLoading(false);
    })
      return ()=>{
        unsubscribe()
      }
},[])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
    couponData, setCouponData, bookData, setBookData
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  // Array of children.
  children: PropTypes.node,
}

export default AuthProvider
