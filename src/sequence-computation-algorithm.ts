const fibonacciSequenceComputation = (n: number): any => {
  let fibSequenceArr = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibSequenceArr.push(fibSequenceArr[i - 1] + fibSequenceArr[i - 2]);
  }
  return fibSequenceArr;
};

export default fibonacciSequenceComputation;
