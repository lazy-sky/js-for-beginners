import solution from "./sort";

test("오름차순으로 정렬된 배열", () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test("두 자리수 숫자가 있는 경우", () => {
  expect(solution([1, 2, 10, 9])).toEqual([10, 9, 2, 1]);
});
