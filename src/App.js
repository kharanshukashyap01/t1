import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LoginForm from './LoginForm';
import LandingPage from './LandingPage';
import JobStatus from './FourthPage';

const Footer = () => (
  <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f1f1f1' }}>
    Copyright PII Catcher
  </footer>
);

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'center',  bgcolor: '#F5F5F5' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button 
            sx={{
              bgcolor: 'black',
              color: 'white',
              mx: 1, // Add margin between buttons
              '&:hover': {
                bgcolor: 'black',
              },
            }}
            onClick={() => navigate('/fourth')}
          >Job Run
          </Button>

          <Button sx={{
            bgcolor: 'black',
            color: 'white',
            mx: 1, // Add margin between buttons
            '&:hover': {
              bgcolor: 'black',
            },
          }}
          >PII Rule</Button>
          <Button sx={{
            bgcolor: 'black',
            color: 'white',
            mx: 1, // Add margin between buttons
            '&:hover': {
              bgcolor: 'black',
            },
          }}>Approvals</Button>
        </Box>
        <IconButton color="black">
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  return (
    <Router>
      <Box sx={{ width: '100%', padding: 0 }}>
        <Header />
        <Box sx={{ bgcolor: "#FFFFFF", minHeight: '100vh', padding: "30px" }}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/stepper" element={<HorizontalLinearStepper />} />
            <Route path="/fourth" element={<JobStatus />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
