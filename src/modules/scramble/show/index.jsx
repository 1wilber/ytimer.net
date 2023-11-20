import { useSelector } from "react-redux"

export const ShowScramble = () => {
  const currentScramble = useSelector(({ scrambler }) => scrambler.currentScramble)
  const loading = useSelector(({ scrambler }) => scrambler.loading)

  return (
    <div className="card card-compact bg-base-100 mt-10 mx-10">
      <div className="card-body">
        {
          loading ?
            <div className="loading loading-spinner loading-md" />
            :
            <p className="text-xl font-bold">{currentScramble}</p>
        }
      </div>
    </div>
  )
}
