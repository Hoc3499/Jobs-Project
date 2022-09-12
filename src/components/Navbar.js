import React from "react";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Navbar";
import {
  clearStore, toggleLogout,
  toggleSidebar
} from "../features/user/userSlice";
import Logo from "./Logo";
const Navbar = () => {
  const { user, isLogoutOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => dispatch(toggleLogout())}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={isLogoutOpen ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(clearStore("Logging Out..."))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
