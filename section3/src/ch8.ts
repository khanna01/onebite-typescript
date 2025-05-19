// 서로소 유니온 타입
//교집합이 없는 타입들로만 만든 유니온 타입
//예) number와 string 타입으로 만든 유니온

// tag 프로퍼티가 각각 달라 User 타입은 서로소 유니온 타입이 됨. 교집합이 없음
type Admin = {
    tag: 'ADMIN';
    name: string;
    kickCount: number;
};

type Member = {
    tag: 'MEMBER';
    name: string;
    point: number;
};

type Guest = {
    tag: 'GUEST';
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// 타입 좁히기
// if('kickCount' in user), if('point' in user) 등으로 작성하면 코드가 직관적이지 않음.
function login(user:User) {
    if(user.tag === 'ADMIN') {
        // Admin 타입으로 좁히기
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if(user.tag === 'MEMBER') {
        // Member 타입으로 좁히기
        console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
    } else {
        // Guest 타입으로 좁히기
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
    }
}

// 유용한 경우

// 비동기 작업의 결과를 처리하는 객체
// error와 response가 선택적 프로퍼티라서 타입이 좁혀지지 않음
type AsyncTask = {
    state: 'LOADING' | 'FAILED' | 'SUCCESS';
    error?: {
        message: string;
    };
    response?: {
        data: string;
    };
};

function processResult(task: AsyncTask) {
    switch(task.state) {
        case 'LOADING': {
            console.log('로딩중');
            break;
        }
        case 'FAILED': {
            // error에 옵셔널 체이닝을 사용하지 않으면 에러가 발생. null이나 undefined일 수 있기 때문
            // 타입이 FAILED로 좁혀지지 않았음
            // error?는 없을 수도 있다는 의미로, task.state가 'FAILED'여도 error가 있다는 보장은 타입 상으로 없음임
            console.log(`에러 발생: ${task.error?.message}`);
            break;
        }
        case 'SUCCESS': {
            // response에 옵셔널 체이닝을 사용하지 않으면 에러가 발생. null이나 undefined일 수 있기 때문
            // 타입이 FAILED로 좁혀지지 않았음
            console.log(`에러 발생: ${task.response?.data}`);
            break;
        }
    }
}

const loading: AsyncTask = {
    state: 'LOADING'
};

const failed: AsyncTask = {
    state: 'FAILED',
    error: {
        message: '오류 발생 원인은 ~',
    },
};

const success: AsyncTask = {
    state: 'SUCCESS',
    response: {
        data: '데이터~',
    },
};

// 해결방안
type LoadingTask = {
    state: 'LOADING';
};

type FailedTask = {
    state: 'FAILED';
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: 'SUCCESS';
    response: {
        data: string;
    };
};

type AsyncTask2 = LoadingTask | FailedTask | SuccessTask;

function processResult2(task: AsyncTask2) {
    // tase의 state에 따라 타입이 좁혀짐.
    // AsyncTask2가 서로소 유니온 타입이기 때문.
    switch(task.state) {
        case 'LOADING': {
            console.log('로딩중');
            break;
        }
        case 'FAILED': {
            console.log(`에러 발생: ${task.error.message}`);
            break;
        }
        case 'SUCCESS': {
            console.log(`에러 발생: ${task.response.data}`);
            break;
        }
    }
}