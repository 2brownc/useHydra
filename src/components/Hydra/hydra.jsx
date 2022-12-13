import React, { useReducer, useEffect, useState } from 'react';

import { init, reducer } from './hydraStore';
import actions from './hydraActions';


function useHydra(gapTolerance = 1000) {

  const [state, dispatch] = useReducer(
    reducer,
    gapTolerance,
    init
  );

  const [currentKeyCombo, setCurrentKeyCombo] = useState([]);

  const [currentGapTolerance, setGapTolerance] = useState(gapTolerance);

  useEffect(() => {
    dispatch({
      type: actions.SET_GAP,
      payload: { gapTolerance: currentGapTolerance }
    });
  }, [currentGapTolerance]);

  useEffect(() => {
    const listener = (event) => {
      dispatch({
        type: actions.LISTEN,
        payload: { keyCode: event.keyCode },
      });
    }
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
      setCurrentKeyCombo(state.currentKeyCombo);
    };
  });

  return [
    currentKeyCombo,
    setGapTolerance
  ];
}

export default useHydra;



