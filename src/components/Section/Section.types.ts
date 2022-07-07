import type { HTMLAttributes, ReactNode } from "react";

export type TitleProps = {
  children: ReactNode;
  className?: string;
};

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}
