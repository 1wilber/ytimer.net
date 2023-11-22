import { useEffect, useState } from "react";

export const ModeSwitcher = () => {

  const areDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(areDarkMode ? 'dark' : (localStorage.getItem('theme') || 'light'));

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


  function handleClose(_) {
    setTimeout(() => {
      document.activeElement.blur()
    }, 0)
  }
  const themes = [
    "light",
    "dark",
    "synthwave",
    "valentine",
    "halloween",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "luxury",
    "dracula",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ]

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Tema</span>
      </label>
      <select onClose={handleClose} value={theme} onChange={(evt) => setTheme(evt.target.value)} className="select select-bordered w-full max-w-xs">
        {
          themes.map((theme) => (
            <option key={theme} value={theme}>{theme}</option>
          ))
        }
      </select>
    </div>
  )
}
