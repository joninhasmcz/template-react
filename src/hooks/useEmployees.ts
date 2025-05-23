import { useEffect, useState } from 'react';
import { Employee } from '../types/employee';
import {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from '../services/api';

export const useEmployees = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const data = await getEmployees();
            setEmployees(data);
        } catch (error) {
            console.error('Erro ao buscar funcionários:', error);
        } finally {
            setLoading(false);
        }
    };

    const addEmployee = async (employee: Omit<Employee, 'id'>) => {
        const newEmployee = await createEmployee(employee);
        setEmployees(prev => [...prev, newEmployee]);
    };

    const editEmployee = async (id: number, updates: Partial<Employee>) => {
        const updatedEmployee = await updateEmployee(id, updates);
        setEmployees(prev =>
            prev.map(emp => emp.id === id ? updatedEmployee : emp)
        );
    };

    const removeEmployee = async (id: number) => {
        await deleteEmployee(id);
        setEmployees(prev => prev.filter(emp => emp.id !== id));
    };

    return { employees, loading, addEmployee, editEmployee, removeEmployee };
};