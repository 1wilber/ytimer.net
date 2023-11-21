import 'cubing/twisty'
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { eventTypes } from './scrambled-puzzle.constants.js';

export const ScrambledPuzzle = () => {
  const currentScramble = useSelector(({ scrambler }) => scrambler.currentScramble)
  const loading = useSelector(({ scrambler }) => scrambler.loading)
  const currentEvent = useSelector(({ timer }) => timer.currentEvent)

  return (
    <div className='flex justify-center items-center w-fit card rounded-2xl bg-base-300 self-end'>
      <div className='card-body p-2'>
        {

          loading ?
            <div className='loading loading-spinner loading-lg'></div>
            :
            <twisty-player
              // TODO: Refactor this styles
              puzzle={eventTypes[currentEvent]}
              style={{ width: '250px', height: '150px', }}
              alg={currentScramble}
              visualization="2D"
              background="none"
              control-panel="none"
            ></twisty-player>
        }
      </div>
    </div>
  )
}

PropTypes.ScrambledPuzzle = {
  event: PropTypes.string.isRequired,
}
