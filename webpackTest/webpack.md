# 웹팩이란?
- 웹펙은 여러가지 파일을 하나의 파일(번들)로 합쳐주는 기능을 한다.
- 모던 js를 위한 번들러이다.
  - 번들(Bundle)이란? 묶음이라는 뜻으로 상품 구매 시 끼워주는 것으 의미한다.
  - 모듈 번들러란? 웹 애플리케이션을 구성하는 자원을 모두 각각의 모듈로 보고 그것들을 조합해서 결과물로 만드는 도구
  

<br/><br/>

## 웹팩 핵심 개념
- Entry (엔트리) : 모듈의 시작점이다.
- Output (출력) : 모든 모듈을 하나로 합쳐서 저장하는 경로를 설정한다.
- Loaders (로더) : 모듈의 소스 코드에 변경 사항을 적용하는 역할을 한다.  
자바스크립트 뿐만 아니라 다른 포멧의 파일도 처리할 수 있다.
- Plugins (플러그인) : 로더가 수행할 수 없는 다양한 기능을 수행한다.

<br/><br/>

## 웹펙을 설치하는 순서
1. Node.js 를 설치한다.
2. npm 프로젝트를 생성합니다.
3. 웹팩을 설치합니다.

<br/><br/>

> CDN(Contents Download Network) - 웹에 코드가 있는 것.  

<br/><br/>

### npm 의 버전 관리
npm 의 버전관리는 기본적으로 **Semantic Versioning** 관리 규칙을 따릅니다. ([https://semver.org/lang/ko/](https://semver.org/lang/ko/))
- 메이저, 마이너, 패치 세가지를 각각 X.Y.Z의 형태로 표현한다.
- 메이저 : 기존 버전과 호환되지 않도록 api 가 바뀌는 경우다.
- 마이너 : 기존 버전과 호환되면서 새로운 기능이 추가된 경우다.
- 패치 : 기존 버전과 호환되면서 버그를 수정한 경우다.  


### 범위 명시 법
1. 틸더(tilde) : ~ 기호로 표시한다. 마이너 버전이 명시가 되어있다면 패치버전을 갱신한다.
2. 캐럿(Caret) : ^ 기호로 표시한다. 마이너와 패치 버전을 해당 메이버 버전으로 부터 가장 최신으로 갱신한다.




```shell
npm init -y : 원하는 디렉토리로 이동해서 명령어 입력하면 프로젝트의 패키지가 생성된다.

pakage.json에서 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "test2": "echo \"Error: 몰?루\" && exit 1" <- 내가 추가한 경고 코드
  },

내가 직접 작성한 경고문을 실행하려면, 
npm run test2 라고 입력해야한다.


npm view react version : 리액트의 모든 버전을 볼 수 있다.
만약 이전 버전으로 돌아가고 싶다면, 
  "dependencies": {
    "react": "^18.2.0" <- 이곳의 버전을 수정 후, `npm i react`를 터미널에 입력하면 된다.
  } 


익스포트 임포트 기능이 웹팩기능중 일부분? 이렇게 이해하는게 맞나요? 타입에 모듈 명시하쟈 네네
```


## webpack 설치
- 먼저 폴더를 만듭니다. 그 다음 npm을 초기화하고, webpack을 설치합니다.
```shell
npm install -D webpack webpack-cli
```
- Webpack 과 Webpack-cli 를 설치해야합니다.
- -D 옵션을 통해서 개발용 환경을 구성합니다. 이렇게 설치된 패키지들은 devDependencies 에 기록됩니다. 이렇게 몇몇 패키지들을 devDependencies 에 기록하는 이유는 프로젝트를 실서버 배포를 위한 빌드를 할 때 devDependencies 에 기록된 패키지들의 코드는 포함 시키지 않기 때문입니다. 마치 깃허브에 파일을 푸쉬할 때 .gitignore 파일에 등록된 파일은 제외하는것과 비슷합니다.


```shell
npx webpack --mode development --entry ./src/app.js -o ./dist

src에서 사용한 모듈 시스템을 main.js에서 처리해준다?
```