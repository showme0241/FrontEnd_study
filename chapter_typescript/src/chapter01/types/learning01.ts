// 객체 리터럴 타입
let user: {
    id?: number; // 옵셔널 프로퍼티 (선택적 프로퍼티)
    name: string;
} = {
    id: 1,
    name: "빈빈빈",
};

// 구조적 타입 시스템
// Property Based Type System

user = {
    name: "홍길동",
};

let config: {
    // 재할당되서는 안될 경우, 읽기전용으로 변경
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
};
