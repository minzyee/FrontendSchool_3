import styled from 'styled-components';

const One = styled.div`
  color: red;
`;

const Two = styled.div`
  color: green;
  font-size: ${(props) => props.size + 'px'};
`;

// props가 꼭 props의 이름을 사용하지 않아도 된다는 의미에서 옵션이라는 네이밍을 사용함
const Three = styled.div` 
  color: ${(옵션 => 옵션.option === '하나' ? 'red' : 'pink')};

`;

function App() {
  return (
    <>
      <One>hello</One>
      <Two size={32}>hello</Two>
      <Three option={'하나'}>hello</Three>
    </>
  )
}

export default App;