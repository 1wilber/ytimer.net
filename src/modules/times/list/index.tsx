import { timesByEvent } from "@/selectors/times";
import { msToTime } from "@/utils";
import { useAppSelector } from "@/hooks/redux";

export const TimesList = () => {
  const results = useAppSelector(timesByEvent);

  return (
    <div className="overflow-x-auto mt-5">
      {
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">TIEMPO</th>
            </tr>
          </thead>
          <tbody>
            {results.map((t, i) => (
              <tr key={t.id}>
                <th className="p-4">{results.length - i}</th>
                <th className="p-4">{msToTime(t.time)}</th>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};
