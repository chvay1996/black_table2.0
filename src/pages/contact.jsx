import React from "react";

const Contact = () => {
  const keyPlayer = [
    "WHCNBX7zL3",
    "9wxxx19QEP",
    "4ynMzJ3xMy",
    "p9lS6D5SnD",
    "ejp2zdE9sP",
    "68vV5kFctu",
    "4RoYs7IPK2",
    "9MwRObjEX7",
    "DWa0Nn2d1L",
    "Jl4bNjHB9O",
    "96mQCqVGXJ",
    "dug7RCN7zZ",
    "3KKjdPDdEQ",
    "0koQ3NPjCG",
    "DmALe64twm",
    "0IUmqmgXzL",
    "8qu8vrnBZ2",
    "JBY4synKz8",
    "vK6t9ubXYV",
    "PYdn9UANck",
    "YTZwrL7Y0s",
    "5a57T6Q0E5",
    "f6JbJh32X6",
    "29SEVFMDeg",
    "FjY1inP03s",
    "YM0hlrCYd8",
    "NXCeoAR7Tg",
    "IUOTz2GoTn",
    "UeERsVc8Pt",
    "hTbT1usBkT",
  ];
  const keys = prompt("Введите ключ!");

  if (keyPlayer.includes(keys)) {
    return <h1 style={{ color: "white" }}>11111</h1>;
  } else alert("Обратитесь к администрации!");
};

export default Contact;

// import React from "react";
// import { Nav, NavLink, NavMenu } from "../components/Navbar/NavbarElements";

// const Home = () => {
//   const keyPlayer = [
//     "WHCNBX7zL3",
//     "9wxxx19QEP",
//     "4ynMzJ3xMy",
//     "p9lS6D5SnD",
//     "ejp2zdE9sP",
//     "68vV5kFctu",
//     "4RoYs7IPK2",
//     "9MwRObjEX7",
//     "DWa0Nn2d1L",
//     "Jl4bNjHB9O",
//     "96mQCqVGXJ",
//     "dug7RCN7zZ",
//     "3KKjdPDdEQ",
//     "0koQ3NPjCG",
//     "DmALe64twm",
//     "0IUmqmgXzL",
//     "8qu8vrnBZ2",
//     "JBY4synKz8",
//     "vK6t9ubXYV",
//     "PYdn9UANck",
//     "YTZwrL7Y0s",
//     "5a57T6Q0E5",
//     "f6JbJh32X6",
//     "29SEVFMDeg",
//     "FjY1inP03s",
//     "YM0hlrCYd8",
//     "NXCeoAR7Tg",
//     "IUOTz2GoTn",
//     "UeERsVc8Pt",
//     "hTbT1usBkT",
//   ];

//   if (keyPlayer.includes(keys)) {
//     return (
//       <div>
//         <h1 style={{ color: "white" }}>
//           Приветствую вас на страницах нашей таблицы
//         </h1>
//         <>
//           <Nav>
//             <NavMenu>
//               <div
//                 style={{
//                   display: "contents",
//                 }}
//               >
//                 <NavLink
//                   to={"/tfour"}
//                   style={{
//                     margin: "500px 0px 0px 330px",
//                     paddingBottom: "100px",
//                     paddingRight: "50px",
//                     paddingLeft: "50px",
//                     paddingTop: "100px",
//                     fontSize: "30px",
//                   }}
//                 >
//                   WEST
//                 </NavLink>
//                 <NavLink
//                   to={"/maunt"}
//                   style={{
//                     margin: "500px 0px 0px 50px",
//                     paddingBottom: "100px",
//                     paddingRight: "50px",
//                     paddingLeft: "50px",
//                     paddingTop: "100px",
//                     fontSize: "30px",
//                   }}
//                 >
//                   WEST Маунт
//                 </NavLink>
//                 <NavLink
//                   to="/threeE"
//                   style={{
//                     margin: "500px 0px 0px 50px",
//                     paddingBottom: "100px",
//                     paddingRight: "50px",
//                     paddingLeft: "50px",
//                     paddingTop: "100px",
//                     fontSize: "30px",
//                   }}
//                 >
//                   EAST
//                 </NavLink>
//                 <NavLink
//                   to={"/maunte"}
//                   style={{
//                     margin: "500px 0px 0px 50px",
//                     paddingBottom: "100px",
//                     paddingRight: "50px",
//                     paddingLeft: "50px",
//                     paddingTop: "100px",
//                     fontSize: "30px",
//                   }}
//                 >
//                   EAST Маунт
//                 </NavLink>
//               </div>
//             </NavMenu>
//           </Nav>
//           <Nav>
//             <NavMenu>
//               <div
//                 style={{
//                   display: "contents",
//                 }}
//               >
//                 <NavLink
//                   to={"/westCraft"}
//                   style={{
//                     margin: "1150px 0px 0px 400px",
//                     paddingBottom: "100px",
//                     paddingRight: "50px",
//                     paddingLeft: "50px",
//                     paddingTop: "100px",
//                     fontSize: "30px",
//                   }}
//                 >
//                   WEST Переработка
//                 </NavLink>
//                 <NavLink
//                   to="/eastCraft"
//                   style={{
//                     margin: "1150px 0px 0px 200px",
//                     paddingBottom: "100px",
//                     paddingRight: "50px",
//                     paddingLeft: "50px",
//                     paddingTop: "100px",
//                     fontSize: "30px",
//                   }}
//                 >
//                   EAST Переработка
//                 </NavLink>
//               </div>
//             </NavMenu>
//           </Nav>
//         </>
//       </div>
//     );
//   } else alert("Обратитесь к администрации!");
// };

// const keys = prompt("Введите ключ!");

// export default Home;
