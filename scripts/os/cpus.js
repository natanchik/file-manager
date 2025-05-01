import os from 'os';

export const cpus = () => {
  console.log(os.availableParallelism());
  os.cpus().forEach((cpu) => console.log(`model: ${cpu.model.trim()}, clock rate: ${cpu.speed / 1000}GHz`));
};
