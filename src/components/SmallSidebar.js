import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { toggleSidebar } from "../features/user/userSlice";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks closeSidebar={closeSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
