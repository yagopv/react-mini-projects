import React, { useState, useRef } from 'react';
import ReactLottie from 'react-lottie';

export function Lottie({
  loop = true,
  autoplay = true,
  animationData,
  path,
  width,
  height
}) {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const defaultOptions = useRef({
    loop,
    autoplay,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    path
  });

  return (
    <ReactLottie
      options={defaultOptions.current}
      height={height}
      width={width}
      isStopped={isStopped}
      isPaused={isPaused}
    />
  );
}
