import React from "react";
import styled from "styled-components";

let StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function(props) {
  return <StyledDiv>{props.children}</StyledDiv>;
}
