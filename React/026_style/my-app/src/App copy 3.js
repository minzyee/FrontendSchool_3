import styled, {css} from 'styled-components'

const One = css`
    color: red;
`
const Two = css`
    font-size: 32px;
`

// Three가 One Two를 둘다 사용함
const Three = styled.div`
    ${One}
    ${Two}
`

function App(){
  return (
    <>
        <Three>10</Three>
    </>
  )
}

export default App;