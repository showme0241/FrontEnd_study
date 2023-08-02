/*
    '전역 컨텍스트': {
        변수객체: {
        arguments: null,
        variable: ['name', 'wow', 'say'],
        },
        scopeChain: ['전역 변수객체'],
        this: window,
    }
    
    'say 컨텍스트': {
        변수객체: {
            arguments: null,
            variable: ['name'], // 초기화 후 [{ name: 'nero' }]가 됨
        },
        scopeChain: ['say 변수객체', '전역 변수객체'],
        this: window,
    }

    'wow 컨텍스트': {
        변수객체: {
            arguments: [{ word : 'hello' }],
            variable: null,
        },
        scopeChain: ['wow 변수객체', '전역 변수객체'],
        this: window,
    }
 */

// (1)변수 선언 (4)값 할당
var name = "zero";

// (2)함수 선언 (14) 내부진입
function wow(word) {
    // (15)매개변수 선언

    // (16)console 확인 (17)log 메서드 확인 (18)호출
    console.log(word + " " + name);
}

// (3)함수 선언 (6) 내부 진입
function say() {
    // (7)변수 선언 (10)값 할당
    var name = "nero";

    // (8)console 확인 (9)log 메서드 확인 (11)호출
    console.log(name);

    // (12) 함수 호출 (13) 인자 전달
    wow("hello");
}

// (5) 함수 호출
say();
