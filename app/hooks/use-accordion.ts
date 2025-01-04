import { useState } from "react";

export function useAccordion(totalItems: number) {
  const [openItems, setOpenItems] = useState<boolean[]>(new Array(totalItems).fill(false));

  const toggleItem = (index: number) => {
    setOpenItems((prev) => prev.map((item, i) => (i === index ? !item : false)));
  };

  return { openItems, toggleItem };
}
