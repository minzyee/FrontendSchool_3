// Map: 오브젝트의 단점을 보완하기 위해 나온 것
// new: 생성자 라는 의미로 object의 this를 받을 수 있게 됨
m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1, 2], '리얼리?') //이렇게는 호출되지 않습니다.

console.log(m);

console.log(m.get('하나'))
console.log(m.get(true)) // object에서 가능하지 않습니다.
console.log(m.get([1, 2])) // 이렇게는 호출되지 않습니다. 새로운 1, 2를 가리키고 있기 때문이다.

// Python Vs JavaScript 
// 1. Python
// python에서 아래 값은 다르게 나옵니다.
// x = [1, 2]
// id(x)

// y = [1, 2]
// id(y)

// x == y // python에서는 true
// x is y // python에서는 false

// 2. JavaScript
// [1, 2] === [1, 2] //false
// [1, 2] == [1, 2] // false
// let x = [1, 2]
// let y = [1, 2]
// x == y // false
// x === y // false

let m = new Map();
let test = [1, 2];

m.set('하나', 1) // 메서드 체이닝
    .set(true, '트루')
    .set(test, '리얼리?') // 이렇게는 호출됩니다.

console.log(m.get(test));

// Map에 해당 key 값이 있는지 확인하기
m.has('하나'); // '하나' 있냐? 응 true
m.has('열'); // '열' 있냐? ㄴㄴ 없음 false

// Map에 값을 제거하기
m.delete('하나'); // 하나 지워짐
m.has('하나'); // '하나' 있냐? ㄴㄴ 너가 지워서 이제 없음

// 크기 구하기
m.size; // 2
// Map을 쓰면 오브젝트를 어느정도 대체할 수 있습니다.
let data = new Map([['one', 1], ['two',2]]) // O 이렇게 하면 됩니다.
let data = new Map(Object.entries({'one':1, 'two':2})) // O
let data = new Map({'one':1, 'two':2}) // X 이렇게 안됩니다. 맵은 순서가 있는 객체이기 때문이죠.
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X


// Map은 직접 순회가 가능하다.
let data = {'one':1, 'two':2}
for (const i of data) { // X 작동되지 않습니다!
    console.log(i)
}

let data = {'one':1, 'two':2}
for (const i of Object.entries(data)) {
    console.log(i);
}

let m = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m) {
    console.log(i);
}

for (const [i, j] of m) {
    console.log(i, j);
}

m.keys();
m.values();
m.entries();


// Map - Object 간의 형변환
let 맵 = new Map(Object.entries({'one':1, 'two':2}));
let 오브젝트 = Object.fromEntries(맵);


// 맵과 object 100만개 순회 test

let map = new Map(); // 키 값의 중복이 안됩니다.
map.set('이호준', 1);
map.set('이호준', 2);
map.set('이호준', 3);