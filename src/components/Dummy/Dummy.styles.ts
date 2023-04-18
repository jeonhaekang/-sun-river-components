import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FlexCenter } from "~/styles";
import { DEFAULT, HEIGHT_UNIT_MAP, WIDTH_UNIT_MAP } from "./Dummy.constants";
import { DummyProps } from "./Dummy.types";

const getBaseStyle = ({
  unit = DEFAULT.unit,
  width = DEFAULT.width,
  height = DEFAULT.height,
  bgColor = DEFAULT.bgColor
}: DummyProps) => {
  return css`
    width: ${width}${WIDTH_UNIT_MAP[unit]};
    height: ${height}${HEIGHT_UNIT_MAP[unit]};

    background-color: ${bgColor};
  `;
};

export const Dummy = styled(FlexCenter)<DummyProps>`
  ${props => getBaseStyle(props)}
`;
