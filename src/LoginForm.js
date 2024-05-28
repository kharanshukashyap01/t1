import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        navigate('/landing');
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Typography variant="h3" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Username
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Password
                        </Typography>
                        <TextField
                            fullWidth
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                    <Button
                        sx={{
                            width: '50%', // Set the width to half
                            bgcolor: 'black', // Set background color to black
                            color: 'white', // Set text color to white
                            '&:hover': {
                                bgcolor: 'black', // Keep background color black on hover
                            },
                        }}
                        fullWidth={false} // Ensure fullWidth is not set to true
                        type="submit"
                        variant="contained"
                        color="primary"
                        
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default LoginForm;
