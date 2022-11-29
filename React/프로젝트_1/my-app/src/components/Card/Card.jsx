import {useRef} from 'react'
import ProductImage from './ProductImage/ProductImage'
import ProductName from './ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import './card.css'

export default function Card({productName, price, thumbnailImg}) {
	//https://test.api.weniv.co.kr/asset/img/5/thumbnailImg.jpg
	// console.log(thumbnailImg)
	const likeBtn = useRef();

	function handleLikeBtn(e) {
		console.log(e);
		console.log(e.currentTarget.classList); // Vanilla JS 문법이다.
		e.currentTarget.classList.toggle('on'); // on 클래스가 붙으면면 하트 표시, 없으면 빈 하트로.
	}

	return (
		<li className='product-item'>
			<div className='product-img'>
				<ProductImage {...{thumbnailImg, productName}}/>
			</div>

			<ProductName {...{productName}}/>
			<button ref={likeBtn} onClick={handleLikeBtn} className='like-btn'></button>
			
			<div className='product-price'>
				<ProductPrice {...{price}}/>
			</div>
		</li>
	)
}
