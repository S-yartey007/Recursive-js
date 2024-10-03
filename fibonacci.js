function fibs(n) {
  if (n === 0) return [];
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    let arr = [0, 1];
    let sum;
    for (let i = 2; i < n; i++) {
      sum = arr[arr.length - 2] + arr[arr.length - 1];

      arr.push(sum);
    }
    return arr;
  }
}
const fibsRecursive = function (n) {
  if (n === 0) return [];
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    const arr = fibsRecursive(n - 1);
    const nex = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nex);
    return arr;
  }
};
console.time("iterative time");
const result = fibs(40);
console.timeEnd("iterative time");

console.time("recursive time");
const result2 = fibsRecursive(40);
console.timeEnd("recursive time");

/* const startTime = performance.now();
const result2 = fibsRecursive(40);
const endTime = performance.now();
const timeElapsed = endTime - startTime;
console.log(timeElapsed);
 */

/* const startTime = performance.now();
const result2 = fibs(40);
const endTime = performance.now();
const timeElapsed = endTime - startTime;
console.log(timeElapsed);
 */
