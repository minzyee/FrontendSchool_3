import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import shoppingCart from './assets/icon-shopping-cart-white.svg'
import likeBtnOn from './assets/icon-heart-on.svg'
// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled-components styled-reset

const GlobalStyle = createGlobalStyle`
  /* reset코드 + 커스텀reset코드 + 유틸리티코드 */
  /* 한 줄 말줄임, 두 줄 말줄임... */
  ${reset}

  span {
    color: red;
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;

const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`;

const IconShoppingCart = styled.a`
  background: #000 url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: sticky;
  top: 60px;
`;

const ItemProductName = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;

const IconLikeBtnOn = styled.span`
  background: url(${likeBtnOn}) no-repeat center / 18px 16px;

`;

const ItemProductPrice = styled.p`
  margin-top: 20px;
  font-size: 24px;
`;


// fetch()로 데이터를 받아올 수 있다. -> 프로미스로 반환되기 때문에 async로 값을 받아줘야한다.
async function requests(){ // 이건 컴포넌트로 만든 것이 아니라서 r이 소문자다. 원래는 이것도 컴포넌트로 만들어야한다.
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  
  // response를 제이슨으로 바꿔서 준다. 근데 이 부분은 프로미스니까 어웨잇이으로 주겠다.
  const data = await response.json()
  return data;
}

function ProductList(){
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true); // 한번들어가면 false로 해줘서 스위치 역할을 함

  if (dataLoadSwitch){
    requests().then(productData => {
      setProductListData(productData)
      setDataLoadSwitch(false) // 한번 로드 되면, dataLoadSwkitch가 
    })
  }


  // 무한반복
  // requests().then(productData => setProductListData(productData)); 
  // console.log(productListData);
  // const productListData = requests();
  // console.log(productListData); // 위와 같이 실행하면 promise이다.
  return ( // ul 이었던 것
    <ContainerProductList>
      {productListData.map(item =>
        <ProductListItem
          key={item.id}
          productName ={item.productName}
          price ={item.price}
          thumbnailImg ={item.thumbnailImg}
        />
      )}
    </ContainerProductList>
  )
}

function ProductListItem({productName, price, thumbnailImg}) {
  return ( // li 였던 것
    <ItemProductList>
      <ImgProduct
        src={"http://test.api.weniv.co.kr/" + thumbnailImg} 
        alt = {productName}
      />
      <ItemProductName>{productName}</ItemProductName>
      <IconLikeBtnOn>하트</IconLikeBtnOn>
      <ItemProductPrice>{price}원</ItemProductPrice>
    </ItemProductList>
  )
}

function ShoppingCart() {
  // img 태그 였던 것
  return <IconShoppingCart href="#"></IconShoppingCart>
}

// 상품 관심 버튼(하트)
function LikebtnOn() {
  return <IconLikeBtnOn></IconLikeBtnOn>
}

function App() {
  return (
    <ContainerMain>
      <GlobalStyle/>
      <ProductList/>
      <ShoppingCart/>
      <LikebtnOn/>
    </ContainerMain>
  );
}
export default App;