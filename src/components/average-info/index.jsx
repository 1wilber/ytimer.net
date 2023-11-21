import PropType from 'prop-types';
import { msToTime } from '@/utils';

export const AverageInfo = (props) => {
  const { avgTarget } = props

  const avg = 10000

  return (
    <div className='flex justify-center items-center flex-col' >
      <button type='button' className={"btn-sm btn btn-primary"}>
        <div>
          {`ao${avgTarget}`}
        </div>
      </button>

      <p>
        {avg === 0 ? '--' : msToTime(avg)}
      </p>

    </div>
  )
}

AverageInfo.propTypes = {
  avgTarget: PropType.number
}

AverageInfo.defaultProps = {
  avgTarget: 5
}

export default AverageInfo
