import HorizontalLinearStepper from "./HorizontalLinearStepper";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>
      <Box sx={{ bgcolor: '#cfe8fc' }} style={{padding: "30px 30px 30px 30px "}} >
        <HorizontalLinearStepper/>
      </Box>
    </Container>
  );
}

export default App;
