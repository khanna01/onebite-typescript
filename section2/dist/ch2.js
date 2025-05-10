// 배열
let numArr = [1, 2, 3];
let strArr = ['hello', 'world'];
let boolArr = [true, false];
// 배열 요소의 타입이 다양한 경우
let multArr = [1, 'hello'];
// 다차원 배열 타입 정의
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이와 타입이 고정된 배열 (배열은 타입만 고정)
// 튜플은 배열로 변환됨
let tup = [1, 2];
// tup = [1, 2, 3] (x)
// tup = ['1', '2']
let tup2 = [1, true, 'hi'];
tup2.push(2);
tup2.pop();
tup2.pop();
export {};
