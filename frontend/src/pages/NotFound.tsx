import { Link as RouterLink } from 'react-router-dom'
import { 
  Container, 
  Typography, 
  Box, 
  Button,
  Paper
} from '@mui/material'
import { SentimentDissatisfied as SadIcon } from '@mui/icons-material'

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Paper elevation={1} sx={{ p: 4, width: '100%' }}>
          <SadIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
          <Typography variant="h1" component="h1" gutterBottom>
            404
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            The page you are looking for does not exist or has been moved.
          </Typography>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Back to Home
          </Button>
        </Paper>
      </Box>
    </Container>
  )
}

export default NotFound 