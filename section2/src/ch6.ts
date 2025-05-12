// Any 타입, Unknown 타입
//모든 타입의 값을 할당받을 수 있음
//자바스크립트에는 없는 타입
//특정 변수의 타입을 확실히 모를 때 사용 → unknown타입이 아무 메서드나 연산을 하지 못하도록 하므로 더 안전하여 특정 변수의 타입을 모를때에는 unknown타입을 사용할 것을 추천

//Any 타입
//모든 타입 할당이 가능 →  특정 변수의 타입을 확실히 모를 때 사용
//특정 타입의 변수에도 any 타입 값을 할당할 수 있음
//모든 타입 검사를 통과하지만 런타임에서 에러가 발생할 수 있음.

let anyVar: any = 10;
// 초기타입은 number이지만 문자열, boolean, 함수 등 제약없이 값, 타입 변경이 가능
anyVar = 'hello';
anyVar = true;
anyVar = {};

// 메서드, 연산 허용
// 런타임 에러 발생!
anyVar.toUpperCase();
anyVar.toFixed();

// 특정 타입의 변수에도 any 타입 값을 할당할 수 있음
let num: number = 10;
num = anyVar;

//Unknown 타입
//any와 동일하게 특정 변수의 타입을 확실히 모를 때 사용
//any 타입과 다르게 다른 타입 변수에 Unknown 타입 값을 할당할 수 없음

let unknownVar: unknown;

unknownVar ='';
unknownVar = 1;
unknownVar = () => {};

// 메서드, 연산 불가
//unknownVar.toUpperCase(); (X)
//unknownVar.toFixed();  (x)

// 다른 타입 변수에 Unknown타입 값을 할당할 수 없음
let num2: number = 10;
//num2 = unknownVar; (X)

// 타입 정제 후에만 다른 타입의 변수에 할당이 가능
if(typeof unknownVar === 'number') {
    num2 = unknownVar;
}