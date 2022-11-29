// 싱글턴 패턴: 오직 하나의 인스턴스만을 생성해야할 때 필요한 패턴

class Test {
  constructor() {

  }
}

const test1 = new Test();
const test2 = new Test();

console.log(test1 === test2);

