import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => (something) => {};
const createTrack = (dispatch) => (name, locations) => {
  console.log(name, locations.length);
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
