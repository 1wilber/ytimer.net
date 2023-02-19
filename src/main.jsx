import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from "@/theme"
import {ThemeProvider} from "@mui/material"
import './assets/main.css'
import store from '@/store'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
