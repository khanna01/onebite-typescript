// enum 타입 (열거형 타입)
// 자바스크립트에는 없는 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum은 컴파일한 결과의 자바스크립트 코드에서 사라지지 않음

// 숫자형 enum
// 값이 숫자인 경우

// 사용자 권한에 해당하는 여러 값에 이름을 부여
enum Role {
    ADMIN = 0,   // 관리자
    USER = 1,    // 일반 유저
    GUEST = 2,   // 게스트
}

const user1 = {
    name: 'a',
    role: Role.ADMIN,
};

const user2 = {
    name: 'b',
    role: Role.USER,
};

const user3 = {
    name: 'c',
    role: Role.GUEST,
};

console.log(user1, user2, user3);
// { name: 'a', role: 0 } { name: 'b', role: 1 } { name: 'c', role: 2 }

// 직접 숫자를 할당하지 않아도 자동으로 순서대로 0부터 숫자 부여됨
enum Role1 {
    ADMIN,   // 관리자 0
    USER,    // 일반 유저  1
    GUEST,   // 게스트   2
}

// 0이 아닌 다른 숫자로 시작해도 해당 숫자부터 자동으로 부여됨
enum Role2 {
    ADMIN = 10,   // 관리자 10
    USER,    // 일반 유저  11
    GUEST,   // 게스트   12
}

// 중간의 숫자를 바꾼 경우 그 숫자부터 자동으로 부여
enum Role3 {
    ADMIN,   // 관리자 0
    USER = 10,    // 일반 유저  10
    GUEST,   // 게스트   11
}

// 문자열 enum
// 값이 문자열
enum Language {
    korean = 'ko',
    english = 'eng',
}