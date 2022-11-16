import styled from 'styled-components'; // styled-components : 스타일된 컴포넌트를 의미한다.

// 이녀석의 정체는 컴포넌트이다.
const One = styled.div`
  color: red;
`;

const Two = styled.div`
  color: green;
  // 컴포넌트라면 당연히 props를 받을 수 있다.
  font-size: ${(props) => props.size + 'px'};
`;

// 이런 형태도 가능하다.
// const Two = styled.div`
//   color: green;
//   // 컴포넌트라면 당연히 props를 받을 수 있다.
//   font-size: ${({size}) => size + 'px'};
// `;


function App() {
  return (
    <>
      <One>hello</One>
      <Two size={32}>hello</Two>
    </>
  )
}

export default App;