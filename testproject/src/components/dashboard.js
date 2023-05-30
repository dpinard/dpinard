import {Box} from '@mui/material';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GroupIcon from '@mui/icons-material/Group';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BarChartIcon from '@mui/icons-material/BarChart';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SavingsIcon from '@mui/icons-material/Savings';
import BasicModal from './Modals/modalCapital';
import FollowModal from './Modals/modalFollow';
import PronoModal from './Modals/modalProno';
import RatioModal from './Modals/modalRatio';

const styles = {
    dashCardPaper:{
        m:4,
        p:4, 
        borderRadius:'16px',
        flexGrow:1,
    },
    PaperTop:{
        p:3,
        border:'1px',
        borderTopRightRadius: '16px',
        borderTopLeftRadius: '16px',
        borderBottomRightRadius:'0px',
        borderBottomLeftRadius:'0px'
    },
    PaperBot:{
        height:'35px',
        marginBottom:1,
        border:'1px',
        borderTopRightRadius: '0px',
        borderTopLeftRadius: '0px',
        borderBottomRightRadius: '16px',
        borderBottomLeftRadius: '16px',
        boxShadow:1,
        display:'flex',
        justifyContent:'right',
        
    },
    BoxPaper:{
        m:4,
        p:4,
        flexGrow:1,
        borderRadius:'16px',
    },

};


export default function Dashboard () {
    
    return (
        <div>
            <Toolbar/>
            <Toolbar variant='h1'>
                TABLEAU DE BORD
            </Toolbar>

            <Box
            sx={{
                display:'flex',
                flexWrap: 'Wrap',
                '&> :not(style)': {
                p:'1%',
                m:'0%',
                width:'auto',
                height:'20%',     
                },
            }}>

        {/* CAPITAL */}
<Box sx={styles.BoxPaper}> 

                <Paper sx={styles.PaperTop}>  
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection:'column', }}>          
                        <Typography variant='h6' color='#757575' textTransform='uppercase' fontFamily="Arial" letterSpacing='0.5px' fontWeight='600' fontSize='0.90em'> Capital </Typography>
                        <Typography variant='h5' fontFamily="Plus Jakarta Sans, sans-serif" lineHeight='1.7' fontWeight='700' fontSize='2rem'> 50€ </Typography>
                    </Box>
                    <Avatar sx={{p:3, backgroundColor:'purple'}}>
                        <SavingsIcon/>
                    </Avatar>
                    </Box>
                </Paper>
                <Paper sx={styles.PaperBot}>
                    <BasicModal/>
                </Paper>
</Box>
    

        {/* SUIVI */}
<Box sx={styles.BoxPaper}> 

                <Paper sx={styles.PaperTop}>  
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection:'column', }}>          
                        <Typography variant='h6' color='#757575' textTransform='uppercase' fontFamily="Arial" letterSpacing='0.5px' fontWeight='600' fontSize='0.90em'> Abonnement </Typography>
                        <Typography variant='h5' fontFamily="Plus Jakarta Sans, sans-serif" lineHeight='1.7' fontWeight='700' fontSize='2rem'> 0 </Typography>
                    </Box>
                    <Avatar sx={{p:3, backgroundColor:'lightblue'}}>
                        <GroupIcon/>
                    </Avatar>
                    </Box>
                </Paper>
                <Paper sx={styles.PaperBot}>
                    <FollowModal/>
                </Paper>

</Box>


        {/* PRONOSTICS */}
<Box sx={styles.BoxPaper}> 
                <Paper sx={styles.PaperTop}>  
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection:'column', }}>          
                        <Typography variant='h6' color='#757575' textTransform='uppercase' fontFamily="Arial" letterSpacing='0.5px' fontWeight='600' fontSize='0.90em'> Pronostic </Typography>
                        <Typography variant='h5' fontFamily="Plus Jakarta Sans, sans-serif" lineHeight='1.7' fontWeight='700' fontSize='2rem'> 1 </Typography>
                    </Box>
                    <Avatar sx={{p:3, backgroundColor:'#ffeb3b'}}>
                        <ElectricBoltIcon/>
                    </Avatar>
                    </Box>
                </Paper>
                <Paper sx={styles.PaperBot}>
                    <PronoModal/>
                </Paper>
</Box>


        {/* RATIO */}
<Box sx={styles.BoxPaper}> 

                <Paper sx={styles.PaperTop}>  
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection:'column', }}>          
                        <Typography variant='h6' color='#757575' textTransform='uppercase' fontFamily="Arial" letterSpacing='0.5px' fontWeight='600' fontSize='0.90em'> Ratio </Typography>
                        <Typography variant='h5' fontFamily="Plus Jakarta Sans, sans-serif" lineHeight='1.7' fontWeight='700' fontSize='2rem'> +20% </Typography>
                    </Box>
                    <Avatar sx={{p:3, backgroundColor:'#4dd0e1'}}>
                        <BarChartIcon/>
                    </Avatar>
                    </Box>
                </Paper>
                <Paper sx={styles.PaperBot}>
                    <RatioModal/>
                </Paper>
</Box>

        {/* PROFIT */}
<Box sx={styles.BoxPaper}> 

                <Paper sx={styles.PaperTop}>  
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection:'column', }}>          
                        <Typography variant='h6' color='#757575' textTransform='uppercase' fontFamily="Arial" letterSpacing='0.5px' fontWeight='600' fontSize='0.90em'> Profit </Typography>
                        <Typography variant='h5' fontFamily="Plus Jakarta Sans, sans-serif" lineHeight='1.7' fontWeight='700' fontSize='2rem'> +9.97€ </Typography>
                    </Box>
                    <Avatar sx={{p:3, backgroundColor:'lightgreen'}}>
                        <RocketLaunchIcon/>                        
                    </Avatar>
                    </Box>
                </Paper>
                <Paper sx={styles.PaperBot}></Paper>
</Box>


            </Box>
        </div>
    )
}