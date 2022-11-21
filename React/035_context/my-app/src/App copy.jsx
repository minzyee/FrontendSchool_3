function App() {
  return (
    <HelloLicat value = {{name: "gary", id: "garyIsFree"}}/>
  );
}

const HelloLicat = ({value: {name, id}}) => {
  return (
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicat value={{name, id}}/>
    </div>
  );
}

const HelloLicatTwo = ({value: {name, id}}) => {
  return (
    <div>
      <h2>Two: {id}</h2>
      <strong>Two: {name}</strong>
    </div>
  )
}
export default App;
