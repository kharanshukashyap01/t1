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
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button color="inherit" onClick={() => navigate('/fourth')}>Job Run</Button>
          <Button color="inherit">PII Rule</Button>
          <Button color="inherit">Approvals</Button>
        </Box>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
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
      <Container>
        <Header />
        <Box sx={{ bgcolor: "#cfe8fc", minHeight: '100vh', padding: "30px" }}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/stepper" element={<HorizontalLinearStepper />} />
            <Route path="/fourth" element={<JobStatus />} />
          </Routes>
        </Box>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
