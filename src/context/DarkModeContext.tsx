import { createContext, useEffect, ReactNode } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export interface DarkModeContextType {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

export interface DarkModeProviderProps {
	children: ReactNode;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

function DarkModeProvider({ children }: DarkModeProviderProps) {
	const [isDarkMode, setIsDarkMode] = useLocalStorageState<boolean>(
		window.matchMedia("(prefers-color-scheme: dark)").matches,
		"isDarkMode"
	);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark-mode");
			document.documentElement.classList.remove("light-mode");
		} else {
			document.documentElement.classList.add("light-mode");
			document.documentElement.classList.remove("dark-mode");
		}
	}, [isDarkMode]);

	function toggleDarkMode() {
		setIsDarkMode((isDark) => !isDark);
	}

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

export { DarkModeProvider, DarkModeContext };
