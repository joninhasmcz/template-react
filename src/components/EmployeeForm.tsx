import { useState, useEffect } from 'react';
import { Employee } from '../types/employee';

type Props = {
    onSubmit: (employee: Omit<Employee, 'id'>) => void;
    initialData?: Employee | null;
};

export const EmployeeForm = ({ onSubmit, initialData }: Props) => {
    const [formData, setFormData] = useState<Omit<Employee, 'id'>>({
        name: '',
        position: '',
        department: '',
        salary: 0,
        hireDate: new Date().toISOString().split('T')[0]
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="employee-form">
            <label>
                Nome:
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
            </label>

            <label>
                Cargo:
                <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                />
            </label>

            <label>
                Departamento:
                <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    required
                >
                    <option value="">Selecione</option>
                    <option value="TI">TI</option>
                    <option value="Design">Design</option>
                    <option value="RH">RH</option>
                    <option value="Vendas">Vendas</option>
                </select>
            </label>

            <label>
                Salário:
                <input
                    type="number"
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: Number(e.target.value) })}
                    min="0"
                    step="100"
                    required
                />
            </label>

            <label>
                Data de Admissão:
                <input
                    type="date"
                    value={formData.hireDate}
                    onChange={(e) => setFormData({ ...formData, hireDate: e.target.value })}
                    required
                />
            </label>

            <button type="submit">
                {initialData ? 'Atualizar Funcionário' : 'Adicionar Funcionário'}
            </button>
        </form>
    );
};