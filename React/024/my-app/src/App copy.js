// App copy.js는 백업하는 행위이다.
function Resume({이름, 취미, 자기소개}) {
  let like = 0;

  function clickLike() {
    // alert('클릭햇다눙');
    like += 1; // 일단 클릭하면, 콘솔창에 숫자가 오른다.
    console.log(like);
  }
  
  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      {/*클릭 되었을 때의 함수를 onClick={} 안에 넣어줘야한다. */}
      {/* {like}를 눌러도 버튼은 숫자 0에서 변화되지 않는다. 렌더링이 안되었기 때문이다. */}
      {/* 여기가 왜 증가되지 않을까? 변수가 변경이 된다고 하더라도 렌더링이 다시 일어나지 않기 때문이다.
      리소스를 아끼기 위함이다. 그래서 연산 할 때마다 변경이 되지 않는다. */}
      <button onClick={clickLike}>{like}</button> 
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <Resume 이름="깜찍이" 취미="코딩" 자기소개="파주 빨간 장갑 김민지다."/>
    </div>
  );
}

export default App;