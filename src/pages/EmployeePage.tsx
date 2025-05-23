import { useEmployees } from '../hooks/useEmployees';
import { dateFormatter } from '../utils/dateFormatter';
import { MainLayout } from '../layouts/MainLayout';

const EmployeePage = () => {
    const { employees } = useEmployees();

    return (
        <MainLayout>
            {employees.map(employee => (
                <div key={employee.id}>
                    <h2>{employee.name}</h2>
                    <p>
                        Admitido em: {dateFormatter(employee.hireDate, 'full-date')}
                        ({dateFormatter.diff(employee.hireDate).years} anos na empresa)
                    </p>

                </div>
            ))}
        </MainLayout>
    );
};
export default EmployeePage;