// void
// void : 공허 => 아무것도 없다
//아무것도 없음을 의미하는 타입

// 반환값이 아무것도 없는 함수의 반환값으로 사용 (null이나 undefined는 return null, return undefined를 해줘야 함)
// 반환값이 문자열인 함수
function func1(): string {
    return 'hello';
}

// 반환값이 아무것도 없는 함수
function func2(): void {
    console.log('hello');
}

let a: void;
// 다른 타입의 값을 할당할 수 없음
// a = 1;   (X)
// a = hello;   (X)
// a = {};   (X)
// undefined 할당 가능
a = undefined;
// strictNullChecks를 끄면 null 값 할당도 가능
// a = null;

// never ⇒ 존재하지 않는
// 불가능한 타입
// 종료되지 않아 반환값 자체가 존재할 수 없는 함수의 반환값으로 사용
// 무한루프로 인해 함수가 정상적으로 종료되지 않아 반환값이 있을 수가 없는 경우
function func3(): never {
    while(true) {}
}

// 시작하자마자 오류를 던지는 함수의 반환값으로도 사용
function func4(): never {
    throw new Error();
}

// 아무런 값을 담을 수 없음 (any 타입조차도!!)
// void랑 다르게 undefined와 null 값도 할당 불가능(엄격한 null 검사를 꺼도)
// let a: void;
// a = 1;   (X)
// a = hello;   (X)
// a = {};   (X)
// a = undefined; (X)
// a = null; (X)
