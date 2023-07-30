// 함수 실행 컨텍스트와 this 예시

function foo(a) {
    const x = 10;
    const y = 20;

    function bar(b) {
        const z = 100;

        // console.log(this);
        // console.log(b + z);
    }

    const Default = bar.bind({ x, y });
    Default(50);

    // console.log(a + x + y);
}

foo(100);

function func({ id, name }) {
    console.log(id, name);

    // this를 써야하는 경우가 있다면 bind 메서드에 객체 인자를 지정하여 보내주거나,
    // 함수 내부에서 this의 프로퍼티 혹은 메서드를 작성해서 사용할 수 있다. => 굳이...이렇게 사용할 이유는 없는 것 같다.
    this.args = {
        id,
        name,
    };

    console.log(this.args);
}

const Default = func.bind({});
Default.args = {
    id: 1,
    name: "been",
};

Default({ ...Default.args });
