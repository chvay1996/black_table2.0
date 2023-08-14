import React, { useState } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <div style={{ margin: "10px 50px 0 0" }}>
            <NavLink
              style={{
                fontSize: "30px",
                background: "blue",
                marginLeft: "200px",
                padding: "10px 150px 10px 150px",
                marginTop: "10px",
              }}
              to="/"
            >
              Главная
            </NavLink>
          </div>
          <div
            style={{
              margin: "10px 50px 0 0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "500px",
            }}
          >
            <NavLink
              style={{
                fontSize: "30px",
                background: "blue",
                padding: "10px 50px 10px 50px",
                marginTop: "10px",
              }}
              to="/west"
            >
              WEST
            </NavLink>
            <NavLink
              style={{
                fontSize: "30px",
                background: "blue",
                marginLeft: "10px",
                padding: "10px 50px 10px 50px",
                marginTop: "10px",
              }}
              to="/east"
            >
              EAST
            </NavLink>
          </div>
          {/* <h3>WEST</h3>
          <div class="toggle-button-cover">
            <div class="button-cover">
              <div class="button b2" id="button-11">
                <input type="checkbox" class="checkbox" />
                <div class="knobs">
                  <span></span>
                </div>
                <div class=""></div>
              </div>
            </div>
          </div>
          <h3>EAST</h3> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
