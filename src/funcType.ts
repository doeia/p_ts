function add(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  return cb(result);
}
let CombineValues: (a: number, b: number) => number;
