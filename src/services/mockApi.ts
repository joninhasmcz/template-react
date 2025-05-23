import axios from 'axios';
import MockAdapter from '../types/employee';

const mock = new MockAdapter(axios);

let mockEmployees: Employee[] = [
    {
        id: 1,
        name: 'João Silva',
        position: 'Desenvolvedor Front-end',
        department: 'TI',
        salary: 8500,
        hireDate: '2022-01-15'
    },
    {
        id: 2,
        name: 'Maria Souza',
        position: 'UX Designer',
        department: 'Design',
        salary: 7200,
        hireDate: '2021-03-22'
    }
];

mock.onGet('/employees').reply(200, mockEmployees);
mock.onPost('/employees').reply((config) => {
    const newEmployee = JSON.parse(config.data);
    newEmployee.id = mockEmployees.length + 1;
    mockEmployees.push(newEmployee);
    return [201, newEmployee];
});
mock.onPatch(/\/employees\/\d+/).reply((config) => {
    const id = parseInt(config.url?.split('/').pop() || '0');
    const update = JSON.parse(config.data);
    const index = mockEmployees.findIndex(emp => emp.id === id);
    mockEmployees[index] = { ...mockEmployees[index], ...update };
    return [200, mockEmployees[index]];
});
mock.onDelete(/\/employees\/\d+/).reply((config) => {
    const id = parseInt(config.url?.split('/').pop() || '0');
    mockEmployees = mockEmployees.filter(emp => emp.id !== id);
    return [204];
});