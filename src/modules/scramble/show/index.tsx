import { useSelector } from "react-redux"

export const ShowScramble = () => {
  const { loading, currentScramble } = useSelector(({ scramble }) => scramble)

  return (
    <div className="md:max-w-4xl max-w-full  self-center card card-compact bg-base-300">
      <div className="card-body">
        {
          loading ?
            <div className="loading loading-spinner loading-md" />
            :
            <p className="text-center text-lg md:text-xl  font-bold">{currentScramble}</p>
        }
      </div>
    </div>
  )
}
