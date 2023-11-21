import { useSelector } from "react-redux"

export const ShowScramble = () => {
  const currentScramble = useSelector(({ scrambler }) => scrambler.currentScramble)
  const loading = useSelector(({ scrambler }) => scrambler.loading)

  return (
    <div className="md:max-w-4xl max-w-full  self-center card card-compact bg-base-300">
      <div className="card-body">
        {
          loading ?
            <div className="loading loading-spinner loading-md" />
            :
            <p className="text-center text-sm md:text-xl  font-bold">{currentScramble}</p>
        }
      </div>
    </div>
  )
}
