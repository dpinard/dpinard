import * as React from 'react';
import './App.css';

import Navbar from './components/navbar';
import Dashboard from './components/dashboard';

import {Box} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link href='https://fonts.googleapis.com/css?family=Plus Jakarta Sans:300,400,500' rel='stylesheet'/>
      </head>
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />     
{/* appbar */}
      <Navbar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
{/* dashboard */}
        <Dashboard/>
      </Box>
    </Box>

    </div>
  );
}

export default App;
