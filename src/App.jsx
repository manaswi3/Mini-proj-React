import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import WeatherApp from './WeatherApp.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <WeatherApp/>
      
      {/* <div className="card">
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br /><br />
        <Button variant="text">Text</Button>
        <br /><br />
        <Button variant="contained" startIcon={<DeleteIcon/>}>Click me!</Button>
        <br /><br />
        <Button variant="outlined" size="large">outlined</Button>
        <br /><br />
        
      </div>
      <Alert variant='outlined' severity='error'>Deleted!</Alert> */}
    </>
  )
}

export default App
