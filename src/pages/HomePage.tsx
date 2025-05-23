import { useState } from 'react';
import { EmployeeList } from '../components/EmployeeList';
import { EmployeeForm } from '../components/EmployeeForm';
import { useEmployees } from '../hooks/useEmployees';
import { Employee } from '../types/employee';


export const HomePage = () => {
    const { employees, loading, addEmployee, editEmployee, removeEmployee } = useEmployees();
    const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

    const handleSubmit = (employee: Omit<Employee, 'id'>) => {
        if (editingEmployee) {
            editEmployee(editingEmployee.id, employee);
        } else {
            addEmployee(employee);
        }
        setEditingEmployee(null);
    };

    return (
        <div className="page-container">
            <h1>Gestão de Funcionários</h1>

            <EmployeeForm
                onSubmit={handleSubmit}
                initialData={editingEmployee}
            />

            {loading ? (
                <p>Carregando funcionários...</p>
            ) : (
                <EmployeeList
                    employees={employees}
                    onEdit={setEditingEmployee}
                    onDelete={removeEmployee}
                />
            )}
        </div>
    );
};