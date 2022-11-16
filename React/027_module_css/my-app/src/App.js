import One from './components/One/One.js'
import Two from './components/Two/Two.js'
// import './app.css'
// import './app.module.css'
import styles from './app.module.css'

function App() {
  return (
    <>
      <h1>hello world</h1>
      <p className={styles.contents}>hello world</p>
      <One/>
      <Two/>
    </>
  );
}

export default App;