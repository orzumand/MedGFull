import styled from "styled-components";
import { ReactComponent as Close } from "../../Assets/Icons/Close.svg";
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

const Wrapper = styled.div`
  width: 100%;
`;
const NavbarWrapper = styled.div`
  padding: var(--padding);
  /* border: 1px solid red; */
  @media (max-width: 1000px) {
    padding: 0px 50px;
  }
  @media (max-width: 760px) {
    padding: 0px 10px;
  }
  ${({ mode }) => mode && "background-color: #323232"}
`;
const Container = styled.div`
  margin: auto;
  max-width: 1440px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 760px) {
    justify-content: space-between;
    align-items: center;
  }

  .Mobi {
    display: none;
    @media (max-width: 760px) {
      display: flex;
    }
  }
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
  @media (max-width: 760px) {
    display: none;
  }
`;
const MobileContacts = styled.div`
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
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
  flex-direction: column;
  gap: 10px;
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
  width: 155px;
  white-space: nowrap;
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
const Select = styled.select`
  border-radius: 14px;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  align-items: center;

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

const Option = styled.option``;
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
  @media (max-width: 760px) {
    padding: 0px 5px;
  }
`;
const Con = styled.div`
  width: 496px;
  height: 368px;
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
  .disable {
    background-color: #ffffff;
    color: black;
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
const PhoneInput = styled.div`
  position: relative;
  Input {
    padding-left: 55px;
  }
`;
PhoneInput.Code = styled.div`
  position: absolute;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  /* identical to box height, or 15px */

  letter-spacing: -0.3px;

  /* Text/main */

  color: #273140;
  top: 30%;
  left: 15px;
  ${({ mode }) => mode && "color:#ffffff;"}
`;
const ErrIcon = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 30%;
  right: 10px;
`;
const NameInput = styled.div`
  position: relative;
`;
const Mode = styled.img`
  width: 30px;
  cursor: pointer;
  margin-right: -50px;
  @media (max-width: 1000px) {
    margin: 0px;

    right: 1px;
    top: 5px;
  }
`;
export {
  Wrapper,
  Con,
  Contacts,
  Button,
  NavbarWrapper,
  NameInput,
  ErrIcon,
  MobileContacts,
  Form,
  Mode,
  Container,
  Header,
  Icon,
  Body,
  Input,
  Submit,
  PhoneInput,
  Select,
  Option,
};
