// Actions
const WILL_APPEAR = "my-app/nav/WA";
const DID_APPEAR = "my-app/nav/DA";
const WILL_DISAPPEAR = "my-app/nav/WD";
const DID_DISAPPEAR = "my-app/nav/DD";

const initialState = {
  screenName: "none",
  status: "none"
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  if (action.screenName) {
    switch (action.type) {
      // do reducer stuff
      default:
        return Object.assign({}, state, { screenName: action.screenName });
    }
  }
  return state;
}

// Action Creators
export function screenWA(name) {
  return { type: WILL_APPEAR, screenName: name };
}
export function screenDA(name) {
  return { type: DID_APPEAR, screenName: name };
}
export function screenWD(name) {
  return { type: WILL_DISAPPEAR, screenName: name };
}
export function screenDD(name) {
  return { type: DID_DISAPPEAR, screenName: name };
}
