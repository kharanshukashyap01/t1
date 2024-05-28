import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';

function LandingPage() {
    const navigate = useNavigate();

    const handlePIIScannerClick = () => {
        navigate('/stepper');
    };

    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                textAlign="center"
                pt={8}
            >
                <Box mb={4}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to the PII scanner
                    </Typography>
                    <Button sx={{
                        width: '100%',
                        bgcolor: 'black',
                        color: 'white',
                        mx: 1, // Add margin between buttons
                        '&:hover': {
                            bgcolor: 'black',
                        },
                    }}
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handlePIIScannerClick}
                    >
                        Click Here to Get Started
                    </Button>
                </Box>
                <Box>
                    <Typography variant="h4" gutterBottom>
                        Welcome to the Data Masking
                    </Typography>
                    <Button variant="contained" color="primary" size="large"
                        sx={{
                            width: '100%', // Set the width to full
                            bgcolor: 'black', // Set background color to black
                            color: 'white', // Set text color to white
                            '&:hover': {
                                bgcolor: 'black', // Keep background color black on hover
                            },
                        }}>
                        Click Here to Get Started
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default LandingPage;
