/**
 * 타입 단언 (Assertion)
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "빈태찬";
person.age = 30;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;

/**
 * 타입 단언 규칙
 * 값 as 단언 <= 단언식
 *
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타임어이야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; // 다중단언 => 좋은 방법 X

/**
 * const 단언
 *
 */

let num = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

// const 단언을 할 경우, property 수정 불가

/**
 * Non Null 단언
 * 옵셔널 체이닝의 경우, undefined를 추론할 수 있어 오류발생
 */

type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "빈태찬",
};

// const len: number = post.author?.length;
const leng: number = post.author!.length; // 값 있어, 위험한 문법이긴 함
