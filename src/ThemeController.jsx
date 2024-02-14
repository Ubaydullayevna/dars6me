import { v4 as uuidv4 } from "uuid";

function ThemeController() {
  const themes = [
    "default",
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  function handleTheme(theme) {
    localStorage.setItem("theme", theme);
  }

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] h-[260px] w-52 overflow-y-auto rounded-box bg-base-300 p-2 shadow-2xl"
      >
        {themes.map((theme) => {
          const id = uuidv4();
          return (
            <li key={id}>
              <input
                type="radio"
                onChange={(e) => {
                  handleTheme(e.target.value);
                }}
                name="theme-dropdown"
                className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                aria-label={theme}
                value={theme}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ThemeController;
