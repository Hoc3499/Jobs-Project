import authHeader from "../../utils/authHeader";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

export const allJobsThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const res = await customFetch.get(url, authHeader(thunkAPI));
    console.log(res);
    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const res = await customFetch.get("/jobs/stats", authHeader(thunkAPI));
    console.log(res.data);
    return res.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
