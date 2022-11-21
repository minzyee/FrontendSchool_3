import {useState, useEffect} from 'react';

export default function App() {
  // 수업여부는 수업중이라는 값이 들어간 변수이다. 
  // set수업여부는 수업여부를 변경시켜주는 함수이다.

  const [수업여부, set수업여부] = useState('수업중')
  const [잔고, set잔고] = useState(100000); // 여기로 간다.

  // 버튼 클릭시, set수엽여부로 수업 종류
  const handleZoomOut = (e) => {
    set수업여부('수업종료');
  }

  // 계속 카페로 출발만 함
  if(수업여부 === '수업종료' && 잔고 >= 20000) {
    alert('카페로 출발!');
    set잔고(90000); // 여기에서 종료가 안되고 계속 렌더링을 해줌
  }

  return (
    <div>
      <button onClick={handleZoomOut}>ZoomOut</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  )
}

