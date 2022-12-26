import solution from "./sort";

test("숫자 배열", () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test("문자열 배열", () => {
  expect(solution([1, 2, 10, 9])).toEqual([10, 9, 2, 1]);
});
