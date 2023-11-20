import { useEffect, useState } from "react";
import { CenterFlex, HomeDrawer, Brand, AsideInfo, AsideActions } from '@/screens/Home/Home.styled';
import { Button, Box, useMediaQuery } from '@mui/material';

// Components
import AverageInfo from '@/components/AverageInfo'
import { ModeSwitcher } from "../mode-switcher";

import { useDispatch } from 'react-redux';
import { removeAll } from "@/reducers/timerReducer"
// Logo import
import Logo from '@/assets/ytimer-logo.png'
import { TimesList } from "@/modules/times/list";
import { EventsList } from "@/modules/events/list";

const Drawer = (props) => {
  const { drawerOpen, handleDrawerToggle, setDrawerOpen } = props
  const dispatch = useDispatch()
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const [drawerVariant, setDrawerVariant] = useState(isSmallScreen ? 'temporary' : 'persistent')
  const drawerWidth = { xs: "30vh", md: 190 }
  const drawerHeight = "100vh"

  useEffect(() => {
    setDrawerOpen(isSmallScreen ? false : true)
    setDrawerVariant(isSmallScreen ? 'temporary' : 'persistent')

  }, [isSmallScreen])

  function handleRemoveAllTime() {
    const response = confirm('Deseas eliminar todo los tiempos?')
    if (!response) return
    dispatch(removeAll())
    setTimeout(() => {
      document.activeElement.blur()
    }, 0)
  }

  return (
    <HomeDrawer sx={{ height: drawerHeight, width: drawerWidth, '& .MuiDrawer-paper': { width: drawerWidth, height: '100%' } }} variant={drawerVariant} anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
      <CenterFlex width="100%" flexDirection="column">
        <Box padding={0.5}>
          <Brand>
            <img src={Logo} width="150px" alt="Ytimer logo" />
          </Brand>

          <Box marginBottom={1} display="flex" justifyContent="center" alignItems="flex-start">
            <ModeSwitcher />
          </Box>

          <Box sx={{ width: "100%", marginBottom: 1 }} >
            <EventsList />
          </Box>

          <AsideInfo>
            <AverageInfo avgTarget={5} />
            <AverageInfo avgTarget={12} />
          </AsideInfo>


          <AsideActions>
            <Button
              className="w-full"
              size="small" 
              color="primary" 
              variant="contained" 
              onClick={handleRemoveAllTime}
            >
              Clear
            </Button>
          </AsideActions>
        </Box>
      </CenterFlex>
      <TimesList />
    </HomeDrawer>
  )
}

export default Drawer
