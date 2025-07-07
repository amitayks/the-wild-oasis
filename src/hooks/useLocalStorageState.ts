import { useEffect, useState, Dispatch, SetStateAction } from "react";

export function useLocalStorageState<T>(
	initialState: T,
	key: string
): [T, Dispatch<SetStateAction<T>>] {
	const [value, setValue] = useState<T>(() => {
		try {
			const storedValue = localStorage.getItem(key);
			return storedValue ? JSON.parse(storedValue) : initialState;
		} catch (error) {
			console.error(`Error parsing localStorage key "${key}":`, error);
			return initialState;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(`Error setting localStorage key "${key}":`, error);
		}
	}, [value, key]);

	return [value, setValue];
}
