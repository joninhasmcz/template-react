import { Employee } from '../types/employee';

type Props = {
    employees: Employee[];
    onEdit: (employee: Employee) => void;
    onDelete: (id: number) => void;
};

export const EmployeeList = ({ employees, onEdit, onDelete }: Props) => (
    <div className="employee-grid">
        {employees.map(employee => (
            <div key={employee.id} className="employee-card">
                <h3>{employee.name}</h3>
                <div className="employee-details">
                    <p>Cargo: {employee.position}</p>
                    <p>Departamento: {employee.department}</p>
                    <p>Salário: R$ {employee.salary.toLocaleString('pt-BR')}</p>
                    <p>Admitido em: {new Date(employee.hireDate).toLocaleDateString('pt-BR')}</p>
                </div>
                <div className="employee-actions">
                    <button onClick={() => onEdit(employee)}>Editar</button>
                    <button onClick={() => onDelete(employee.id)}>Excluir</button>
                </div>
            </div>
        ))}
    </div>
);