import { setMode } from "@/reducers/scramblerReducer"
import { useDispatch, useSelector } from "react-redux";
import { MaterialUISwitch } from "./mode-switcher.styled";

export const ModeSwitcher = () => {
  const dispatch = useDispatch()
  const { mode } = useSelector(({ scrambler }) => scrambler)

  function handleClose(_) {
    setTimeout(() => {
      document.activeElement.blur()
    }, 0)
  }

  function handleOnChangeMode(e) {
    if (e.target.checked) {
      dispatch(
        setMode('dark')
      )
    } else {
      dispatch(
        setMode('light')
      )
    }
  }


  return (
    <MaterialUISwitch onClick={handleClose} checked={mode === "dark"} onChange={handleOnChangeMode} />
  )
}
