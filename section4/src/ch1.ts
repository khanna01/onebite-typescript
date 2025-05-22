// 함수 타입 표현식
//function type expression
// 함수의 타입을 별도로 정의하는 방법
// 비슷한 형식의 함수들을 여러 개 정의해야 할 때 매개변수와 반환값을 일일이 적지 않아도 됨

// 매개변수 타입과 반환값 타입을 정의
type Add = (a:number, b:number) => number;

// 매개변수와 반환값 타입을 작성하지 않아도 됨
const add1:Add = (a, b) => a + b;

type Operation = (a: number, b:number) => number;

const add: Operation = (a, b) => a + b;
// 타입 별칭없이도 타입을 정의할 수 있음
// const add: (a: number, b:number) => number = (a, b) => a + b;
// Operation이 (a: number, b:number) => number이기 때문
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니처 (콜 시그니처)
// 함수 타입 표현식과 동일한 기능을 함
// 함수의 타입을 분리해서 정의할 수 있음

type Operation2 = {
    // (매개변수) : 반환값
    // function func(a: number): void {}
    // 함수를 직접 정의하는 것처럼 (a: number): void 부분과 동일!!
    (a: number, b: number): number;
    // 프로퍼티 정의가 가능! 하이브리드 타입 -> 함수는 객체이기 때문
    name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1, 2);
add2.name;