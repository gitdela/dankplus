import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const requestFormschema = z.object({
  firstname: z.string().min(1, 'Required'),
  lastname: z.string().min(1, 'Required'),
  address: z.string().min(1, 'Required'),
  phone: z.string().min(1, 'Required'),
  email: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
});
