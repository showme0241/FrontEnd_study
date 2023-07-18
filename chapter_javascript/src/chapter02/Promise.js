function goToSchool() {
    console.log("학교에 갑니다.");
}

function arriveAtSchool() {
    // Promise 객체 > 콜백
    // 콜백 인자 = (성공, 실패)
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("학교에 도착");
            resolve();
        }, 1000);
    });
}

function study() {
    console.log("열심히 공부를 합니다.");
}

goToSchool();

// then의 콜백 === resolve
arriveAtSchool().then(() => {
    study();
});

function arriveAtSchool_tobe() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let status = Math.floor(Math.random() * 2);

            if (status === 1) {
                resolve("학교에 도착");
            } else {
                reject("넘어짐");
            }
        }, 1000);
    });
}

function cure() {
    console.log("양호실 가");
}

/**
 * 프로미스 객체는... {
 *  then: ()=>{},
 *  catch: () => {}
 * }
 */

arriveAtSchool_tobe()
    .then((res) => {
        console.log(res);
        study();
    })
    .catch((err) => {
        console.log(err);
        cure();
    });

/**
 * Promise의 장점
 * => 콜백 지옥 탈출
 * => 체이닝
 */
