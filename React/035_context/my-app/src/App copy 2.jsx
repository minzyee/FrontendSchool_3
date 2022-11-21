import React from 'react'

// 문제: props 를 쓰지 않고, data.js 변수를 로드해서
// useContext를 사용해서 구현해라.

function One(){
  return (
    <Two />
  )
}

function Two(){
  return (
    <Three />
  )
}

// 7개 아이템의 '이름'만 출력한다
function Three(){
  return (

  )
}

// 7개 아이템의 '가격'만 출력한다.
function Four(){
  return (
    <Four />
  )
}

export default function App copy 2() {
  return (
    <div>App copy 2</div>
  )
}
