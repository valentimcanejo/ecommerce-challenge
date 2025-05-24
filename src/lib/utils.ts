import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const colorMap: Record<string, string> = {
  "#ffffff": "bg-white",
  "#86f1ff": "bg-blue-400",
  "#c0f5c9": "bg-green-400",
};

export const colorNames: Record<string, string> = {
  branco: "white",
  azul: "blue",
  verde: "green",
};

export const changeColorLanguage = (color: string) => colorNames[color] || "";
