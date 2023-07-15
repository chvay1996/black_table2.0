import React from "react";
import { Nav, NavLink, NavMenu } from "../components/Navbar/NavbarElements";

const Home = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Сервер EAST</h1>
      <>
        <Nav>
          <NavMenu>
            <div
              style={{
                display: "contents",
              }}
            >
              <NavLink
                to={"/threeE"}
                style={{
                  margin: "500px 0px 0px 530px",
                  padding: "50px",
                  fontSize: "30px",
                }}
              >
                Рынок
              </NavLink>
              <NavLink
                to={"/maunte"}
                style={{
                  margin: "500px 0px 0px 50px",
                  padding: "50px",
                  fontSize: "30px",
                }}
              >
                Маунт
              </NavLink>
              <NavLink
                to={"/eastCraft"}
                style={{
                  margin: "500px 0px 0px 50px",
                  padding: "50px",
                  fontSize: "30px",
                }}
              >
                Переработка
              </NavLink>
            </div>
          </NavMenu>
        </Nav>
      </>
    </div>
  );
};

export default Home;
