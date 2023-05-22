import {Box} from '@mui/material';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';


export default function Dashboard () {
    return (
        <div>
            
            <Toolbar />
            <Box
            sx={{
                display:'flex',
                flexWrap: 'wrap',
                '&> :not(style)': {
                p:3,
                width: 256,
                height: 128,
                },
            }}>  
            <Paper sx={{m:4,p:4}}>  
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Box sx={{display:'flex', flexDirection:'column', }}>          
                    <Typography variant='h6' textTransform='uppercase' fontFamily="Arial" letterSpacing='0.5px' fontWeight='600' fontSize='0.90em'> Budget </Typography>
                    <Typography variant='h5' fontFamily="Plus Jakarta Sans, sans-serif" lineHeight='1.7' fontWeight='700' fontSize='2rem'> 50$ </Typography>
                </Box>
                <Avatar sx={{p:3, backgroundColor:'green'}}>
                    <TopicOutlinedIcon/>
                </Avatar>
                </Box>
            </Paper>
            </Box>


        </div>
    )
}