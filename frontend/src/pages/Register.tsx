import { useState, FormEvent } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Paper,
  Link,
  Alert,
  CircularProgress
} from '@mui/material'
import { useAuth } from '../contexts/AuthContext'
import { httpsCallable } from 'firebase/functions'
import { functions, db } from '../services/firebase'
import { doc, setDoc } from 'firebase/firestore'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }
    
    try {
      setError('')
      setLoading(true)
      
      // Register the user
      const userCredential = await register(email, password)
      const user = userCredential.user
      
      // Create user document with type "brand"
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        type: 'brand',
        signUpDate: new Date(),
        lastLoginDate: new Date(),
      }, { merge: true })
      
      // Call the signedUp function
      try {
        const signedUpFunction = httpsCallable(functions, 'signedUp')
        await signedUpFunction({
          userId: user.uid,
          type: 'brand'
        })
      } catch (signUpErr) {
        // Log the error but don't block the user from proceeding
        console.error('Error calling signedUp function:', signUpErr)
      }
      
      // Navigate to dashboard
      navigate('/dashboard')
    } catch (error) {
      setError('Failed to create an account')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          color="primary"
          fontWeight="bold"
          gutterBottom
        >
          REPLACE_ME_YOUR_APP_NAME
        </Typography>
        
        <Paper elevation={1} sx={{ p: 4, width: '100%' }}>
          <Typography component="h2" variant="h5" align="center" gutterBottom>
            Register
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? <CircularProgress size={24} /> : 'Register'}
            </Button>
            <Box textAlign="center">
              <Link component={RouterLink} to="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default Register 