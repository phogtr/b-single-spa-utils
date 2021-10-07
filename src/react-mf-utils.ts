// Anything exported from this file is importable by other in-browser modules.
export const useLocalStorage = () => {
  const getData = () => {
    const data = localStorage.getItem("data");
    const parsedData = JSON.parse(data || "{}");
    return parsedData;
  };

  const saveData = (newData: any) => {
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return {
    localStorageData: getData(),
    setLocalStorageData: saveData,
  };
};

export const clearLocalStorage = () => {
  localStorage.removeItem("data");
};
