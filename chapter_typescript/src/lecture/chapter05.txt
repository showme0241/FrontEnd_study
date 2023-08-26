/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "빈태찬",
    profile: {
        nickname: "been",
    },
    urls: ["https://been.com"],
};

let { id, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

// any 진화 : 암묵적 any 타입 (명시적 any와는 다름)
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const numb = 10;
const str = "hello";

let arr = [1, "string"];
// (string | number)[]
