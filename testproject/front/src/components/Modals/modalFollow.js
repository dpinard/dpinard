import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Abonnement from '../cpAbonnement'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:5,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><Box sx={{display:'flex', alignItems:'center', fontSize:'0.80em', lineHeight:2}}>View <ArrowForwardIcon/></Box></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ABONNEMENT
          </Typography>
          Mis a jour le: 27/05/23 at 3h25
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Abonnes:0 [liste des parieurs suivi, montant accorder]
          </Typography>
          <Typography>
            Suivis:0 [liste des parieurs suivi, montant accorder]
          </Typography>

          <Abonnement/>
        </Box>
      </Modal>
    </div>
  );
}