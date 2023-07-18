/**
 * Promise 객체를 더 쉽게 다룰 수 있도록 한 Syntax
 * Async & Await
 */

async function greet() {
    return new Promise((resolve, rejected) => {
        const a = Math.floor(Math.random() * 2);

        if (a === 1) {
            resolve(a);
        } else {
            rejected();
        }
    });
}

greet().then((num) => {
    console.log(num);
});

// async = promise 객체를 반환하는 역할
async function nice() {
    const a = new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello");
        }, 1000);
    });

    // resolve가 될 때까지 대기
    // await = then 역할
    const res = await a;
    return res;
}

nice();

async function wow() {
    try {
        const res = await fetch("유효X 주소");
        return res.json();

        // try구문에서 실행된 호출에서 Error가 발생되었을 때,
        // catch 블록으로 넘어와 던진 Error값을 잡는다.
    } catch (error) {
        console.log(error);
    }
}

wow();

async function loadJson(url) {
    const res = await fetch(url);

    try {
        if (res.status === 200) {
            return res.json();
        }
    } catch (error) {
        console.log(error);
    }
}

loadJson("no-such-user.json");

async function wait() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 프로미스 기반의 Async wait 함수에서 리턴값 === resolve(10)
    return 10;
}

function wait2() {
    return new Promise((resolve) => {
        setTimeout(resolve(10), 1000);
    });
}

wait2().then((res) => console.log(res));

async function f() {
    const res = await wait();
    console.log(res);

    // 일반 함수인 경우는 then을 통해 resolve의 결과값을 받는다.
    // wait().then((res) => console.log(res));

    // ...코드...
    // async wait()를 호출하고 그 결과인 10을 얻을 때까지 기다리려면 어떻게 해야 할까요?
    // f는 일반 함수이기 때문에 여기선 'await'를 사용할 수 없다는 점에 주의하세요!
}

f();
