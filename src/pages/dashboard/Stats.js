import { useEffect } from "react";
import { StatsContainer, Loading, ChartsContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
const Stats = () => {
  const {isLoading, monthlyApplications} = useSelector(state => state.allJobs);
  console.log(monthlyApplications)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, [dispatch]);

  if (isLoading) {
    return (<Loading center />)
  }
  return <>
  <StatsContainer />
  {monthlyApplications.length > 0 && <ChartsContainer />}
  </>
};

export default Stats;
