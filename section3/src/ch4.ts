// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재함

// 합집합 - Union 타입
// | 연산자 사용
let a: string | number;
a = 1;
a = 'hello';

let arr: (number | string)[] = [1, 'hello'];

// 객체 타입을 이용한 유니온 타입
type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: "",
};

let union2: Union1 = {
    name: "",
    language: "",
};

// Dog 타입도 될 수 있고 Person 타입도 될 수 있음
let union3: Union1 = {
    name: "",
    color: "",
    language: "",
};

// Dog 타입과 Person 타입 어디에도 해당하지 않으므로 할당 불가능
// let union4: Union1 = {
//	 name: "",
// }



// 교집합 타입 - Intersection 타입
// & 연산자 사용
// 기본타입들로 교집합 타입을 만들면 대부분 공집합 -> 서로 공유하거나 겹치는 값이 없기 때문
// 주로 객체 타입에 사용

// number 타입과 string 타입의 교집합은 공집합이라서 variable은 never 타입으로 정의된다
let variable: number & string;

type Dog1 = {
    name: string;
    color: string;
};

type Person1 = {
    name: string;
    language: string;
};

type Intersection = Dog1 & Person1;

// Dog 타입에도 해당하고 Person 타입에도 해당하는 모든 프로퍼티를 포함하는 객체를 할당해야 함
let intersection1: Intersection = {
    name: '',
    color: '',
    language: '',
};