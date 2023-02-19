import PropType from 'prop-types';
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import useAverage from '@/hooks/useAverage'
import {msToTime} from '@/utils';
import {Typography} from "@mui/material";
import {setAvgCliked} from "@/reducers/timerReducer";;

function AverageInfo({avgTarget}) {
  const dispatch = useDispatch()
  const [isClicked, setIsClicked] = useState(false)
  const avgClicked = useSelector(({timer}) => timer.avgClicked)
  const avg = useAverage(avgTarget)

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
    <div onClick={handleAvgClicked}>
      <Typography color={isClicked && "primary"} component="div" fontWeight="bold" style={{width: "100%"}}>{`avg${avgTarget}`}</Typography>
      <Typography color={isClicked && "primary"} component="div" style={{width: "100%"}}>{msToTime(avg)}</Typography>
    </div>
  )
}

AverageInfo.propTypes = {
  avgTarget: PropType.number
}

export default AverageInfo
