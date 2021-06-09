import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => (something) => {
  //   const res = await trackerApi.get("/tracks");
  //   console.log(res);
};
const createTrack = (dispatch) => async (name, locations) => {
  console.log(name, locations.length);
  await trackerApi.post("/tracks", { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
