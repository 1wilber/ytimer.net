import { msToTime } from '@/utils'
import { useDispatch, useSelector } from 'react-redux'

import {
  TableCell,
} from '@mui/material';
import { removeTime } from '@/reducers/timerReducer';

const TableItem = (props) => {
  const dispatch = useDispatch()
  const { avgClicked } = useSelector(({ timer }) => timer)
  const { index, time, highestTime, lowerTime, currentAvgTimes } = props

  const areHigherOrLowerTime = () => {
    return highestTime.id === time.id || lowerTime.id === time.id
  }

  function handleRemoveTime(t) {
    const response = confirm(`Deseas eliminar el tiempo: ${msToTime(t.time)}`)
    if (!response) return
    dispatch(removeTime(t))
  }

  const displayTime = areHigherOrLowerTime() ? `(${msToTime(time.time)})` : msToTime(time.time)
  const tableCellColor = currentAvgTimes.some(currentAvgTime => currentAvgTime.id === time.id) ? "primary.main" : "text.primary"

  return (
    <TableCell align="center" sx={{ color: tableCellColor }} onClick={() => handleRemoveTime(time)}>
      {
        (index < avgClicked) ?
          displayTime
          : msToTime(time.time)
      }
    </TableCell>
  )
}

export default TableItem;
