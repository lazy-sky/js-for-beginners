import solution from "./average";

test("1부터 10까지의 수의 평균", () => {
  expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(5.5);
});

test("0과 10의 평균", () => {
  expect(solution([0, 10])).toEqual(5);
});

test("원소가 하나인 경우", () => {
  expect(solution([1])).toEqual(1);
});

test("음수값을 포함한 평균", () => {
  expect(solution([-1, 1])).toEqual(0);
});
