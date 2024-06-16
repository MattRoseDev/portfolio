export * from "./dates";

export function splitArrayToColumns<T>(flatArray: T[], numCols: number): T[][] {
  const newArray: T[][] = [];
  for (let c = 0; c < numCols; c++) {
    newArray.push([]);
  }
  for (let i = 0; i < flatArray.length; i++) {
    const mod = i % numCols;
    newArray[mod].push(flatArray[i]);
  }
  return newArray;
}
