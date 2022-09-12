import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'

const firebaseConfig = {
  apiKey: 'AIzaSyCKEKpLKAad62VwyRx_J9Qe7_3R7o33JIY',
  authDomain: 'fir-auth-52005.firebaseapp.com',
  projectId: 'fir-auth-52005',
  storageBucket: 'fir-auth-52005.appspot.com',
  messagingSenderId: '986012551982',
  appId: '1:986012551982:web:63631ad43da7711b8408bf',
  measurementId: 'G-2FK5XC92GY'

  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

export const firebaseApp = initializeApp(firebaseConfig)

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}
