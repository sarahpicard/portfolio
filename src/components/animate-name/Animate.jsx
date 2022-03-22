import React from "react";
import { Animate, AnimateGroup } from "react-simple-animate";

const AnimateName = () => {
  return(
    <AnimateGroup play>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>S</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>a</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>r</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>a</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>h</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>  </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>A.</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>  </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>P</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>i</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>c</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>a</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>r</Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>d</Animate>
    </AnimateGroup>
  )
}

export default AnimateName