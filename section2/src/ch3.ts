// object 객체
// 1. object 타입
let user: object = {
    id: 1,
    name: 'a'
}
// object 타입은 객체 프로퍼티에 접근 불가능
// user.id (x)

// 2. 객체 리터럴 타입
let userInfo: {
    id?: number;
    name: string;
    } = {
    id: 2,
    name: 'b'
}

userInfo.id;

// 선택적 속성으로 지정
// ? 사용
let users: {
    id: number,
    name?: string
} = {
    id: 1,
    name: 'c'
}

// 읽기 전용 속성으로 지정 (수정 불가능)
// readonly 사용
let config: {
    readonly apiKey: string;
} = {
    apiKey: 'myApiKey',
}

// config.apiKey = 'newApiKey'; (x)

