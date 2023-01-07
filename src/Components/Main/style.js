import styled from "styled-components";
import { ReactComponent as Close } from "../../Assets/Icons/Close.svg";
const Form = styled.div`
  background-color: rgba(0, 0, 0, 0.522);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
const Container = styled.div`
  width: 496px;
  height: 452px;
  background: #f8f8f8;
  border-radius: 24px;
  ${({ mode }) => mode && "background:#323232;"}
`;

const Header = styled.div`
  padding: 0px 28px;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 130%;
  color: #402c36;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ mode }) => mode && "background:#454545;color:#ffffff;"}
`;

const Icon = styled(Close)`
  cursor: pointer;
  & path {
    ${({ mode }) => mode && "fill:#ffffff;"}
  }
  :active {
    & path {
      fill: #e72887;
    }
  }
`;

const Body = styled.div`
  padding: 20px 28px 28px 28px;
  .subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    color: #999999;
    margin-bottom: 8px;
    ${({ mode }) => mode && "color:#999999;"}
  }
`;

Body.Date = styled.div`
  display: flex;
  gap: 12px;
`;
const Input = styled.input`
  width: 100%;
  height: 51px;
  border-radius: 14px;
  background-color: #ffffff;
  border: none;
  margin-bottom: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #1d1d1d;
  padding: 0px 16px;
  :focus {
    outline: none;
    outline: 2px solid #e72887;
  }
  ${({ mode }) => mode && "background:#454545;color:#ffffff;"}
  ::placeholder {
    opacity: 0.8;
    ${({ mode }) => mode && "color:#ffffff;"}
  }

  :-ms-input-placeholder {
    opacity: 0.8;
    ${({ mode }) => mode && "color:#ffffff;"}
  }

  ::-ms-input-placeholder {
    opacity: 0.8;
    ${({ mode }) => mode && "color:#ffffff;"}
  }
`;
const Submit = styled.div`
  height: 52px;
  width: 100%;
  background-color: #e72887;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.3px;
  color: #ffffff;
  margin-top: 40px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s;
  :hover {
    margin-top: 38px;
  }
  :active {
    margin-top: 42px;
  }
`;
export { Form, Container, Header, Icon, Body, Input, Submit };
