import styled from "styeld-component";

export const ProductWrapper = styled.li`
  img {
    width: 380px;
    height: 380px;
    border: 1px solid #333;
    border-radius: 10px; 

    /* &::after {

    } */
  }

  p {
    line-height: 20px;

    .discount {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #828282;
      text-decoration: line-through;
    }

    .percent {

    }
  }

  .product-title {
    font-size: 400;
    font-size: 18px;
    line-height: 22px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }
`;