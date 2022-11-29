// 입력한 텍스트를 HTML문법으로 표현합니다.
// 입력한 텍스트를 마크다운 문법으로 표현합니다.


// 포맷 선택
const outputFormat = {
  markdown: 0,
  html: 1,
};

// 하이레벨과 로우레벨 구현
// 추상 클래스 --> 클래스인데 추상적이다.
// 하이레벨: 모든 로우레벨이 동일하게 상속받는 동작을 정의만 한다.(구현XX)
// 너는 start, end, addListItem 라는 동작을 가질것이야. --> 다른언어(aka. 자바) 에서는 인터페이스라고 표현하기도 한다.
// 이렇게 클래스들의 공통적인 내용을 뽑아 상위 클래스를 만들어 내는 것을 '추상화'한다고 표현한다.
// 캡슐화.
class ListStrategy { // 현재 내용이 구현이 하나도 구현 안된 상태임. 그걸 HtmlListStrategy에서 구현할거임.
  start(data) {}
  end(data) {}
  addListItem(data, item) {}
}

// 1-1. HTML 방법으로 포맷 바꿔보기
// 로우레벨: 하이레벨로부터 상속 받아서 구체적인 동작을 표현하는 것이 로우레벨이다.
class HtmlListStrategy extends ListStrategy { // 
  start(data) {
    data.push('<ul>');
  }

  end(data) {
    data.push('</ul>');
  }

  addListItem(data, item) {
    data.push(`<li>${item}</li>`)
  }
}

// 1-2. 마크다운으로 포맷을 바꿔보기를
// 기능을 클래스로 분리하고 있다. 이러한 작업을 캡슐화라고 한다.
class MarkdownListStrategy extends ListStrategy {

  // 상속받아서 새롭게 기능을 정의하고 있다. --> 이런걸 '오버라이딩'이라 한다.
  // 다형성: 이렇게 인터페이스를 상속받는 여러 객체들이, 오버라이딩과 같은 방법으로 다양한 형태로 구현되는 특징
  addListItem(data, item) {
    data.push(` * ${item}`);
  }
}

class TextProcessor {
  constructor() {
    this.data = [];
    this.setOutputFormat(outputFormat);
  }

  setOutputFormat(format) {
    switch (format) { // 내가 정한 포맷에 따라서 마크다운 또는 html 포맷이 선택 되고, 새로운 인스턴스를 생성한다.
      case outputFormat.markdown:
        this.listStrategy = new MarkdownListStrategy();
        break;

      case outputFormat.html:
        this.listStrategy = new HtmlListStrategy();
        break;
    }
  }

  // 입력한 값을 데이터에 저장합니다.
  appendList(items) {
    this.listStrategy.start(this.data);

    for (let item of items) {
      this.addListItem(this.data, item);
    }

    this.listStrategy.end(this.data);
  }

  // 데이터 초기화
  clear() {
    this.data = [];
  }

  // 저장된 데이터를 콘솔로 출력합니다.
  showData() {
    console.log(this.data.join('\n'));
  }

}

const myTp = new TextProcessor(outputFormat.markdown);

myTp.appendList(['hello', 'JS', 'World']);
myTp.showData();

myTp.clear();
// myTp.appendList(['hello', 'HTML', 'World']);
// myTp.showData();

myTp.setOutputFormat(outputFormat.html);
myTp.appendList(['hello', 'JS', 'World']);
myTp.showData();