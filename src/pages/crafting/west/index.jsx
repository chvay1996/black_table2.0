import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
} from "../../../components/Navbar/NavbarElements";

const Home = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Выберите ресурс для переработки</h1>
      <>
        <Nav>
          <NavMenu>
            <div
              style={{
                display: "contents",
              }}
            >
              <NavLink
                to={"/WestCloth"}
                style={{
                  margin: "300px 0px 0px 200px",
                  paddingBottom: "25px",
                  paddingRight: "16px",
                  paddingLeft: "16px",
                  paddingTop: "25px",
                  fontSize: "25px",
                }}
              >
                Ткань - Волокно
              </NavLink>
              <NavLink
                to="/westplanks"
                style={{
                  margin: "300px 0px 0px 100px",
                  paddingBottom: "25px",
                  paddingRight: "16px",
                  paddingLeft: "16px",
                  paddingTop: "25px",
                  fontSize: "25px",
                }}
              >
                Брусья - Бревна
              </NavLink>
              <NavLink
                to="/westmetalBar"
                style={{
                  margin: "300px 0px 0px 100px",
                  paddingBottom: "25px",
                  paddingRight: "16px",
                  paddingLeft: "16px",
                  paddingTop: "25px",
                  fontSize: "25px",
                }}
              >
                Слитки - Руда
              </NavLink>
              <NavLink
                to="/westhide"
                style={{
                  margin: "300px 0px 0px 100px",
                  paddingBottom: "25px",
                  paddingRight: "16px",
                  paddingLeft: "16px",
                  paddingTop: "25px",
                  fontSize: "25px",
                }}
              >
                Шкура - Кожа
              </NavLink>
              <NavLink
                to="/weststoneblock"
                style={{
                  margin: "300px 0px 0px 100px",
                  paddingBottom: "25px",
                  paddingRight: "16px",
                  paddingLeft: "16px",
                  paddingTop: "25px",
                  fontSize: "25px",
                }}
              >
                Блоки - Камень
              </NavLink>
            </div>
          </NavMenu>
        </Nav>
      </>
    </div>
  );
};

export default Home;
