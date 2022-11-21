// props로 굳이 받아오지 않고, 구조 분해 할당으로 받아도 된다.
function One(props){
  return (
    <div>
      <p>{props.name}님 안녕하세요!</p>
      <p>당신의 나이는 {props.age * 100}입니다.</p>
    </div>
  )
}

// 구조분해 할당으로 사용해본 경우
function Two({name, age}){
  return (
    <div>
      <p>{name}님 안녕하세요!</p>
      <p>당신의 나이는 {age * 100}입니다.</p>
    </div>
  )
}

function App() {
  return (
    <>
      <p>hello world 1</p>
      <p>hello world 2</p>
      <br />
      <One name="호준" age={10}/>
      <One name="호준" age={10}/>
      <One name="호준" age={10}/>
      <br />
      <Two name="호준" age={10}/>
    </>
  );
}

export default App;