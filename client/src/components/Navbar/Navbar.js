
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Lock, Menu } from '@mui/icons-material';

import { useValue } from '../../context/ContextProvider';
import UserIcons from '../user/UserIcons';
import Sidebar from '../sidebar/Sidebar';
import { useState } from 'react';


const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false) //THIS IS A LOCAL STATE THAT WE CREATED TO OPEN AND CLOSE THE SIDEBAR

  const {state:{currentUser},dispatch} = useValue() //THIS USE VALUE IS A CUSTOM HOOK THAT WE CREATED IN OUR CONTEXTPROVIDER

  return (
    <>
    <AppBar>
      <Container>
        <Toolbar disableGutters>
          <Box sx={{mr:1}}>
          <IconButton size='large' color='inherit' onClick={()=>setIsOpen(true)}>
            <Menu/>
          </IconButton>
         </Box> 
         <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            Local Living
          </Typography>
         <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Local Living
          </Typography>
          {!currentUser ? (
            <Button
              color="inherit"
              startIcon={<Lock />}
              onClick={() => dispatch({ type: 'OPEN_LOGIN'})}
            >
              Login
            </Button>
          ) : (
            <UserIcons />
          )}

        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar />
    <Sidebar {...{isOpen,setIsOpen}}/>
    </>
  )
}

export default Navbar
