import React, { FC } from "react";

import * as S from "./styles";

interface Props {
  children?: React.ReactNode;
  active: boolean;
}

const TabPanel: FC<Props> = ({ children, active, ...other }) => (
  <div role="tabpanel" hidden={!active} {...other}>
    {active && <S.Container>{children}</S.Container>}
  </div>
);

export default TabPanel;
