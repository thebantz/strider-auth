import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import tracker from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // make API request
    // if we sign up, modify our state, and say that we are authenticated
    // if signing up fails, we probably need to reflect an error message
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to sign in
    // handle success by updating state
    // handle failure
  };
};

const signout = (dispatch) => {
  return () => {};
};
export const { Context, Provider } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
  },
  { isSignedIn: false, errorMessage: "" }
);
