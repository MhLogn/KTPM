import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDuration = (duratiton: number) => {
  const seconds = Math.floor((duratiton % 60000) / 1000);
  const minutes = Math.floor(duratiton / 60000);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

export const snakeCaseToTitle = (str: string) => {
  return str.replace(/_/g," ").replace(/\b\w/g, (char) => char.toUpperCase());
};