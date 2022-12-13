import actions from './hydraActions';

function init(
  gapTolerance
) {
  return {
    currentKeyCombo: [],
    lastKeyDownTime: null,
    gapTolerance,
  };
}

function reducer(state, action) {

  switch (action.type) {
    case actions.LISTEN:
      // how long ago was the last key down? 
      const timeLapsed = Date.now() - state.lastKeyDownTime;

      /*
        when testing only
      */
      if (timeLapsed < 3) {
        return state;
      }
      /* remove in production */

      if (timeLapsed < state.gapTolerance) {
        state.currentKeyCombo.push(action.payload.keyCode);
      } else {
        state.currentKeyCombo = [action.payload.keyCode];
      }

      state.lastKeyDownTime = Date.now();
      return { ...state };

    case actions.SET_GAP:
      const gapTolerance = action.payload.gapTolerance;
      return {
        ...state,
        gapTolerance
      };

    default:
      throw Error(`Unknown Action Type: ${action.type}`);
  }
}

export { init, reducer };