export type Photo = {
  id: string;
  width: number;
  height: number;
  blurHash?: string;
  color: string | null;
  preview: string;
  src: string;
};
