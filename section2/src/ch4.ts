// 타입 별칭
type User = {
    id: number;
    name: string;
    email: string;
    bio: string;
    nickname: string;
};

let user: User = {
    id: 1,
    name: 'a',
    email: '@',
    bio: 'hi',
    nickname: 'aa',
};

let user2: User = {
    id: 2,
    name: 'b',
    email: '@',
    bio: 'hi',
    nickname: 'bb',
};

// 인덱스 시그니처
// key와 value 규칙을 기준으로 객체 타입 정의
type CountryCodes = {
    [key: string] : string;
};

let countryCodes: CountryCodes = {
    // key, value 가 string인 규칙을 이용
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
};

type CountryNumberCodes = {
    [key: string] : number;
    // 필수적으로 가져야할 프로퍼티가 있다면 작성. 단, 인덱스 시그니처 value 타입과 동일해야 함
    // Korea: string; (X) number여야 함
    Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};