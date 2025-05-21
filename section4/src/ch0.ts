// 함수 타입 정의
// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지
// 타입스크립트 버전 : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지

// 반환값 타입을 작성하지 않아도 return문을 기준으로 자동으로 타입 추론
function func(a:number, b:number): number {
    return a + b
}

// 화살표 함수 타입 정의
// 일반 함수와 마찬가지로 반환값 타입을 작성하지 않아도 return문을 기준으로 자동으로 타입 추론
const add = (a: number, b: number): number => a + b;


// 함수의 매개변수
// height는 선택적 매개변수
// 선택적 매개변수는 필수 매개변수보다 먼저 정의되면 안됨
function introduce(name = 'a', age: number, height?: number) {
    console.log(`name: ${name}`)
    // 타입 좁히기를 해야 함.
    // height는 선택적 매개변수로 number값이나 undefined가 될 수 있기 때문
    if(typeof height === 'number') {
        console.log(`height: ${height}`)
    }
}

// 초기값을 기준으로 매개변수 타입이 추론됨
// 주의사항
// 매개변수 작성할 때 정의한 타입과 초기값 타입이 다르면 안됨
// 함수를 호출할 때 인자를 매개변수 타입과 다른 타입으로 넣지 않도록 해야 함


// 나머지 매개변수
function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((x) => sum += x);

    return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);