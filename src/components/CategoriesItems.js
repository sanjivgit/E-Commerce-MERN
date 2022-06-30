import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import Categories from "./Categories";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

function CategoriesItems() {
  return (
    <Container>
      {categories.map((item) => (
        <Categories item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default CategoriesItems;
