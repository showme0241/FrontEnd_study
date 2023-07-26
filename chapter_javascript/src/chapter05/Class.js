class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getManInfo() {
        if (this.gender === "남") {
            return { man: "남성 사용자 정보" };
        }
    }
}

class User extends Person {
    constructor(name, age, gender, life) {
        super(name, age, gender); // 상위(부모) 클래스 접근 super() == new Person()
        this.life = life;
    }

    getName() {
        return this.name;
    }

    getAge() {
        if (!this.name) return "이름이 없습니다.";
        return this.age === 30 ? this.age : "no";
    }

    getGender() {
        if (this.life) {
            return super.getManInfo();
        }
    }
}

const user1 = new User("been", 30, "남", "트랜디");

console.log(new User());
console.log(user1.age);
console.log(user1.getName());
console.log(user1.getAge());
console.log(user1.getManInfo().man);
console.log(user1.getGender());
