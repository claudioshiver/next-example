// A mock function to mimic making an async request for data
import IUser from "../models/IUser";
import { v5 } from 'uuid';

export function fetchUsers(number: number): Promise<{ data: Partial<IUser>[] }> {
    return new Promise((resolve, reject) => {
        if(Math.round(Math.random() * 100) % 5 === 1) {
            reject(new Error('Random Error for users'));
        }

        const randomUser = (_, index) => ({
            id: v5(String('user' + index), v5.URL),
            name: 'firstName ' + index,
            surname: 'lastName ' + index
        });

        const users = Array(number).fill({}).map(randomUser);

        setTimeout(() => resolve({ data: users }), 500);
    });
}
