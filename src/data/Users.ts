export interface User {
    id: string;
    name: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'tested';
    token: string;
}