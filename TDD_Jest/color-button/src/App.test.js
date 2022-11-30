import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
// 테스트코드 먼저 작성 중이다.

test('버튼이 제대로 동작하고 있습니까?', () => {
  render(<App />);

  // button의 역할을 하는 요소를 검색하며, 요소 안의 텍스트는 'change to blue !' 여야 한다.
  const button = screen.getByRole('button', {name: 'change to blue !'});

  // 기대신의 매처함수라고 보면 된다. 버튼이 toHaveStyle의 인자로 들어오는 값을 갖기를 기대한다.
  // button 요소의 배경색이 red 이길 기대한다.
  expect(button).toHaveStyle({backgroundColor: 'red'});

  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor: 'blue'});
  expect(button.textContent).toBe('change to red !');
});