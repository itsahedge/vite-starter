import styled from "@emotion/styled";
import { css } from "@emotion/react/dist/emotion-react.cjs";

export const NotALink = styled("div")`
  color: blue;
`;

const Link = styled("a")`
  color: red;
`;

const Icon = styled("svg")`
  stroke: green;
`;

const titleStyle = css({
  boxSizing: "border-box",
  width: 300,
  height: 200,
});

const subtitleStyle = css`
  box-sizing: border-box;
  width: 100px;
  height: 60px;
`;
