import { useState } from "react";

export function useImg() {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = () => {
    setIsExpanded(prevState => !prevState);
  };

  return { onToggle, isExpanded };
}
