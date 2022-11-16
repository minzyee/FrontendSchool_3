function Hello({name}) {
  if(name){
    return (
      <div>{name}</div>
    )
  }

  return <div>이름 입력 안됨</div>
}

function App() {
  return (
    <Hello name=''/>
  );
}

export default App;