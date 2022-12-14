import styled from "styled-components";
const getType = ({ type }) => {
  switch (type) {
    case "first":
      return {
        background: "rgba(231, 40, 135, 0.1)",
        color: "#E72887",
      };
    default:
      return {
        background: "#F8F8F8",
        "font-weight": "500",
        "font-size": " 13px",
        "line-height": "16px",
        "letter-spacing": "-0.3px",
        color: "#273140",
      };
  }
};

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Contacts = styled.div`
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: right;

    /* Light/main */

    color: #e72887;
  }
  .subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: right;

    color: #bcbcbc;
  }
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Button = styled.div`
  padding: 0px 14px;
  border-radius: 14px;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;

  height: 47px;
  gap: 8px;
  ${getType}
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;
export { Wrapper, Container, Contacts, Button };
