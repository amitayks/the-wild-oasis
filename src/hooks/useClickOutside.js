import { useEffect, useRef } from "react";

function useClickOutside(handler, captur = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !(e.target.closest("button")?.tagName.toLowerCase() === "button")
      )
        handler();
    }

    document.addEventListener("click", handleClick, captur);

    return () => removeEventListener("click", handleClick, captur);
  }, [handler, captur]);

  return ref;
}

export default useClickOutside;
