import React from "react";
import styled from "styled-components";

let StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  row-gap: 20px;
`;

export default function(props) {
  return <StyledDiv>{props.children}</StyledDiv>;
}
