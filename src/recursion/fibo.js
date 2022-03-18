// fibonacci sequence -> 0,1,1,2,3,5,8
// fibo(5) -> 3

export const fibo = (function () {
  const memo = [];
  memo[0] = 0;
  memo[1] = 1;

  return function fibonacci(position) {
    if (memo[position] == null) {
      memo[position] = fibonacci(position - 1) + fibonacci(position - 2);
    }

    return memo[position];
  };
})();
