import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Box } from '@mui/material'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import { AuthProvider } from './contexts/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Box sx={{ 
          minHeight: '100vh',
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden',
        }}>
          <Routes>
            {/* Routes with navbar */}
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <Box component="main" sx={{ 
                    flexGrow: 1,
                  }}>
                    <Routes>
                      <Route 
                        path="/" 
                        element={
                          <ProtectedRoute>
                            <Dashboard />
                          </ProtectedRoute>
                        } 
                      />
                      <Route 
                        path="/settings" 
                        element={
                          <ProtectedRoute>
                            <Settings />
                          </ProtectedRoute>
                        } 
                      />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route 
                        path="/dashboard" 
                        element={<Navigate to="/" replace />} 
                      />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Box>
                </>
              }
            />
          </Routes>
        </Box>
      </Router>
    </AuthProvider>
  )
}

export default App
