import { PropsWithChildren, createContext, useState } from "react";

interface ThemeContextTypes {
    isDarkMode: boolean,
    toggleMode: () => void,
}
export const ThemeContext = createContext<ThemeContextTypes>({
    isDarkMode: false, toggleMode: () => { }
});

export function ThemeContextProvider({ children }: PropsWithChildren) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    }
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    )
}