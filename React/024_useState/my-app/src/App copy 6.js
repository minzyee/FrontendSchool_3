import { useState } from 'react';

const Login = () => {
  // id를 변경시킬 수 있는 것은 setId 이다.
  const [id, setId] = useState(""); // useState("")는 아무것도 없는 값으로 초기화 시킨다는 뜻
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    console.log('로그인 버튼 클릭함. 로그인 정보 들어왔음');
    e.preventDefault(); // 이벤트 막아주는 메서드
    console.log('막힘~'); // 로그인 정보 들어와서 막힘. 이제 리프레시 안됨~

    // alert로 출력해보겟다.
    alert(`id: ${id} | pw: ${pw}`);
  }

  const handleIdSubmit = (e) => {
    console.log('아이디 수정됨');
    // 실시간으로 정규표현식을 사용해서 이상한 문자열이 포함되진 않았는지 확인할 수 있게 만들 수 있다.

    // 아래에서 입력한 값을 확인 가능하며, 이것들을 setId setPw에 넣어줄 수 있다.
    console.log(e); // target -> value
    console.log(e.target);
    console.log(e.target.value);
  }

  const handlePwSubmit = (e) => {
    console.log('패스워드 수정됨');
    console.log(e.target.value);
  }

  return (
    <form action="" onSubmit={handleLoginSubmit}>
      <label>
        아이디: 
        <input type="text" name="" id="" onChange={handleIdSubmit}/>
      </label>
      
      <label>
        패스워드: 
        <input type="password" name="" id="" onChange={handlePwSubmit}/>
      </label>

      <button type="submit">로그인</button>
    </form>
  )
}

function App() {
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;