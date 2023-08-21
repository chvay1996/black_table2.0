import React, { useState } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      console.log("false");
      navigate("/east");
    } else {
      console.log("true");
      navigate("/west");
    }
  };

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
            {/* <NavLink
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
            </NavLink> */}
          </div>
          <h3 style={{ color: "yellow" }}>WEST</h3>
          <div className="toggle-button-cover">
            <div className="button-cover">
              <div
                className={`button b2 ${isOpen ? "active" : ""}`}
                id="button-11"
              >
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={handleClick}
                />
                <div className="knobs">
                  <span></span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <h3 style={{ color: "yellow" }}>EAST</h3>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
