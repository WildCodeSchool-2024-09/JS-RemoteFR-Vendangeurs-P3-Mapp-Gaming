interface ThemeToggleProps {
  changeTheme: (theme: string) => void;
  currentTheme: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  changeTheme,
  currentTheme,
}) => {
  const themes = [
    { name: "Default", className: "theme-orange" },
    { name: "Red", className: "theme-red" },
    { name: "Blue", className: "theme-blue" },
    { name: "Green", className: "theme-green" },
    { name: "Purple", className: "theme-purple" },
  ];

  return (
    <div className="flex justify-center space-x-4 py-4">
      {themes.map((theme) => (
        <button
          type="button"
          key={theme.className}
          onClick={() => changeTheme(theme.className)}
          className={`px-4 py-2 rounded ${
            currentTheme === theme.className
              ? "bg-primary text-bg-primary"
              : "bg-secondary-100 text-primary"
          }`}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
