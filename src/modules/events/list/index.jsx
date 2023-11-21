import { useDispatch, useSelector } from 'react-redux';
import { setCurrentEvent } from '@/reducers/timerReducer';


export const EventsList = () => {
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
    <div className='form-control w-full'>
      <label className='label'>
        <span className='label-text'>Evento</span>
      </label>
      <select onChange={handleEventChange} onClose={handleClose} className="select select-bordered w-full max-w-xs">

        <option value="222">2x2</option>
        <option value="333">3x3</option>
        <option value="444">4x4</option>
        <option value="555">5x5</option>
        <option value="666">6x6</option>
        <option value="777">7x7</option>
      </select>
    </div>
  )
}
