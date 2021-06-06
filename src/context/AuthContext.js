import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make API request
    // if we sign up, modify our state, and say that we are authenticated
    // if signing up fails, we probably need to reflect an error message
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
  { isSignedIn: false }
);
