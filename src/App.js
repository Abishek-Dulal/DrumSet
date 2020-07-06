import React, { useState, useEffect } from "react";
import "./styles.css";
import { soundData } from "./component/soudData";
import MusicButton from "./component/MusicButton";
import styled from "styled-components";
import Switch from "./component/Switch";
import ControlContainer from "./component/ControlContainer";
import TotalContainer from "./component/TotalContainer";

let DrumContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5px;
  row-gap: 5px;
  width: 250px;
  border: 8px solid purple;
`;

let NameDisplay = styled.div`
  min-width: 150px;
  background: grey;
  height: 40px;
  padding: 5px;
  font-weight: bold;
  font-size: 40px;
  color: white;
`;

export default function App() {
  let [power, setPower] = useState(true);
  let [instrument, setInstrument] = useState("piano");
  let [value, setValue] = useState();
  let [volume, setVolume] = useState(100);

  let handleMusic = index => {
    if (power) {
      let data = soundData[index][`${instrument}_audio`];
      let audio = new Audio(data);
      audio.volume = volume / 100;
      handleValue(soundData[index][`${instrument}_name`]);
      audio.play();
    }
  };

  let handlePower = on => {
    setPower(on);
    if (on === false) {
      handleValue("");
    }
  };

  let handleValue = text => {
    if (power) {
      setValue(text);
    }
  };

  let handleInstrument = on => {
    if (on) {
      setInstrument("piano");
      handleValue("piano kit");
    } else {
      setInstrument("drum");
      handleValue("Drum kit");
    }
  };

  let handleVolume = e => {
    setVolume(e.target.value);
  };

  useEffect(() => {
    handleValue(volume);
  }, [volume]);

  return (
    <div className="App">
      <TotalContainer>
        <DrumContainer>
          {soundData.map((sound, index) => {
            return (
              <MusicButton
                index={index}
                keyCode={sound.keyCode}
                namedId={sound.id}
                handleMusic={handleMusic}
                key={index}
              />
            );
          })}
        </DrumContainer>
        <ControlContainer>
          <Switch on={power} handleOn={handlePower} title="power" />
          <NameDisplay>{value}</NameDisplay>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onInput={handleVolume}
          />
          <Switch handleOn={handleInstrument} title={instrument} />
        </ControlContainer>
      </TotalContainer>
    </div>
  );
}
