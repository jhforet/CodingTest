const readline = require('readline'); // readline 모듈 불러오기
const rl = readline.createInterface({ // readline 인터페이스 생성, 
    input: process.stdin, // 표준 입력
    output: process.stdout // 표준 출력
});

rl.on('line', function (line) { // 'line' 이벤트 리스너를 등록, 입력한 데이터가 한 줄로 들어올 때마다 호출
    input = [line]; // 입력된 데이터를 배열에 할당
}).on('close',function(){ // 'close' 이벤트 리스너를 등록, 입력이 종료되면 호출
    str = input[0]; // 배열에 할당된 입력 데이터를 변수에 저장
    console.log(str) // 변수에 저장된 값을 출력
});