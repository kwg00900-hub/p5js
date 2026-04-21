let password;
const correctPassword = "1234";

do {
  password = prompt("비밀번호를 입력하세요:");
} while (password !== correctPassword);

console.log("로그인 성공!");