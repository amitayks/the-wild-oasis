import { useEffect, useRef, MutableRefObject } from "react";

function useClickOutside(
	handler: () => void,
	capture: boolean = true
): MutableRefObject<HTMLElement | null> {
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (
				ref.current &&
				!ref.current.contains(e.target as Node) &&
				!((e.target as HTMLElement).closest("button")?.tagName.toLowerCase() === "button")
			)
				handler();
		}

		document.addEventListener("click", handleClick, capture);

		return () => document.removeEventListener("click", handleClick, capture);
	}, [handler, capture]);

	return ref;
}

export default useClickOutside;
