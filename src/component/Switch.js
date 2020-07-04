import React, { useState } from "react";
import styled from "styled-components";

let StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
let StyledTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;

let SwitchContainer = styled.div`
  width: 50px;
  height: 20px;
  background: black;
`;

let StyledButton = styled.div`
  width: 50%;
  height: 100%;
  background: blue;
  float: ${props => (props.on ? "right" : "left")};
`;

export default function(props) {
  let [isOn, setOn] = useState(true);

  let handleClick = () => {
    setOn(!isOn);
    props.handleOn(!isOn);
  };

  return (
    <StyledDiv>
      <StyledTitle>{props.title}</StyledTitle>
      <SwitchContainer onClick={handleClick}>
        <StyledButton on={isOn} />
      </SwitchContainer>
    </StyledDiv>
  );
}
