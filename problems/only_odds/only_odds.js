/**
 *
 * @param {number[]} numbers - 숫자로 이루어진 배열
 * @returns {numbers} odds - 홀수로 이루어진 배열
 */
function solution(numbers) {
  return numbers.filter((x) => x % 2 === 1);
}

export default solution;
