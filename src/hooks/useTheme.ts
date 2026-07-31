import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") || "system",
    );
    const handleThemeChange = (value: string) => setTheme(value);

    useEffect(() => {
        const changeTheme = () => {
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");
            if (theme === "system")
                if (window.matchMedia("(prefers-color-scheme: dark)").matches)
                    root.classList.add("dark");
                else root.classList.add("light");
            else root.classList.add(theme);
            localStorage.setItem("theme", theme);
        };
        changeTheme();
    }, [theme]);

    return {theme, handleThemeChange}
};
export default useTheme;
