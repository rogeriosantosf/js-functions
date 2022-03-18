// stepper() // 1
// stepper() // 2
// stepper() // 3
// stepper() // 1

export const stepper = (function () {
  let executions = 0;

  return function execute() {
    executions = executions < 3 ? executions + 1 : 1;

    return executions;
  };
})();
