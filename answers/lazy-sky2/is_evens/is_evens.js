/**
 *
 * @param {number[]} numbers - 숫자로 이루어진 배열
 * @returns {boolean}
 */
function solution(numbers) {
  return numbers.every((x) => x % 2 === 0);
}

export default solution;
