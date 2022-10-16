// callback function -> 부를거야. 근데 나중에
// 콜백함수: 아규먼트로 함수를 전달하는 것
function sum(x, y, 콜백함수){
  // 1000 줄
  콜백함수(x + y);
  // 1000 줄
  // return x + y
}

function documentWriter(s){
  document.write('콜백함수', s)
}

// sum(10, 20, console.log);
// sum(10, 20, document.write) // 안되는 이유 확인중
sum(10, 20, documentWriter); // 함수를 아규먼트로 전달한다. 그리고 코드 어딘가에서 호출한다.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])

let arr = [10, 20, 30, 40, 50];
arr.map(제곱); // 호이스팅

function 제곱(x){
  return x ** 2;
} // x => x ** 2;
arr.map(x => x**2);

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// https://caniuse.com/mdn-api_nodelist_foreach // 노드에서의 forEach는 IE에서 작동하지 않습니다.

function 두배(x){
  console.log(x * 2);
}

let arr = [10, 20, 30, 40, 50];
arr.forEach(두배);


//////////////////
// map은 새로운 어레이를 만들어줌
// 문제 : 화살표 함수를 사용해서 아래 map과 동일한 기능을 하는 forEach문을 완성해주세요.
let arr = [10, 20, 30, 40, 50];
arr.map(x => x**2);

let result = []
arr.forEach(e => {
    result.push(e ** 2);
})
console.log(result);