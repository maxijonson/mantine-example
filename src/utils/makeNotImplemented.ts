export default (name: string) => () => {
  throw new Error(`${name} is not implemented.`);
};
