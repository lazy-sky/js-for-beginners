/**
 *
 * @param {number[]} numbers - 숫자 배열
 * @returns {number[]} sorted - numbers를 내림차순으로 정렬한 배열
 */
function solution(numbers) {
  return numbers.sort((a, b) => b - a);
}

export default solution;
