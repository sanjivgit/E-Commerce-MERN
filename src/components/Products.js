import React from "react";
import styled from "styled-components";
import { productItems } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

function Products() {
  return (
    <Container>
      {productItems.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
