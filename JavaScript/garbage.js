// 메모리란? 컴퓨터가 가지고 있는 저장소를 의미한다.
let me = {age: 26};
let you = me; // 참조카운트: 2

me = null; // 참조카운트: 1
you = null; // 참조카운트: 0


const aespa = ["카리나", "윈터", "지젤", "닝닝"];
const idol = aespa.map((item) => {
  return item + '💖';
});

console.log(idol);