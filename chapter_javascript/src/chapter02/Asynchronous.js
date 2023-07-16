async function Func(param1, param2, callbackFunc) {
    // 서버 데이터 호출 로직
    const res = await `데이터 호출 메서드(url, body: ${(param1, param2)})`;

    // 콜백 함수로 결과를 인자로 넘겨...
    callbackFunc(res?.data);
}

function callbackFunc(res) {
    // 호출 데이터 이용
    console.log(res);
}

Func("param1", "param2", "callbackFunc");

// 예시
function buy_asis(item, price, quantity, callback) {
    console.log(
        item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다."
    );
    // 비동기 함수로 인해 return값이 없는 채로 함수를 빠져나감
    setTimeout(function () {
        console.log("계산이 필요합니다.");
        let total = price * quantity;

        callback(total);
        // return total;
    }, 1000);
}

function pay(tot) {
    // undefined의 값이 저장
    // callback으로 값을 넘긴 경우에는 비동기 안에서 호출되었기 때문에
    // 동기 처리가 이뤄져 순서의 맞게 실행됩니다.
    console.log(tot + "원을 지불하였습니다.");
}

// let tot = buy_asis("고구마", 1000, 5);
// pay(tot);

buy_asis("고구마", 1000, 5, pay);
