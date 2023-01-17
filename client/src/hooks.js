import React from "react";
import { useCallback, useLayoutEffect, useEffect, useRef, useState, useMemo } from 'react'
import { getSize } from './utils'

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      // update state and normalize cursor postion based on window size
      setMousePosition({ x: (ev.clientX / window.innerWidth).toFixed(2), y: (ev.clientY/ window.innerWidth).toFixed(2) });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export const useMouseClicked = () => {
    const [mouseClicked, setMouseClicked] = React.useState({
      mouseClicked : false
    });
  
    React.useEffect(() => {
      const updateMouseClicked = (ev) => {
        setMouseClicked({ mouseClicked: True });
      };
  
      window.addEventListener("click", updateMouseClicked);
  
      return () => {
        window.removeEventListener("click", updateMouseClicked);
      };
    }, []);
  
    return mouseClicked;
  };

export const useUpdateParticles = (particleList, mousePosition, mouseClicked, deltaTime
) => {
  const [Particles, setParticles] = React.useState({
    Particles: particleList,
  });

  React.useEffect(() => {
    setTimeout(() => {
        const newParticleList = updateAllPositions(particleList, mousePosition, mouseClicked, deltaTime);
        setParticles({ Particles: newParticleList });
    }, 1000);
  }, [mousePosition, mouseClicked]);

  return Particles;
};
