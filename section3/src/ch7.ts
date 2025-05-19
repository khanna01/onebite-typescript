// 타입 좁히기
//조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
//타입을 좁힐 수 있는 typeof, instanceof 와 같은 연산자를 타입 가드라고 함
//instanceof 연산자는 클래스 인스턴스에만 작동함 (타입은 불가)

// | 타입 가드 방식 | 사용 대상 | 예시 조건 |
// | --- | --- | --- |
// | typeof | 기본형 타입 | typeof x === ‘string’ |
// | instanceof | 클래스 인스턴스 | x instanceof MyClass |
// | ‘key’ in object | 속성 존재 여부 | ‘email’ in user |
// | 사용자 정의 가드 | 직접 만든 타입 판단 함수 | isAdmin(user): user is Admin |


type Person = {
    name: string;
    age: number;
};

function func(value: number | string | Date | null | Person) {
    // 유니온 타입
    console.log(value);
    // 타입스크립트는 컴파일 시점에 확실하지 않으면 안전하지 않다고 판단해 에러를 냄
    // value는 매개 변수 타입으로 언제든지 어떤 값이 들어올지 모르기 때문에 타입을 좁힐 수 없어 에러
    // value.toUpperCase();  (X)
    // value.toFixed();    (X)

    // number로 타입 좁히기
    // value -> number 타입이 됨
    if(typeof value === 'number') {
        console.log(value.toFixed());
    } else if(typeof value === 'string') {
        // string로 타입 좁히기
        // value -> string 타입이 됨
        console.log(value.toUpperCase());
    } else if(value instanceof Date) {
        // if(typeof value === 'object')했다면 null도 object 타입으로 인식하기 때문에 value.getTime() 메서드 에러 발생 -> instanceof 타입 가드로 해결
        console.log(value.getTime());
    } else if(value && 'age' in value) {
        // if(value instanceof Person)를 하면 Person은 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.라는 에러가 발생함
        // instanceof 우측은 타입이어선 안됨. Person 타입이므로 에러
        // value가 null이나 undefined가 아니면서 age 프로퍼티를 가지고 있다 -> Person 타입이라고 보장할 수 있기 때문
        console.log(`${value.name}은 ${value.age}살입니다.`);
    }
}