import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const colorMap: Record<string, string> = {
  "#ffffff": "bg-white",
  "#000000": "bg-black",
  "#3b82f6": "bg-blue-500",
  "#22c55e": "bg-green-500",
  "#ef4444": "bg-red-500",
};
