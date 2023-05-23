import { AppBar } from '@mui/material';
import { Drawer } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';


export default function Navbar() {
    return (
        <div>

        <AppBar position="fixed" noWrap sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>        
        <Toolbar>
            <Typography variant="h6" component="div" style={{flex:1}}>
                PRONO STATS
            </Typography>

            <Avatar sx={{p:3, backgroundColor:'green'}}>
                
                <PersonIcon/>
            </Avatar>
        </Toolbar>

        </AppBar>

        <Drawer
        variant="permanent"
        sx={{
        display:{xs: 'none', sm:'none', md:'block'},
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}>
        </Drawer>

        </div>
    );
}

