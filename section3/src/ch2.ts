// Unknown 타입
// 타입 게층도 최상단에 위치 => 모든 타입의 슈퍼 타입

function unknownExam() {
    // unknown 타입이라고 정의하면 모든 값을 할당할 수 있음
    // 모든 타입의 슈퍼 타입이므로 다른 타입을 업캐스팅 가능
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = undefined;

    // 다운캐스팅 불가능
    let unknownVar: unknown;
    // let str: string = unknownVar;  (X)
    // let num: number = unknownVar;  (X)
}

// Never 타입
// 타입 계층도 최하위에 위치 => 모든 타입의 서브 타입
// 공집합 : 아무것도 들어있지 않은 집합

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 다운캐스팅 불가
    // let never1: never = 10;  (X)
    // let never2: never = 'hello';  (X)
    // let never3: never = true;  (X)
}


// void 타입

function voidExam() {
    function voidFunc(): void {
        console.log('a');
        // void는 undefined의 슈퍼 타입이르모 void 타입의 함수가 undefined를 반환해도 됨
        return undefined;
    }

    let voidVar: void = undefined;
}

// any 타입
// 치트키
// 모든 타입의 슈퍼 타입이면서 모든 타입의 서브타입 (never 제외)

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    // unknown 타입 다운 캐스팅이 가능
    anyVar = unknownVar;

    // any 타입 다운 캐스팅이 가능
    undefinedVar = anyVar;

    // never 타입으로는 다운 캐스팅 불가능
    // neverVar = anyVar;  (X)
}
