import { updateEvent } from "@/reducers/timerReducer";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import type { WCAEvent } from "@/modules/shared/event";

export const EventsList = () => {
  const dispatch = useAppDispatch();
  const { event } = useAppSelector(({ timer }) => timer);

  function handleEventChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    const selectedEvent = evt.target.value as WCAEvent;
    dispatch(updateEvent(selectedEvent));
    (document.activeElement as HTMLSelectElement).blur();
  }

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Evento</span>
      </label>
      <select
        value={event}
        onChange={handleEventChange}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="222">2x2</option>
        <option value="333">3x3</option>
        <option value="444">4x4</option>
        <option value="555">5x5</option>
        <option value="666">6x6</option>
        <option value="777">7x7</option>
      </select>
    </div>
  );
};
