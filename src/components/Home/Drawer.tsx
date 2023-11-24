// components
import { ModeSwitcher } from "@/components/mode-switcher";
import { TimesList } from "@/modules/times/list";
import { EventsList } from "@/modules/events/list";
import { AverageInfo } from "../average-info";

// assets
import Logo from "@/assets/ytimer-logo.png";

// redux
import { removeAllResults } from "@/reducers/timerReducer";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

export const Drawer = () => {
  const dispatch = useAppDispatch();
  const { event } = useAppSelector((state) => state.timer);

  function handleRemoveAllTime() {
    const response = confirm(
      `Deseas eliminar todo los tiempos para la categoria ${event} ?`,
    );
    if (!response) return;

    dispatch(removeAllResults());
    setTimeout(() => {
      (document.activeElement as HTMLElement).blur();
    }, 0);
  }

  return (
    <>
      <div className="w-full justify-start flex flex-col gap-2">
        <div className="flex items-center justify-center">
          <img src={Logo} width="150px" alt="Ytimer logo" />
        </div>

        <div className="mb-3 flex items-start justify-center">
          <ModeSwitcher />
        </div>

        <div className="w-full mb-3">
          <EventsList />
        </div>

        <div className="flex justify-center gap-4">
          <AverageInfo avgTarget={5} />
          <AverageInfo avgTarget={12} />
        </div>

        <div>
          <button
            className="btn btn-outline btn-primary btn-md w-full"
            onClick={handleRemoveAllTime}
          >
            Limpiar tiempos
          </button>
        </div>
      </div>
      <TimesList />
    </>
  );
};
