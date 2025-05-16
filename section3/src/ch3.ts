// 객체 타입 호환성
// 어떤 객체가 어떤 객체 타입과 호한이 되는가
// 프로퍼티를 기준으로 호환성이 결정됨

// 슈퍼 타입
type Animal = {
    name:  string;
    color: string;
};

// 서브 타입
type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "black",
    breed: "레브라도"
};

// 업캐스팅
animal = dog;

// 다운캐스팅
// dog = animal;  (X)

// 초과 프로퍼티 검사
// 변수를 초기화활 때 초기값으로 객체 리터럴을 사용하면 발동하는 검사
// 실제 타입에는 정의하지 않은 프로퍼티가 있으면 막는다

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programming: ProgrammingBook = {
    name: 'A',
    price: 10000,
    skill: 'reactjs'
};

book = programming;

let book2: Book = {
    name: 'B',
    price: 20000,
    // 초기호값으로 객체 리터럴을 사용해 초과 프로퍼티 검사로 인해 오류가 뜸
    //skill: 'reactjs'
};