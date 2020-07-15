import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lottie/data.json';
export function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
}
