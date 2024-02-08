import { events } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateEvent } from "@/redux/reducers/timer.reducer";
import { MenuItem,  Select } from "@mui/material";

const EventSelector = () => {
  const { event } = useAppSelector(({ timer }) => timer);
  const dispatch = useAppDispatch();

  const handleEventChange = (event) => {
    dispatch(updateEvent(event.target.value));
  };

  return (
    <Select
      onChange={handleEventChange}
      variant="standard"
      label="Categorias"
      value={event}
    >
      {Object.keys(events).map((event) => (
        <MenuItem key={event} value={event}>
          {events[event]}
        </MenuItem>
      ))}
    </Select>
  );
};

export { EventSelector };
