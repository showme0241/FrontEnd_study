import { rest } from "msw";
import { UserMockData } from "./User.data";

// rest API를 통해 응답받을 경로를 생성
export const SignUpApi = rest.post("/api/user", (req, res, ctx) => {
    const { email, nickname } = req.body;

    const user = UserMockData.find(
        (user) => user.email === email || user.nickname === nickname
    );

    if (user) {
        return res(
            ctx.status(400),
            ctx.json({
                message: "failure",
            })
        );
    }

    return res(
        ctx.status(200),
        // 해당 경로를 호출할 경우, 받을 응답 데이터 구성
        ctx.json({
            message: "success",
        })
    );
});

export const SignInApi = rest.post("/api/user/login", (req, res, ctx) => {
    const { email, pw } = req.body;
    console.log(email, pw);

    const user = UserMockData.find(
        (user) => user.email === email && user.password === pw
    );

    // 로그인 성공의 경우,
    if (user) {
        return res(ctx.status(200), ctx.json(user));
    }

    // 아이디 혹은 비밀번호가 일부 일치하는 경우
    if (UserMockData.some((user) => user.email === email)) {
        return res(
            ctx.status(400),
            ctx.json({
                message: "아이디 혹은 비밀번호가 일치하지 않습니다",
            })
        );
    }

    // 회원 정보가 모두 일치하지 않는 경우, (가입되지 않는 비회원)
    return res(
        ctx.status(400),
        ctx.json({
            message: "가입되어있지 않은 정보입니다.",
        })
    );
});
