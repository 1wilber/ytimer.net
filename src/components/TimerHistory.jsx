import {msToTime} from "@/utils"
import {useSelector, useDispatch} from "react-redux"
import {removeTime} from "@/reducers/timerReducer"
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useState, useEffect} from "react";


function TimerHistory() {
  const {currentTimes: times, avgClicked, currentAvgs} = useSelector(({timer}) => timer)
  const dispatch = useDispatch()
  const currentAvgTimes = currentAvgs[avgClicked] || {}

  function handleRemoveTime(t) {
    const response = confirm(`Deseas eliminar el tiempo: ${msToTime(t.time)}`)
    if (!response) return
    dispatch(removeTime(t))
  }

  function isCurrentAvg(t) {
    if (!currentAvgTimes?.times?.length) {
      return false
    }

    return currentAvgTimes.times.some(time => time.id === t.id)
  }

  const StyledTableHead = styled(TableHead)(({theme}) => ({
    backgroundColor: theme.palette.secondary.light,
  }))

  const CustomTableCell = styled(TableCell)(({theme, color = "primary"}) => ({
    borderColor: theme.palette.secondary.light,
    color: theme.palette.text[color]
  }))

  const TableCellHead = styled(CustomTableCell)(({theme}) => ({
    color: theme.palette.text.secondary,
    padding: ".50rem .25rem",
  }))

  function timeFormat(t) {
    if (Object.keys(currentAvgTimes).length === 0) {
      return msToTime(t.time)
    }

    if (t.id === currentAvgTimes.lowerTime.id || t.id === currentAvgTimes.highestTime.id) {
      return `( ${msToTime(t.time)} )`
    }

    return msToTime(t.time)
  }

  return (
    <TableContainer component={Paper}>
      {
        !!times.length &&
        <Table>
          <StyledTableHead>
            <TableRow>
              <TableCellHead align="center">#</TableCellHead>
              <TableCellHead align="center">Tiempo</TableCellHead>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {
              times.map((t) => (
                <TableRow key={t.id}>
                  <CustomTableCell align="center" color="secondary">
                    {t.id}
                  </CustomTableCell>

                  <CustomTableCell color={isCurrentAvg(t) ? "main" : "primary"}  onClick={() => handleRemoveTime(t)} align="center">{timeFormat(t)}</CustomTableCell>
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
