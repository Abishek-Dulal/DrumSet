import React, { useEffect, createRef, useState } from "react";
import styled from "styled-components";

let StyledButton = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  background: ${props => (props.isClicked ? "orange" : "crimson")};
  font-weight: bold;
  color: white;
  &:active {
    background: orange;
  }
`;

export default function(props) {
  let ref = createRef();
  let [isClicked, setClicked] = useState(false);
  let keyFunc = e => {
    if (e.keyCode === props.keyCode) {
      setClicked(true);
      props.handleMusic(props.index);
      setTimeout(() => {
        setClicked(false);
      }, 150);
    }
  };

  let bouncedKeyFunc = debounce(keyFunc, 150);
  useEffect(() => {
    document.addEventListener("keypress", bouncedKeyFunc);
    return () => {
      document.removeEventListener("keypress", bouncedKeyFunc);
    };
  });

  return (
    <StyledButton
      ref={ref}
      isClicked={isClicked}
      onClick={() => props.handleMusic(props.index)}
    >
      {props.namedId}
    </StyledButton>
  );
}

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
