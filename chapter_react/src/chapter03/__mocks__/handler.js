// User.api 경로에 있는 다양한 핸들러를 userApi 객체로 합친다는 내용

/**
 * const userApi = {
 *  SignUpApi: value
 *  SignInApi: value
 * }
 *
 */
import * as userApi from "./Apis/User/User.api";

// userApi의 키값을 배열로 반환
export const handlers = [...Object.values(userApi)];
