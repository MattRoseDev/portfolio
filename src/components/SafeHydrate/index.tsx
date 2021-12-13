import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function SafeHydrate(props: Props) {
  const { children } = props;

  return (
    <div suppressHydrationWarning>
      {typeof document === "undefined" || typeof window === "undefined"
        ? null
        : children}
    </div>
  );
}
