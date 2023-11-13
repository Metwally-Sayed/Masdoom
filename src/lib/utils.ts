import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import bcryptjs from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hashingPassword = async (password: string) => {
  const salt = await bcryptjs.genSalt(10);
  const hasedPassword = await bcryptjs.hash(password, salt);
  return hasedPassword;
};
