import { availableParallelism } from 'os';

export const cpus = () => console.log(availableParallelism());
