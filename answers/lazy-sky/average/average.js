/**
 *
 * @param {number[]} numbers - 숫자로 이루어진 배열
 * @returns {numbers} average - numbers의 평균값
 */
function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
}

export default solution;
