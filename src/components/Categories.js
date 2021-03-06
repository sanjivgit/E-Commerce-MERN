import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  flex: 1;
  height: 70vh;
  position: relative;
  padding: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 40px;
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: white;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`;

function Categories({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
}

export default Categories;
