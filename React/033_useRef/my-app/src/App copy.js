// 1. 렌더링과 상관없이 값을 변경하고 싶을 때 `useRef`를 사용합니다.
// 다시 렌더링 되어도 그 값은 변하지 않습니다.
// 2. 컴포넌트의 태그(tag)에 직접 접근하고 싶을 때 useRef를 사용합니다.
// 자바스크립트에서 DOM element를 가지고 올 때 `querySelector`나
// `getElementById`를 사용하지만 React에서는 `useRef`를 사용합니다.
// 이때 `useRef`를 사용하여 `useRef`가 접근한 태그 요소의 값을 바꿀 때는
// 리렌더링을 발생시키지 않는다는 것을 기억해야합니다.
// 데이터, state와 상관없이(리렌더링 하지 않고) component에 DOM을 제어하고 싶을 때 ref를 사용합니다.

// 일반 변수는 렌더링 되면 초기화 된다.
// useState는 값이 변경될 때 렌더링 된다.
// useRef는 렌더링 되어도 값을 유지한다. 리액트에서는 useRef를 사용한다.
// 태그에 직접 접근하고 싶을 떄 사용한다.

import React, { useState, useEffect, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  let countThree = useRef(0)
  let countFour = 0
  console.log(countThree)

  // 랜더링 됨
  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  // 랜더링 됨
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  // 클릭하면 변수의 값은 증가하지만 랜더링은 되지 않음
  const handleCountUpThree = (e) => {
    countThree.current = countThree.current + 1
    console.log(countThree.current)
  }
  // 랜더링 안되고 다른 state가 변해서 재렌더링 되어도 0으로 초기화
  const handleCountUpFour = (e) => {
    countFour = countFour + 1
    console.log(countFour)
  }

  useEffect(() => {
    console.log('count가 감시되고 있습니다.')
    console.log(`감시된 변수 : ${count}`)
  }, [count]) // count가 변경되는 것을 감시
  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
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