import { useAppSelector } from "@/hooks/redux";
import { getAverageOf } from "@/selectors/times";

interface AverageInfoProps {
  avgTarget: 5 | 12;
}

export const AverageInfo = (props: AverageInfoProps) => {
  const { avgTarget } = props;
  const averageByTarget = useAppSelector((state) =>
    getAverageOf(state, avgTarget),
  );

  return (
    <div className="flex justify-center items-center flex-col">
      <button type="button" className={"btn-sm btn btn-primary"}>
        <div>{`ao${avgTarget}`}</div>
      </button>

      <p>{averageByTarget}</p>
    </div>
  );
};

AverageInfo.defaultProps = {
  avgTarget: 5,
};
