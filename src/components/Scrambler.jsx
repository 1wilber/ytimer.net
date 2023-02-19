import {styled} from '@mui/material/styles';
import {useSelector} from "react-redux"
import {Typography} from "@mui/material";

function Scrambler() {
  const currentScramble = useSelector(({scrambler}) => scrambler.currentScramble)
  const ScramblerContainer = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.dark,
    padding: "1.5rem",
    position: "absolute",
    top: "2.5rem",
    maxWidth: "50rem",
    borderRadius: (theme.shape.borderRadius * 3)
  }))

  return (
    <ScramblerContainer>
      <Typography variant="h4" fontSize="1.8rem" lineHeight="2.25rem" fontWeight={700}>{currentScramble}</Typography>
    </ScramblerContainer>
  )
}

export default Scrambler
