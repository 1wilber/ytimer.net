import { Select, MenuItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentEvent } from '@/reducers/timerReducer';


function EventSwitcher() {
  const dispatch = useDispatch()
  const currentEvent = useSelector(({ timer }) => timer.currentEvent)

  function handleEventChange(e) {
    const selectedEvent = e.target.value
    dispatch(setCurrentEvent(selectedEvent))
  }

  function handleClose(_) {
    setTimeout(() => {
      document.activeElement.blur()
    }, 0)
  }

  return (
    <Select
      size='small'
      fullWidth
      onChange={handleEventChange}
      onClose={handleClose}
      value={currentEvent}
    >
      <MenuItem value="222">2x2</MenuItem>
      <MenuItem value="333">3x3</MenuItem>
      <MenuItem value="444">4x4</MenuItem>
      <MenuItem value="555">5x5</MenuItem>
      <MenuItem value="666">6x6</MenuItem>
      <MenuItem value="777">7x7</MenuItem>
    </Select>
  )
}

export default EventSwitcher
