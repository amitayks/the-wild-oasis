import { useContext } from "react";
import { DarkModeContext, DarkModeContextType } from "./DarkModeContext";

function useDarkMode(): DarkModeContextType {
	const context = useContext(DarkModeContext);
	if (context === undefined) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}
	return context;
}

export { useDarkMode };
