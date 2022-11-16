// module.css를 사용하면 class명에 고유값을 추가해주어서 겹치지 않도록 합니다.
// 대문자가 컴포넌트 파일, 소문자가 css 파일

import React from "react";
// import './app.css'

// 이거 붙여주니까, 'module'.app.css 가 적용되네? -> 모듈을 사용한 스타일은 안붙인 파일이 간섭하지 못한다.
import styles from './app.module.css';
import Test from "./Components/Test";

function App(){
	return (
		<>
			<h1>hello world</h1>
			<p className={styles.one}>
				Lorem ipsum,
				dolor sit amet consectetur adipisicing
				elit. Natus, nemo!
			</p>
			<Test/>
			<Test/>
		</>
	)
}

export default App;