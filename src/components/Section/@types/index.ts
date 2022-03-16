import { HTMLAttributes, ReactNode } from "react";

export type TitleProps = {
  children: ReactNode;
};

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  arrowClassName?: string;
  arrowImageURL?: string;
}

export interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}
