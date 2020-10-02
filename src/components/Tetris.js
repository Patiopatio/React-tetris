import React from "react";

import {createStage }from '../gameHelpers'

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";


const Tetris = ({ callback }) => {
  return (
    <div>
      <Stage stage={createStage()}/>
        <div>
          <Display text="Score"></Display>
          <Display text="Rows"></Display>
          <Display text="Level"></Display>
        </div>
      <StartButton />
    </div>
  );
};

export default Tetris;
