import PropType from 'prop-types';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { calculateAvg, msToTime } from '@/utils';
import { Box, Button, Typography } from "@mui/material";
import { setAvgCliked } from "@/reducers/timerReducer";
import { getCurrentAvgTimes } from '@/selectors/times';

function AverageInfo(props) {
  const { avgTarget } = props
  const dispatch = useDispatch()
  const [isClicked, setIsClicked] = useState(false)
  const { avgClicked } = useSelector(({ timer }) => timer)

  const currentAvgTimes = useSelector(state => getCurrentAvgTimes(state, avgTarget))
  const avg = calculateAvg(currentAvgTimes, avgTarget)

  useEffect(() => {
    if (avgClicked === avgTarget) {
      setIsClicked(true)
      return
    }

    setIsClicked(false)

  }, [avgClicked])

  function handleAvgClicked(_e) {
    dispatch(setAvgCliked(avgTarget))
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" onClick={handleAvgClicked}>
      <Button variant={isClicked ? "contained" : "outlined"} sx={{ display: "flex", flexDirection: "column", margin: 0, padding: 0, marginBottom: 1 }}>
        <div>
          {`ao${avgTarget}`}
        </div>
      </Button>

      <Typography color="text.primary">
        {avg === 0 ? '--' : msToTime(avg)}
      </Typography>

    </Box>
  )
}

AverageInfo.propTypes = {
  avgTarget: PropType.number
}

AverageInfo.defaultProps = {
  avgTarget: 5
}

export default AverageInfo
