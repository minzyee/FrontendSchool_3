
import { useState, useEffect } from 'react'

export default function App() {
  const [결혼여부, set결혼여부] = useState('미혼');
  const [잔고, set잔고] = useState(1000000);
  const [결혼대상, set결혼대상] = useState('대상없음');

  const handle소개팅 = () => {
    set결혼여부('소개팅중');
    set잔고(500000);
    set결혼대상('대상없음');
  }

// 핸들로 셋 여러번 쓸 수잇는데, 변경된 것이 로직에 부합하고, set으로 인해서 무한 반복이 일어나는 경우에 useEffect로 해결할 수 있따.
  useEffect(() => {
    if(잔고 <= 500000 && 결혼대상 === '대상없음'){
      set잔고(잔고 + 2000000);
    }
  }, [잔고, 결혼대상]);

  // 퀴즈2 : 잔고가 500000원 이하이고 and 결혼대상이 미정이시면
  // 부모님께서 용돈 200만원을 주십니다.
  return (
    <div>
      <button onClick={handle소개팅}>소개팅 Go</button>
      <p>{결혼여부}</p>
      <p>{잔고}</p>
      <p>{결혼대상}</p>
    </div>
  )
}