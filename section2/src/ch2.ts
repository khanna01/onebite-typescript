// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'world'];

let boolArr: Array<boolean> = [true, false];

// 배열 요소의 타입이 다양한 경우
let multArr: (number | string)[] = [1, 'hello'];

// 다차원 배열 타입 정의
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열 (배열은 타입만 고정) -> 튜플은 배열로 변환됨(자바스크립트 코드)
let tup: [number, number] = [1, 2];
// tup = [1, 2, 3]; (x)
// tup = ['1', '2']; (x)

let tup2: [number, boolean, string] = [1, true, 'hi'];
// push, pop 같은 배열 메서드 사용 시 길이, 타입 제한이 없어짐
tup2.push(2);
tup2.pop();
tup2.pop();