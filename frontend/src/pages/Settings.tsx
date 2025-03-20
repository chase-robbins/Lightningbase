import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  TextField, 
  Button, 
  Divider 
} from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const Settings = () => {
  const { currentUser } = useAuth()
  const [displayName, setDisplayName] = useState<string>(currentUser?.displayName || '')
  const [email, setEmail] = useState<string>(currentUser?.email || '')

  // This is just a placeholder function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would implement updating user profile details
    console.log('Profile update requested with:', { displayName, email })
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Profile Settings
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Display Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                    helperText="Email cannot be changed"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Account Information
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Typography variant="body2" gutterBottom>
              <strong>User ID:</strong> {currentUser?.uid}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Created:</strong> {currentUser?.metadata.creationTime}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Last Login:</strong> {currentUser?.metadata.lastSignInTime}
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              <Button 
                variant="outlined" 
                color="error" 
                size="small"
              >
                Delete Account
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Settings 