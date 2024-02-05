import { userInfo } from 'os';

export const getUsername = () => console.log(userInfo().username);
