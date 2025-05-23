import { Employee } from '../types/employee';

export const saintizeEmployeeData = (data: Partial<Employee>) => {
  const { id, ...sanitizedData } = data;
  return sanitizedData;
};