//문제 1:  사용자로부터 숫자를 입력받아 계속 더하다가, 음수가 입력되면 합계를 출력하고 프로그램을 종료하는 프로그램을 작성하시오.

let num ;
do{
    num = prompt("입력: ");
    num += num;
}while(num >= 0);

console.log(num);