import React from "react";
import Wrapper from "../assets/wrappers/JobInfo";

const JobInfo = ({ text, icon }) => {
  return (
    <Wrapper>
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </Wrapper>
  );
};

export default JobInfo;
