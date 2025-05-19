// 타입 단언 (타입 assertion)
// 값의 타입을 프로그래머가 단언(지정)하는 것
// as 키워드를 이용해 타입을 단언하도록 함
// 단언식 : 값 as 단언

// 사용 상황
// 1. 타입스크립트가 타입을 정확히 모를 때
// 2. 우리가 더 많은 정보를 알고 있을 때
// 3. DOM 조작, API 응답 등 타입 불확실한 상황

type Person = {
    name: string;
    age: number;
};

// Person 타입으로 단언함
let person = {} as Person;
person.name = 'h';
person.age = 10;


// 초과 프로퍼티 검사 상황에도 적용 가능
type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: '돌돌이',
    color: 'black',
    // Dog 타입 프로퍼티로 존재하지 않는 초과 프로퍼티가 있어도 Dog 타입으로 단언하여 오류가 발생하지 않음
    breed: '레브라도'
} as Dog;

// 타입 단언 규칙
// 값 as 단언
// A as B
// A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함

// never가 모든 타입의 서브타입이므로 A가 B의 슈퍼타입 조건을 만족하여 단언 가능
let num1 = 10 as never;
// unknown이 모든 타입의 슈퍼타입이므로 A가 B의 서브타입 조건을 만족하여 단언 가능
let num2 = 10 as unknown;

// 단언 불가능
// let num3 = 10 as string;
// 다중단언으로 단언을 가능하게 할 수 있음(추천하지 않음.)
let num3 = 10 as unknown as string;


// const 단언
// const로 선언한 것과 동일한 효과를 보도록 하는 것
// 객체 타입과 사용할 때 활용도가 높음

// number 리터럴 타입으로 단언
let num4 = 10 as const

// readonly 프로퍼티로 변경됨
let cat = {
    name: '야옹이',
    color: 'yellow',
} as const;

// cat.name = '' (X)

// **Non Null 단언**
// 어떤 값이 null이나 undefined 타입이 아니라는 것을 타입스크립트 컴파일러에게 알려주는 것
// ! 연산자 사용

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: '게시글1',
    author: 'a',
};

// len의 값이 undefined가 될 수도 있어 number 타입에 할당되지 못하게 오류가 발생
// ? 옵셔널 체이닝은 값이 없으면 undefined가 됨
// const len: number = post.author?.length;  (X)
// ! 연산자를 이용해 이 값이 있을 것이라고 단언해 할당이 가능하도록 함
const len: number = post.author!.length;