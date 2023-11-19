import 'cubing/twisty'
import PropTypes from "prop-types"
import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux"
import { eventTypes } from './ScrambleDisplay.constants.js'

function ScramblerDisplay() {
  const currentScramble = useSelector(({ scrambler }) => scrambler.currentScramble)
  const loading = useSelector(({ scrambler }) => scrambler.loading)
  const currentEvent = useSelector(({ timer }) => timer.currentEvent)
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))


  return (
    <Box flex={1} paddingX={1} display="flex" justifyContent={{xs: "center", md: "flex-end"}} alignItems="center">
      {

        loading ?
          <CircularProgress />
          :
          <twisty-player
            // TODO: Refactor this styles
            style={{ width: isSmallScreen ? "10rem" : "15rem", height: isSmallScreen ? "10rem" : "15rem", }}
            puzzle={eventTypes[currentEvent]}
            alg={currentScramble}
            visualization="2D"
            background="none"
            control-panel="none"
          ></twisty-player>
      }
    </Box>
  )
}

PropTypes.ScramblerDisplay = {
  event: PropTypes.string.isRequired,
}

export default ScramblerDisplay
