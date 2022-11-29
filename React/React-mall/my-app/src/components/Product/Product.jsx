const Product = ({ data }) => { // ProductList.jsx 에서 data로 받아와tj data라고 한다.
  const { thumbnailImg, price, productName, discountRate } = data;



  return (
  <li>
      <img src={`http://test.api.weniv.co.kr/${thumbnailImg}`} alt="" />
      <p className="product-title">{productName}</p>
      <p>
        <strong>{price}</strong> 원
        {!!discountRate && (
          <>
            <span className="discount">{price}</span>
            <span className="percent">{discountRate}%</span>
          </>
        )}
      </p>
  </li>
  );
};

export default Product;