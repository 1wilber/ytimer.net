import { useEffect, useState } from "react";

export const ModeSwitcher = () => {
  const areDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(
    areDarkMode ? "dark" : localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    const htmlDocument = document.querySelector("html");
    if (htmlDocument === null) return;

    htmlDocument.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(evt.target.value);
    (document.activeElement as HTMLElement).blur();
  };
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
  ];

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Tema</span>
      </label>
      <select
        value={theme}
        onChange={handleThemeChange}
        className="select select-bordered w-full max-w-xs"
      >
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};
