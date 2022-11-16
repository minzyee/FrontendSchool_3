// 이 Resum 함수는 붕어빵 찍는 틀이고, 페이지에 로딩된 화면

import { useState } from 'react'


function Resume({이름, 취미, 자기소개}) {
  const [like, setLike] = useState(0) 

  function clickLike(){
    // alert('클릭햇다눙');
    // like += 1 // 일단 클릭하면, 콘솔창에 숫자가 오른다.
    setLike(like + 1); // like = like + 1
    console.log(like)
  }
  
  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
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