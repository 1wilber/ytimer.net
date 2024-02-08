import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchScramble } from "@/reducers/scramblerReducer";
import { TimerScreen } from "@/screens";
import { useEffect } from "react";
// import Home from "@/screens/Home";

function App() {
  const dispatch = useAppDispatch();
  const { event } = useAppSelector(({ timer }) => timer);

  useEffect(() => {
    dispatch( 
      fetchScramble(event)
    )
  }, [event]);

  return <TimerScreen />;
}

export default App;
