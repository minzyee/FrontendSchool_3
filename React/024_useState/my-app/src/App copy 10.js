import React from 'react'

function One() {
  return <p>one</p>
}

function Two() {
  return <p>two</p>
}

function Three() {
  return <p>threee</p>
}

function f() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

export default function App() {
  return (
    <div>
      {/* f() -> key가 없다고 뜬다. */}
      {/* {[<One/>, <Two/>, <Three/>,]} */}
      {/*키가 없다고 뜬다. 다중 어레이를 만들었을 때*/}

      {/* 키값이 중복될 때 에러가 난다. */}
      {[
        <One key='100'/>, 
        <Two key='200'/>, 
        <Three key='300'/>, 
        [
          <One key='400'/>, 
          <Two key='500'/>, 
          [
            // 나와 같은 컴포넌트가 동일한 키를 가지고 있으면 에러난다.
            <One key='100'/>, 
            <Two key='100'/>, 
          ]
        ]
      ]}
    </div>
  )
}
