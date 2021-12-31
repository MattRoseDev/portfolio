import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function StoryContainer(props: Props) {
  const { children } = props;
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
