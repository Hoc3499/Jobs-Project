import authHeader from "../../utils/authHeader";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { getAllJobs, hideLoading, showLoading } from "../allJobs/allJobsSlice";
import { clearValues } from "./jobSlice";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const res = await customFetch.post("/jobs", job, authHeader(thunkAPI));
    thunkAPI.dispatch(clearValues());
    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const res = await customFetch.delete(`jobs/${jobId}`, authHeader(thunkAPI));
    thunkAPI.dispatch(getAllJobs());
    return res.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const res = await customFetch.patch(
      `jobs/${jobId}`,
      job,
      authHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
