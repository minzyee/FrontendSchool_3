import { useEffect, useState } from "react";
import { getProductData } from "../../api/api";
import Product from "../Product/Product";
import { ProductListWrapper } from "./styled";


const ProductList = () => {
	const [productData, setProductData] = useState([]);

	useEffect(() => {
			getProductData().then((data) => {
					setProductData(data);
			});
	}, []); // 빈 배열로 두면 딱 한번만!! 실행된다.

	return <ProductListWrapper>
			{productData.map(item => (<Product key={item.id} data={item} />))}
	</ProductListWrapper>;
}

export default ProductList;