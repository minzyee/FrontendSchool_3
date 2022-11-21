import { useState, useEffect } from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  
  const handleCountUp = (e) => {
    setCount(count + 1)
  }


  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect(()=>{ // 얘는 재 렌더링 될 때마다 계속 실행된다.
    if (count % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  }, [count])
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;
