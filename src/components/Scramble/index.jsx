import { useSelector } from "react-redux"
import { Typography, CircularProgress, } from "@mui/material";
import { FilledContainer } from './Scramble.styled'

function Scramble() {
  const currentScramble = useSelector(({ scrambler }) => scrambler.currentScramble)
  const loading = useSelector(({ scrambler }) => scrambler.loading)

  const containerStyles = {
    backgroundColor: { xs: "secondary.dark", md: "primary.main" }
  }
  const textStyles = {
    fontSize: { xs: "1rem", md: "1.8rem" },
    color: { sx: "text.primary", md: "white" }
  }

  return (
    <FilledContainer sx={containerStyles} maxWidth="md">
      {
        loading ?
          <CircularProgress sx={{ color: { xs: "primary", md: "white" } }} />
          :
          <Typography
            sx={textStyles}
            overflow="hidden"
            variant="h4"
            fontSize="1.8rem"
            fontWeight={700}>
            {currentScramble}
          </Typography>
      }
    </FilledContainer>
  )
}

export default Scramble
