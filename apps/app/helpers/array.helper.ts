export const groupBy = (array: any[], key: string) => {
  const innerKey = key.split("."); // split the key by dot
  return array.reduce((result, currentValue) => {
    const key = innerKey.reduce((obj, i) => obj?.[i], currentValue) ?? "None"; // get the value of the inner key
    (result[key] = result[key] || []).push(currentValue);
    return result;
  }, {});
};

export const orderArrayBy = (
  orgArray: any[],
  key: string,
  ordering: "ascending" | "descending" = "ascending"
) => {
  const array = [...orgArray];

  if (!array || !Array.isArray(array) || array.length === 0) return [];

  if (key[0] === "-") {
    ordering = "descending";
    key = key.slice(1);
  }

  const innerKey = key.split("."); // split the key by dot

  return array.sort((a, b) => {
    const keyA = innerKey.reduce((obj, i) => obj[i], a); // get the value of the inner key
    const keyB = innerKey.reduce((obj, i) => obj[i], b); // get the value of the inner key
    if (keyA < keyB) {
      return ordering === "ascending" ? -1 : 1;
    }
    if (keyA > keyB) {
      return ordering === "ascending" ? 1 : -1;
    }
    return 0;
  });
};

export const checkDuplicates = (array: any[]) => new Set(array).size !== array.length;

export const findStringWithMostCharacters = (strings: string[]) =>
  strings.reduce((longestString, currentString) =>
    currentString.length > longestString.length ? currentString : longestString
  );

export const checkIfArraysHaveSameElements = (arr1: any[] | null, arr2: any[] | null): boolean => {
  if (!arr1 || !arr2) return false;
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length === 0 && arr2.length === 0) return true;

  return arr1.length === arr2.length && arr1.every((e) => arr2.includes(e));
};
