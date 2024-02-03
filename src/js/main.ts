import { init as initHelloModule } from './modules/helloModule.ts';

const unloadCallbacks: Array<() => void> = [];

const callbackDomLoaded = () => {
  // include all the necessary js modules
  // unloadCallbacks.push(initModule());
  unloadCallbacks.push(initHelloModule());
};

window.addEventListener("DOMContentLoaded", callbackDomLoaded);
window.addEventListener("beforeunload", () => {
  window.removeEventListener("DOMContentLoaded", callbackDomLoaded);

  unloadCallbacks.forEach((callback) => callback());
});
