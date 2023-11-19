import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableHead,
  TableCell
} from '@mui/material';

import {
  TableCellHead,
  AsideHistory,
} from "./TimerHistory.styled.js"
import TableItem from "./TableItem"
import { useSelector } from 'react-redux';
import { getCurrentAvgTimes, timesByEvent } from '@/selectors/times/index.js';
import { getCurrentAvgHighestTime, getCurrentAvgLowestTime } from '@/utils/index.js';

function TimerHistory() {
  const { avgClicked } = useSelector(({ timer }) => timer)
  const times = useSelector(state => timesByEvent(state))
  const currentAvgTimes = useSelector(state => getCurrentAvgTimes(state, avgClicked))
  const lowerTime = getCurrentAvgLowestTime(currentAvgTimes)
  const highestTime = getCurrentAvgHighestTime(currentAvgTimes)

  return (
    <TableContainer component={AsideHistory}>
      {
        <Table stickyHeader={true}>
          <TableHead>
            <TableRow>
              <TableCellHead align="center">#</TableCellHead>
              <TableCellHead align="center">TIEMPO</TableCellHead>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              times.map((t, i) => (
                <TableRow key={t.id}>
                  <TableCell align="center">{times.length - i}</TableCell>
                  <TableItem highestTime={highestTime} lowerTime={lowerTime} currentAvgTimes={currentAvgTimes} time={t} index={i} />
                </TableRow>
              ))
            }
          </TableBody>
        </Table>

      }
    </TableContainer>
  )
}

export default TimerHistory
