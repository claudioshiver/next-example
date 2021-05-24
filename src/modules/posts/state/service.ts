// A mock function to mimic making an async request for data
import IPost from "../models/IPost";
import { v5 } from 'uuid';

export function fetchPosts(number: number, usersNumber: number): Promise<{ data: Partial<IPost>[] }> {
    return new Promise((resolve, reject) => {
        if(Math.round(Math.random() * 100) % 5 === 1) {
            reject(new Error('Random Error for posts'));
        }

        const usersIds = Array(usersNumber)
            .fill(null)
            .map((_, index) => v5(String('user' + index), v5.URL));

        const randomPost = (_, index) => ({
            id: v5(String('post' + index), v5.URL),
            message: 'Lorem ipsum quantum dolor sit amet',
            userId: usersIds[Math.floor(Math.random() * ((usersIds.length - 1) + 1))]
        });

        const posts = Array(number).fill({}).map(randomPost);

        setTimeout(() => resolve({ data: posts }), 500);
    });
}
