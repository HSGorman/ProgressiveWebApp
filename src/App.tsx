import { Button, Container, Typography } from '@mui/material'
import { InstallButton } from './components/InstallButton'

const App = () => {
  const showStatus = () => {
    alert('App is running!')
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Hello 🚀        
      </Typography>
      <Button variant="contained" color="primary" onClick={() => showStatus()}>
        Click me
      </Button>
      <InstallButton />
    </Container>
  )
}

export default App