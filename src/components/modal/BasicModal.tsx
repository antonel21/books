import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginForm from '../LoginForm/LoginForm';
import Label from '../label/Label';
import './BasicModal.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginTop: '4px' }}>
      <Button size="large" color="primary" onClick={handleOpen}>
        LOGIN
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Label class="label-modal" labelText="LOGIN" />
          <LoginForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
