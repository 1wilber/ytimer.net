import Drawer from "@/components/Home/Drawer"
import Logo from '@/assets/ytimer-logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import { useRef, useState } from "react";
import { HomeContainer } from './Home.styled';
import { Box } from "@mui/material";
import { ShowScramble } from "@/modules/scramble/show";
import { CreateTime } from "@/modules/times/create";
import { ScrambledPuzzle } from '@/modules/scramble/scrambled-puzzle';

function Home() {
  const ref = useRef(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <HomeContainer data-testid='home-container'>
      <Drawer drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} setDrawerOpen={setDrawerOpen} />
      <Box
        component="main"
        height="100%"
        sx={{ flexGrow: 1, bgcolor: 'secondary.dark' }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="inherit"
        >
          <Box height="50px" sx={{ backgroundColor: "primary.light", display: { xs: "block", md: "none" } }} variant="nav" >
            <Box sx={{ paddingX: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <img src={Logo} width="150px" alt="Ytimer logo" />
              <MenuIcon color="primary" onClick={handleDrawerToggle} />
            </Box>
          </Box>

          <ShowScramble />

          <Box ref={ref} flex={2} display="flex" justifyContent="center" alignItems="center">
            <CreateTime container={ref} />
          </Box>

          <ScrambledPuzzle />
        </Box>
      </Box>
    </HomeContainer>
  )
}

export default Home
