import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableHead,
  TableCell
} from '@mui/material';

import TableItem from "./table-item"
import { useSelector } from 'react-redux';
import { getCurrentAvgTimes, timesByEvent } from '@/selectors/times/index.js';
import { getCurrentAvgHighestTime, getCurrentAvgLowestTime } from '@/utils/index.js';
import { TableCellHead, AsideHistory  } from './times-list.styled';
  

export const TimesList = () => {
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
