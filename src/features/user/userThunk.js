import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValues } from "../job/jobSlice";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const res = await customFetch.post("/auth/registerUser", user);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const res = await customFetch.post("auth/login", user);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const res = await customFetch.patch("auth/updateUser", user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
