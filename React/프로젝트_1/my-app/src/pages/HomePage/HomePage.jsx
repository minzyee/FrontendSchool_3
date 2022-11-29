// import { useState, useEffect } from 'react'

// import Card from '../../components/Card/Card'
// import Cart from '../../components/Cart/Cart'
// import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'

// // import { data } from '../../database/data'
// import './homePage.css'

// 내가 적다만 코드
// export default function HomePage() {
// 	// console.log(data)
// 	// const data = null
// 	const [error, setError] = useState(null) // 여기 null은 
// 	const [isLoaded, setIsLoaded] = useState(false);
// 	const [items, setItems] = useState([]); // items 비어있다고 해두기

// 	useEffect(() => {
// 		const getData = async () => {
// 			try {
// 				const response = await fetch('http://test.api.weniv.co.kr/mall');
// 				const result = await response.json();
// 				setItems(result); // 한번 사용하고
// 				setIsLoaded(true); // 

// 			} catch(error) {
// 				setError(error); // error 전달. null이었을 때와 아닐때. 값이 있으면 정상 작동아 안된다?
// 			}
// 		}
// 		getData(); // 최초에 한번만 실행할거임
// 	});

// 	if(error) { // error메세지를 개발자 창에 표시할 필요는 없지만 일단해본다.
// 		console.log(error);
// 		// return <FailLoadData />
// 		return <div>에러 발생!</div>
// 	} else if(!isLoaded) {
// 		<div>로딩중~</div>
// 	} else {
// 		return (
// 			<main className='product'>
// 			{
// 				data !== null ?  // 여기 null 입니다.
// 					<>
// 						<ul className='product-list'>
// 							{items.map(item =><Card key={item.id} {...item}/>)}
// 						</ul>
// 						<Cart/>
// 					</>
// 				: <FailLoadData />
// 			}
// 			</main>
// 		)
// 	}

// }




//// 호준님 코드
// export default function HomePage() {
//     // console.log(data)
//     // const data = null
//     const [error, setError] = useState(null)
//     const [isLoaded, setIsLoaded] = useState(false)
//     const [items, setItems] = useState([])

//     useEffect(()=>{
//         const getData = async () => {
//             try {
//                 const res = await fetch('http://test.api.weniv.co.kr/mall')
//                 const result = await res.json()
//                 setItems(result)
//                 setIsLoaded(true)
//             } catch (error) {
//                 setError(error)
//             }
//         }
//         getData()
//     }, [])

//     if (error) {
//         console.log(error)
//         return <div>애러발생!</div>
//     } else if (!isLoaded) {
//         return <div>로딩중!</div>
//     } else {
//         return (
//             <main className='product'>
//             {
//                 <>
//                     <ul className='product-list'>
//                         {items.map(item =><Card key={item.id} {...item}/>)}
//                     </ul>
//                     <Cart/>
//                 </>
//             }
//             </main>
//         )
//     }
// }


// 호준님 코드2
import { useState, useEffect } from 'react'

import Card from '../../components/Card/Card'
import Cart from '../../components/Cart/Cart'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'

import { data } from '../../database/data'
import './homePage.css'

export default function HomePage() {
	// console.log(data)
	// const data = null
	const [loadData, setLoadData] = useState(null);
	return (
		<main className='product'>
		{
			<>
				<ul className='product-list'>
					{data.map(item =><Card key={item.id} {...item}/>)}
				</ul>
				<Cart/>
			</>
		}
		</main>
	)
}