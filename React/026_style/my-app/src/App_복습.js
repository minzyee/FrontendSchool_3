// step 1 --> key 값이 무엇인가~?
// const arr = [10, 20, 30, 40, 50];

// function App() {
//   return (
//     <div>
//       {/* key값은 문자, 숫자도 모두 가능하다. */}
//       {/* key 값을 지정해줄 때, index로만 주면 반복되서 에러나기 쉽다. 그래서 key={v.toString()} 이걸 사용함 */}
//       {arr.map(v => <p>{v}</p>)}
//       {arr.map(v => <p key={v.toString()}>{v}</p>)}
//       {arr.map(v => <p key={v}>{v}</p>)}
//     </div>
//   );
// }


// step 2 --> 조건부 렌더링: 조건에 따라서 다른 컴포넌트를 렌더링한다.
// const value = 3;

// function App() {
//   if(value === 1) {
//     return <h1>hello !</h1>
//   } else if(value ===2) {
//     return <h1>hello 2</h1>
//   } else if(value === 3) {
//     return <h1>hello 3</h1>
//   }
// }


// step 3 --> styled components
// 리셋 코드 설치 방법: npm i styled-reset
// npm i styled-reset

// npm install styled-components
// npm i styled-reset
import styled from "styled-components";

const DivBlue = styled.div`
  color: blue;
`;

const DivRed = styled.div`
  color: red;
`;

function App(){
  return (
    <>
      <DivBlue>hello</DivBlue>
      <DivRed>hello</DivRed>
    </>
  )
}

export default App;