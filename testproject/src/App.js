import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AppBar } from '@mui/material';
import { Drawer } from '@mui/material';
import {Box} from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';

function App() {
  return (
      <div>
    <head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </head>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Damien Pinard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      <Box
        sx={{
          display:'flex',
          flexWrap: 'wrap',
          '&> :not(style)': {
            p:2,
            width: 256,
            height: 128,
          },
        }}
      >
      <Paper outlined sx={{m:3,p:3}}>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
          <h4> PROJETS </h4>
          <Avatar sx={{p:4}}>
            <TopicOutlinedIcon/>
          </Avatar>
        </Box>
        <span> 3 </span>
      </Paper>


    </Box>
        

      </Box>
    </Box>










    </div>
  );
}

export default App;
