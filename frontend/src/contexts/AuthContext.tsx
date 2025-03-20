import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser,
  UserCredential
} from 'firebase/auth'
import { app } from '../services/firebase'

// Define types
type AuthContextType = {
  currentUser: FirebaseUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<UserCredential>;
  register: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

// Create context
const AuthContext = createContext<AuthContextType | null>(null)

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Auth provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const auth = getAuth(app)

  // Register function
  const register = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Login function
  const login = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Logout function
  const logout = () => {
    return signOut(auth)
  }

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [auth])

  const value = {
    currentUser,
    loading,
    login,
    register,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContext 