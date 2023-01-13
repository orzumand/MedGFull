import React, { useContext } from "react";
import { DMode } from "../../../Context/context";
import { Container, Img, Wrapper } from "./style";
import Partners from "../../../Assets/Img/Partner.svg";
import { useTranslation } from "react-i18next";

const Partner = () => {
  const [darkmode] = useContext(DMode);
  const mode = darkmode ? 1 : 0;
  const { t } = useTranslation();
  return (
    <Wrapper mode={mode}>
      <Container mode={mode}>
        <div className="title">{t("partner")}</div>
        <Img src={Partners} />
      </Container>
    </Wrapper>
  );
};

export default Partner;
