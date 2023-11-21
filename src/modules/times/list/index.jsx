import { useSelector } from 'react-redux';
import { timesByEvent } from '@/selectors/times/index.js';
import { msToTime } from '@/utils';


export const TimesList = () => {
  const times = useSelector(state => timesByEvent(state))

  return (
    <div className='overflow-x-auto mt-5'>
      {
        <table className='table table-xs table-pin-rows table-pin-cols'>
          <thead>
            <tr>
              <th className='p-4'>#</th>
              <th className='p-4'>TIEMPO</th>
            </tr>
          </thead>
          <tbody>
            {
              times.map((t, i) => (
                <tr key={t.id}>
                  <th className='p-4' >{times.length - i}</th>
                  <th className='p-4'>{msToTime(t.time)}</th>
                </tr>
              ))
            }
          </tbody>
        </table>

      }
    </div>
  )
}
