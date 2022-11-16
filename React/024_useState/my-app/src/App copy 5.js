import React, { useState } from 'react';

// 함수는 다시 호출하면 0이 된다. 
// 함수가 다시 호출되어도 useState가 변수를 기억해준다.
// 컴포넌트에 useState를 쓰면 상태관리가 된다.  -> 그게 훅이다. -> 자원을아낄 수 있다. ????
// 훅은 앞에 use가 붙는다. 
// 
function Resume(props) {
  const [like, setLike] = useState(0);
  const [message, setMessage] = useState('hello');
  // const [a, b] = useState(0);
  // const 내맘대로 = useState(0);
  // 내맘대로[0], 내맘대로[1];

  function handleClickLike() {
    // setLike(like + 1);
    // console.log(like);
    setLike(like + 1);
  }

  function handleMouseOver(){
    console.log('hello')
    setMessage('world')
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <button onMouseOver={handleMouseOver}>마우스 오버해보세요.</button>
          <p>{message}</p>
      </div>
  )
}

function App() {
  return (
    <div>
      <Resume />
    </div>
  );
}

export default App;