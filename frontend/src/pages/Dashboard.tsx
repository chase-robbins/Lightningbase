import { useState, useEffect } from 'react'
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader 
} from '@mui/material'
import { db } from '../services/firebase'
import { collection, getDocs, query, limit } from 'firebase/firestore'

const Dashboard = () => {
  const [userCount, setUserCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example query to count users (replace with your actual data structure)
        const usersRef = collection(db, 'users')
        const usersSnapshot = await getDocs(query(usersRef, limit(100)))
        setUserCount(usersSnapshot.size)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Users" />
            <CardContent>
              <Typography variant="h3" component="div">
                {loading ? '...' : userCount}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total registered users
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Example Card" />
            <CardContent>
              <Typography variant="h3" component="div">
                0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Replace with your own data
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Example Card" />
            <CardContent>
              <Typography variant="h3" component="div">
                0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Replace with your own data
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Main Content Area */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                Welcome to Your SaaS Template
              </Typography>
              <Typography variant="body1">
                This is a starting point for your application. Customize this dashboard
                with your own components and data. Feel free to add charts, tables, and
                other UI elements to display your application's specific data.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard 