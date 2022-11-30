describe('텍스트 매니저 테스트 입니다.', () => {
  const textManager = new TextManager();

  it('텍스트값을 전달합니다.', () => {
    const initValue = textManager.getValue();

    // 기대하는 값이 겟밸류 했을 때의 값이 같아야한다?
    expect(textManager.getValue()).toBe(initValue);
  });

  it('텍스트 값을 수정합니다.', () => {
    const testValue = {data: 'Hello hi~!'}
    textManager.setValue(testValue);

    expect(textManager.getValue()).toBe(testValue.data);
  })
})