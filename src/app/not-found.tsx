import { Metadata } from "next";
import { NotFound } from "@/features/NotFound";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFoundPage() {
  return <NotFound />;
}
