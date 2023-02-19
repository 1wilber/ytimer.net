import TimerContainer from '@/components/TimerContainer'
import TimerHistory from "@/components/TimerHistory"
import Scrambler from "@/components/Scrambler"
import AverageInfo from '@/components/AverageInfo'
import {styled} from '@mui/material/styles';
import {useDispatch} from "react-redux";
import {removeAll} from "@/reducers/timerReducer"
import { Button, Typography } from "@mui/material";

function App() {
  const dispatch = useDispatch()

  function handleRemoveAllTime(argument) {
    const response = confirm('Deseas eliminar todo los tiempos?')
    if (!response) return
    dispatch(removeAll())
  }


  const Aside = styled('aside')({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  })

  const Brand = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
    textAlign: "center",
    padding: "1rem .75rem"
  }))

  const MainGrid = styled('div')(({theme}) => ({
    display: "grid",
    gridTemplateColumns: "12rem 1fr",
    gridTemplateRows: "100vh",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  }))

  const AsideInfo = styled('div')(({theme}) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(1, 1fr)",
    textAlign: "center",
    gap: "1rem",
    padding: "1rem .75rem",
  }))

  const AsideActions = styled('div')(({theme}) => ({
    padding: "1rem .75rem",
    borderTop: "1px solid",
    borderColor: theme.palette.secondary.light
  }))

  const AsideHistory = styled('div')(({theme}) => ({
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  }))

  const TimerSection = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.dark
  }))

  return (
    <MainGrid>
      <Aside>
        <Brand>
          <Typography variant="h5" fontWeight={700}>YTimer</Typography>
        </Brand>

        <AsideInfo>
          <AverageInfo avgTarget={5} />
          <AverageInfo avgTarget={12} />
        </AsideInfo>


        <AsideActions>
          <Button className="w-full" color="primary" variant="outlined" onClick={handleRemoveAllTime}>Clear</Button>
        </AsideActions>

        <AsideHistory>
          <TimerHistory />
        </AsideHistory>
      </Aside>

      <TimerSection>
        <Scrambler />
        <TimerContainer />
      </TimerSection>
    </MainGrid>
  )
}

export default App
