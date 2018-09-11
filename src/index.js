module.exports = function solveEquation(equation) {
  equation = equation
    .replace('x^2', '')
    .replace('x', '')
    .replace('+', '')
    .replace(/\s/g, '');
  const parameters = equation.split(/\s*\*/).map(num => +num);
  const [a, b, c] = parameters;
  const x = (-1 * b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  const y = (-1 * b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  return [Math.round(x), Math.round(y)].sort((a, b) => a - b);
};
