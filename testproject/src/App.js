import * as React from 'react';
import './App.css';

import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import { Toolbar } from '@mui/material';
import {Box} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Settings from './components/settings';
import UserTest from './components/classUser';

function App() {
  return (
    <div>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link href='https://fonts.googleapis.com/css?family=Plus Jakarta Sans:300,400,500' rel='stylesheet'/>
      </head>
    
{/* appbar */}
        
        <Router>
        <Box sx={{ display: 'flex', backgroundColor:'#fafafa', height:'100vh'}}>
          <Navbar/>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow:1, p:3}}>
            <Toolbar/>
            <Routes>
              <Route index path="/" element={<UserTest/>}/>
              <Route path="dpinard/settings" element={<Settings/>}/>
              <Route path="dpinard/dashboard" element={<Dashboard/>}/>
            </Routes>
          </Box>

        </Box>
        </Router>

    </div>
  );
}

export default App;
