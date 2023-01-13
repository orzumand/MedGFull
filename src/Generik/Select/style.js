import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "first":
      return {
        background: "rgba(231, 40, 135, 0.1)",
        color: "#E72887",
        padding: " 0px 14px",
      };
    default:
      return {
        background: "#F8F8F8",
        "font-weight": "500",
        "font-size": " 13px",
        "line-height": "16px",
        "letter-spacing": "-0.3px",
        color: "#273140",
        padding: " 0px 10px",
      };
  }
};
const Container = styled.div`
  display: flex;
  position: relative;
  .body {
    display: none;
  }
`;
const Button = styled.div`
  border-radius: 14px;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  width: 100%;
  height: 47px;
  gap: 8px;
  ${getType}
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
  img {
    width: 28px;
    height: 28px;
  }
  @media (max-width: 760px) {
    font-size: 12px;
    padding: 8px 14px;
    height: fit-content;
    border-radius: 14px;
    background: #f8f8f8;
    color: black;
    ${({ mode }) => mode && "background-color:#1D1D1D; color:white;"}
  }
  ${({ mode }) => mode && "background-color:#1D1D1D; color:white;"}
`;
const Body = styled.div`
  position: absolute;
  border-radius: 14px;
  left: -3px;
  top: 55px;
  background-color: #f8f8f8;
  width: 138px;
  height: 120px;
  padding: 12px 0px;
  ${({ mode }) => mode && "background-color:#F8F8F8; color:white;"}
`;
const Option = styled.div`
  color: #1d1d1d;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: -0.3px;
  margin-bottom: 10px;
  padding: 0px 8px 0px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  img {
    width: 25px;
    height: 25px;
  }
  :hover {
    background-color: #1d1d1d;
    color: #ffffff;
  }
`;
export { Button, Body, Container, Option };
