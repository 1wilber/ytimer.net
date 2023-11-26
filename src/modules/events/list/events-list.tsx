import { updateEvent } from "@/reducers/timerReducer";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import type { WCAEvent } from "@/modules/shared/event";


interface WcaEventOptions {
  value: WCAEvent;
  label: string;
}

const EventsList = () => {
  const dispatch = useAppDispatch();
  const { event } = useAppSelector(({ timer }) => timer);

  function handleEventChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const selectedEvent = evt.target.value as WCAEvent;
    dispatch(updateEvent(selectedEvent));
    (document.activeElement as HTMLSelectElement).blur();
  }

  const options: WcaEventOptions[] = [
    { value: "222", label: "2x2" },
    { value: "333", label: "3x3" },
    { value: "444", label: "4x4" },
    { value: "555", label: "5x5" },
    { value: "666", label: "6x6" },
    { value: "777", label: "7x7" },
  ]

  return (
    <div className="form-control w-full" data-testid='root-events-list'>
      <label className="label">
        <span className="label-text">Evento</span>
      </label>
      <select
        data-testid='select-events-list'
        value={event}
        onChange={handleEventChange}
        className="select select-bordered w-full max-w-xs"
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
};


export default EventsList
