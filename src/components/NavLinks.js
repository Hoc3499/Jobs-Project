import React from 'react';
import links from '../utils/links'
import {NavLink} from 'react-router-dom'

const NavLinks = ({closeSidebar}) => {

  return (
    <div className="nav-links">
            {links.map((link) => {
              const { id, text, path, icon } = link;
              return (
                <NavLink
                  to={path}
                  key={id}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
  )
}

export default NavLinks