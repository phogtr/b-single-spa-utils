// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {
  return "public api function";
}

export const helloWorldFc = () => {
  return {
    echo: "Hello World Fc utils",
  };
};
