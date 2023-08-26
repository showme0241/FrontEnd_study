/**
 * 타입 좁히기
 * 조거문 등을 통해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Personal = {
    name: string;
    age: number;
};

// 타입 가드 : 타입 좁히기 (네로잉)
function func(value: number | string | Date | null | Personal) {
    if (typeof value === "number") {
        // value => number 추론
        console.log(value.toFixed());
    }

    if (typeof value === "string") {
        // value => string 추론
        console.log(value.toUpperCase());
    }

    if (value instanceof Date) {
        // null값일 경우에도 객체 형태
        // Date (내장) 객체임으로 타입 가드
        console.log(value.getTime());
    }

    if (value !== null && typeof value === "object" && "age" in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
