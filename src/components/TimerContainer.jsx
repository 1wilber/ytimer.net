import Timer from "@/components/Timer";
import {styled} from '@mui/material/styles';

function TimerContainer() {

  const Container = styled('div')({
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  })

  return (
    <Container>
      <Timer />
    </Container>
  )
}

export default TimerContainer
