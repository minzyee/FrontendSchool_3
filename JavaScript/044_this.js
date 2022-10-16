function a(){
  console.log(this);
}
a(); // 함수를 호출해준 애가 this 가 된다.

function b(){
  console.log('hello world');
}
b(); // hello world
window.b(); // hello world

// 누가 실행하느냐에 따라서 다르기때문에 this가 어렵다.
let test = {
  one: 1,
  two: 2,
  three: function(){
    console.log(this);
  }
}
test.three(); // test
let test2 = test.three; // window 


// 추가 예제
function sayName(){
  console.log(this.name); // undefined
}

var name = "Hero"; // var 선언 시, window에 등록된다. let, const는 아니다.

let peter = {
  name: "Peter Parker",
  say: sayName // say와 sayName과 연결되어있는 것이다. peter의 key 자리에 sayName 말고 다른 단어로 적어도 value가 sayName이면 동일하게 실행되는건가요??네네
}

let bruce = {
  name: 'Bruce Wayne',
  say: sayName
}

sayName();
peter.say(); // Peter Parker
bruce.say(); // Bruce Wayne


function a(){
  console.log(this.name);
  function b(){
      console.log(this.name);
  }
  b();
}
a();


function a(){
  console.log(this);
  function b(){
      console.log(this);
  }
  b();
}
a();


function a(){
  console.log(this)
  function b(){
    console.log(this);
    function c(){
      console.log(this);
    }
    c();
  }
  b();
}
a();


function sayName(){
  console.log(this);
}

var c = {
  'hello':'world',
  'say': sayName
}

var b = {
  'c':c
}

var a = {
  'b':b
}

a.b.c.say();


// 정리하면 this는 this가 실행되는 순간 나를 호출한 녀석을 가리키는건가요? 네 맞습니다.
// 리턴값이 없으면 undefined를 반환한다.

// . 으로 접근한것 ->  실행되게끔 호출한것 -> this 라고 이해했는데 맞을까요? 네네
// 윈도우가 왜 찍히는지, 피터파커, 브루스 부분만 오늘은 아셔도 됩니다.