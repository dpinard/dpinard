import { AppBar } from '@mui/material';
import { Drawer } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Navbar() {
    return (
        <div>

        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>        
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
                PRONO STATS
            </Typography>
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

