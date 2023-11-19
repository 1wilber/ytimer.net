import Home from "@/screens/Home"
import { ThemeProvider } from "@mui/material"
import darkTheme from "@/theme/"
import { useSelector } from "react-redux"
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { mode } = useSelector(({ scrambler }) => scrambler)
  const theme = darkTheme(mode)

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Analytics />
    </ThemeProvider>
  )
}

export default App
