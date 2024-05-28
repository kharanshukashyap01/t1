import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import LoginPage from './LoginPage';
//import LandingPage from './LandingPage';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
//import JobStatus from './FourthPage';
import FifthPage from './FifthPage';

const steps = ['Select data source', 'Login', 'Database', 'Tables'];

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                   
                    {activeStep === 0 && <FirstPage />}
                    {activeStep === 1 && <SecondPage />}
                    {activeStep === 2 && <ThirdPage />}
                
                    {activeStep === 3 && <FifthPage />}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{
                                    mr: 1,
                                    bgcolor: 'black', // Set background color to black
                                    color: 'white', // Set text color to white
                                    '&:hover': {
                                        bgcolor: 'black', // Keep background color black on hover
                                    },
                                }}
                                size="large" // Set the size to large
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button 
                            onClick={handleNext}
                                sx={{
                                    bgcolor: 'black', // Set background color to black
                                    color: 'white', // Set text color to white
                                    '&:hover': {
                                        bgcolor: 'black', // Keep background color black on hover
                                    },
                                }}
                                size="large" // Set the size to large
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
