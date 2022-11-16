function One(props) {
  console.log('// One 시작');
  console.log(props);
  console.log(props.children[0]);
  console.log('// One 끝');

  return (
    <div>
      {props.children}
    </div>
  )
}

function Two(props) {
  console.log('// Two 시작');
  console.log(props);
  console.log('// Two 끝');
}

function Three(props) {
  console.log('// Three 시작');
  console.log(props);
  console.log('// Three 끝');
}

function Four(props) {
  console.log('// Four 시작');
  console.log(props);
  console.log('// Four 끝');
}

function App() {
  return (
    <div>
      <h1>app - h1</h1>
      <p>app - p</p>
      <One>
        <h2>app &gt; One - h2</h2>
        <p>app &gt; One p</p>
        <Two>
          <p>app &gt; One &gt; Two - p</p>
        </Two>
        <Three></Three>
      </One>
    </div>
  );
}
export default App;