import axios from 'axios';
import { Employee } from "../types/employee";

const api = axios.create({
   baseURL : import.meta.env.VITE_API_URL || '/api/employees'
});

export const getEmployees = async () => (await api.get<Employee[]>('/')).data;
export const createEmployee = async (employee: Omit<Employee, 'id'>) =>
    (await api.post<Employee>('/', employee)).data;
export const updateEmployee = async (id:number, employee: Partial<Employee>)=>
    (await api.patch<Employee>(`/${id}`, employee)).data;
export const deleteEmployee = async (id:number) =>
    (await api.delete<Employee>(`/${id}`)).data;