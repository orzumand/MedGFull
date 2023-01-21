import styled from "styled-components";

const Container = styled.div`
  height: 700px;
  width: 500px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  margin: auto;
`;
const Item = styled.div`
  display: flex;
  border: 1px solid #1d1d1d;
  margin-top: 15px;
  border-radius: 5px;
  .delete {
    background-color: red;
    color: white;
    width: 100px;
  }
  div {
    width: 100%;
    display: flex;
  }
`;

export { Container, Item };
