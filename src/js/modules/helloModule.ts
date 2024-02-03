export const init = () => {
  console.log('On init execution');

  return () => {
    console.log('Before unload execution');
  }
};
