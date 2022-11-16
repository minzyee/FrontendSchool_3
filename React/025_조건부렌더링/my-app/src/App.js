// 조건부렌더링
import {useState} from 'react' // useState를 임포트 하는데, 리액트로 부터 가져오겠다.

// user.login ? <Notice> : <Login>
// true && <h1>hello world</h1> -> h1 출력
// false && <h1>hello world</h1> -> false 출력
// true || <h1>hello world</h1> -> true 출력
// false || <h1>hello world</h1> -> h1 출력

// // 예시
// newMail.length > 0 && <h1>읽지 않은 메일이 있습니다.</h1> -> h1 출력

export default function App() {
  return (
    <div>
      <Contents/>
      <Navbar/>
    </div>
  )
}