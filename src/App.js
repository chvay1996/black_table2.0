import React, { Fragment, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import Home from "./pages";
import WestCraft from "./pages/crafting/west/index.jsx";
import EastCraft from "./pages/crafting/east/index.jsx";
import Hide1 from "./pages/crafting/east/hide/hide1.jsx";
import Hide from "./pages/crafting/east/hide/hide.jsx";
import WestHide from "./pages/crafting/west/hide/hide.jsx";
import Mrtalbar1 from "./pages/crafting/east/METALBAR/METALBAR1.jsx";
import WestMrtalbar from "./pages/crafting/west/METALBAR/METALBAR.jsx";
import Mrtalbar from "./pages/crafting/east/METALBAR/METALBAR.jsx";
import Planks1 from "./pages/crafting/east/PLANKS/PLANKS1.jsx";
import WestPlanks from "./pages/crafting/west/PLANKS/PLANKS.jsx";
import Planks from "./pages/crafting/east/PLANKS/PLANKS.jsx";
import Stoneblock1 from "./pages/crafting/east/stoneblock/stoneblock1.jsx";
import WestStoneblock from "./pages/crafting/west/stoneblock/stoneblock.jsx";
import Stoneblock from "./pages/crafting/east/stoneblock/stoneblock.jsx";
import EastCloth1 from "./pages/crafting/east/cloth/cloth1.jsx";
import WestCloth from "./pages/crafting/west/cloth/cloth.jsx";
import EastCloth from "./pages/crafting/east/cloth/cloth.jsx";
import THree from "./pages/west/three/three";
import TFour from "./pages/west/four/tfour";
import FourOne from "./pages/west/four/fourOne/fourOne";
import TFive from "./pages/west/five/tfive";
import FiveOne from "./pages/west/five/fiveOne/fiveOne";
import TSix from "./pages/west/six/tsix";
import SixOne from "./pages/west/six/tsixOne/sixOne";
import Seven from "./pages/west/seven/seven";
import SevenOne from "./pages/west/seven/sevenOne/sevenOne";
import Eight from "./pages/west/eight/eight";
import EightOne from "./pages/west/eight/eightOne/eightOne";
import ScrollButton from "./pages/ScrollButton/ScrollButton";
import { Content } from "./pages/ScrollButton/Styles";
import THreeE from "./pages/east/three/three";
import TFourE from "./pages/east/four/tfour";
import FourOneE from "./pages/east/four/fourOne/fourOne";
import TFiveE from "./pages/east/five/tfive";
import FiveOneE from "./pages/east/five/fiveOne/fiveOne";
import TSixE from "./pages/east/six/tsix";
import SixOneE from "./pages/east/six/tsixOne/sixOne";
import SevenE from "./pages/east/seven/seven";
import SevenOneE from "./pages/east/seven/sevenOne/sevenOne";
import EightE from "./pages/east/eight/eight";
import EightOneE from "./pages/east/eight/eightOne/eightOne";
import Maunt from "./pages/west/maunts/maunt.jsx";
import Maunte from "./pages/east/maunts/maunt.jsx";

import Test from "./pages/contact";
import WEST from "./pages/west";
import EAST from "./pages/east";

function App() {
  const finishKeyPlauer = [
    "eEPrE20Fu6",
    "ZIANpc4Gnr",
    "Su3t5BQ4gM",
    "HT9yq9VinX",
         ];
  const keyPlayer = [
    "V0KpNNxpZn",
    "z4qQ9vn43A",
    "M0kwX3yOyv",
    "r5HdxOewO5",
    "ZEy3Um4Jlq",
    "bwwA3lzCh4",
    "5R7qj6hFmu",
    "yti77UHmn2",
    "HnYfSh7wWC",
    "Fy0F55J2nk",
    "Ho2qbHP4Gi",
    "83ol5AwE84",
    "m2RI7vLLbG",
    "wA2ucd7WOM",
    "9IFkD9S179",
    "JdSJsq5g6l",
    "f5vgaG5t4O",
    "keLw8GGAga",
  ];

  const [cookies, setCookie] = useCookies(["userKey"]);
  const isValidUserKey = keyPlayer.includes(cookies.userKey);
  const isValidUserfinishKeyPlauer = finishKeyPlauer.includes(cookies.userKey);

  useEffect(() => {
    if (!cookies.userKey) {
      const key = prompt("Введите ключ!").trim();

      if (keyPlayer.includes(key)) {
        // Установите куки с сроком действия в 20 дней
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 25);
        setCookie("userKey", key, { path: "/", expires: expirationDate });
      } else if (finishKeyPlauer.includes(key)) {
        alert(
          `У Вас в ближайшее время заканчивается подписка, пожалуйста обратитесь к администрации для продления подписки! 
        
В противном случае у Вас ограничится доступ к таблице
        
Не допускайте ограничения доступа к таблице — свяжитесь с нами как можно скорее!`
        );
        setCookie("userKey", key, { path: "/" });
      } else {
        alert("Введите ключ или обратитесь к администрации!");
      }
    }
  }, []);
  if (isValidUserKey || isValidUserfinishKeyPlauer) {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/three" element={<THree />} />
            <Route path="/threeE" element={<THreeE />} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="/maunt" element={<Maunt />} />
            <Route exact path="/maunte" element={<Maunte />} />

            <Route exact path="/westCraft" element={<WestCraft />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/planks1" element={<Planks1 />} />
            <Route path="/planks" element={<Planks />} />
            <Route path="/Westplanks" element={<WestPlanks />} />
            <Route path="/hide1" element={<Hide1 />} />
            <Route path="/Westhide" element={<WestHide />} />
            <Route path="/hide" element={<Hide />} />
            <Route path="/stoneblock1" element={<Stoneblock1 />} />
            <Route path="/Weststoneblock" element={<WestStoneblock />} />
            <Route path="/stoneblock" element={<Stoneblock />} />
            <Route path="/metalBar1" element={<Mrtalbar1 />} />
            <Route path="/WestmetalBar" element={<WestMrtalbar />} />
            <Route path="/metalBar" element={<Mrtalbar />} />
            <Route path="/eastCloth1" element={<EastCloth1 />} />
            <Route path="/WestCloth" element={<WestCloth />} />
            <Route path="/eastCloth" element={<EastCloth />} />
            <Route path="/eastCraft" element={<EastCraft />} />
            <Route path="/tfour" element={<TFour />} />
            <Route path="/fourOne" element={<FourOne />} />
            <Route path="/tfive" element={<TFive />} />
            <Route path="/fiveOne" element={<FiveOne />} />
            <Route path="/tsix" element={<TSix />} />
            <Route path="/sixOne" element={<SixOne />} />
            <Route path="/seven" element={<Seven />} />
            <Route path="/sevenOne" element={<SevenOne />} />
            <Route path="/eight" element={<Eight />} />
            <Route path="/eightOne" element={<EightOne />} />
            <Route path="/tfourE" element={<TFourE />} />
            <Route path="/fourOneE" element={<FourOneE />} />
            <Route path="/tfiveE" element={<TFiveE />} />
            <Route path="/fiveOneE" element={<FiveOneE />} />
            <Route path="/tsixE" element={<TSixE />} />
            <Route path="/sixOneE" element={<SixOneE />} />
            <Route path="/sevenE" element={<SevenE />} />
            <Route path="/sevenOneE" element={<SevenOneE />} />
            <Route path="/eightE" element={<EightE />} />
            <Route path="/eightOneE" element={<EightOneE />} />
            <Route path="/west" element={<WEST />} />
            <Route path="/east" element={<EAST />} />
          </Routes>
        </Router>
        <Fragment>
          <Content />
          <ScrollButton />
        </Fragment>
      </>
    );
  }
}

export default App;

// import React, { Fragment, useEffect } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import Home from "./pages";
// import WestCraft from "./pages/crafting/west/index.jsx";
// import EastCraft from "./pages/crafting/east/index.jsx";
// import Hide1 from "./pages/crafting/east/hide/hide1.jsx";
// import Hide from "./pages/crafting/east/hide/hide.jsx";
// import WestHide from "./pages/crafting/west/hide/hide.jsx";
// import Mrtalbar1 from "./pages/crafting/east/METALBAR/METALBAR1.jsx";
// import WestMrtalbar from "./pages/crafting/west/METALBAR/METALBAR.jsx";
// import Mrtalbar from "./pages/crafting/east/METALBAR/METALBAR.jsx";
// import Planks1 from "./pages/crafting/east/PLANKS/PLANKS1.jsx";
// import WestPlanks from "./pages/crafting/west/PLANKS/PLANKS.jsx";
// import Planks from "./pages/crafting/east/PLANKS/PLANKS.jsx";
// import Stoneblock1 from "./pages/crafting/east/stoneblock/stoneblock1.jsx";
// import WestStoneblock from "./pages/crafting/west/stoneblock/stoneblock.jsx";
// import Stoneblock from "./pages/crafting/east/stoneblock/stoneblock.jsx";
// import EastCloth1 from "./pages/crafting/east/cloth/cloth1.jsx";
// import WestCloth from "./pages/crafting/west/cloth/cloth.jsx";
// import EastCloth from "./pages/crafting/east/cloth/cloth.jsx";
// import THree from "./pages/west/three/three";
// import TFour from "./pages/west/four/tfour";
// import FourOne from "./pages/west/four/fourOne/fourOne";
// import TFive from "./pages/west/five/tfive";
// import FiveOne from "./pages/west/five/fiveOne/fiveOne";
// import TSix from "./pages/west/six/tsix";
// import SixOne from "./pages/west/six/tsixOne/sixOne";
// import Seven from "./pages/west/seven/seven";
// import SevenOne from "./pages/west/seven/sevenOne/sevenOne";
// import Eight from "./pages/west/eight/eight";
// import EightOne from "./pages/west/eight/eightOne/eightOne";
// import ScrollButton from "./pages/ScrollButton/ScrollButton";
// import { Content } from "./pages/ScrollButton/Styles";
// import THreeE from "./pages/east/three/three";
// import TFourE from "./pages/east/four/tfour";
// import FourOneE from "./pages/east/four/fourOne/fourOne";
// import TFiveE from "./pages/east/five/tfive";
// import FiveOneE from "./pages/east/five/fiveOne/fiveOne";
// import TSixE from "./pages/east/six/tsix";
// import SixOneE from "./pages/east/six/tsixOne/sixOne";
// import SevenE from "./pages/east/seven/seven";
// import SevenOneE from "./pages/east/seven/sevenOne/sevenOne";
// import EightE from "./pages/east/eight/eight";
// import EightOneE from "./pages/east/eight/eightOne/eightOne";
// import Maunt from "./pages/west/maunts/maunt.jsx";
// import Maunte from "./pages/east/maunts/maunt.jsx";

// import Test from "./pages/contact";
// import WEST from "./pages/west";
// import EAST from "./pages/east";

// function App() {
//   const finishKeyPlauer = [
//     "3KKjdPDdEQ",
//     "0koQ3NPjCG",
//     "DmALe64twm",
//     "0IUmqmgXzL",
//     "8qu8vrnBZ2",
//   ];
//   const keyPlayer = [
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
//     "nqKTXhW8v8",
//     "GWOff4d9DT",
//     "lgWj66NhGS",
//     "eJVOTP9oDB",
//     "SoXRifaU0h",
//     "LRy9ZAvzMe",
//     "dTfwl8uDD3",
//     "5gi4Q6gX9F",
//     "Xxhry9CE8G",
//     "CSaWhASGG8",
//     "y8m4S8szXM",
//     "Y10g2lDfdd",
//     "0n0JOSC0mn",
//     "Phk1rjT6gL",
//     "2MszitIQBR",
//     "nBDWFfBPz7",
//     "7S40JILiUH",
//     "9LPPsnhB1S",
//     "zs35pTaX3J",
//     "eEPrE20Fu6",
//     "Su3t5BQ4gM",
//     "ZIANpc4Gnr",
//   ];

//   const [cookies, setCookie] = useCookies(["userKey"]);
//   const isValidUserKey = keyPlayer.includes(cookies.userKey);
//   const isValidUserfinishKeyPlauer = finishKeyPlauer.includes(cookies.userKey);

//   useEffect(() => {
//     if (!cookies.userKey) {
//       const key = prompt("Введите ключ!").trim();

//       if (keyPlayer.includes(key)) {
//         setCookie("userKey", key, { path: "/" });
//       } else if (finishKeyPlauer.includes(key)) {
//         alert(
//           `У Вас в ближайшее время заканчивается подписка, пожалуйста обратитесь к администрации для продления подписки!

// В противном случае у Вас ограничится доступ к таблице

// Не допускайте ограничения доступа к таблице — свяжитесь с нами как можно скорее!`
//         );
//         setCookie("userKey", key, { path: "/" });
//       } else {
//         alert("Введите ключ или обратитесь к администрации!");
//       }
//     }
//   }, []);

//   if (isValidUserKey || isValidUserfinishKeyPlauer) {
//     return (
//       <>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/three" element={<THree />} />
//             <Route path="/threeE" element={<THreeE />} />
//             <Route exact path="/test" element={<Test />} />
//             <Route exact path="/maunt" element={<Maunt />} />
//             <Route exact path="/maunte" element={<Maunte />} />

//             <Route exact path="/westCraft" element={<WestCraft />} />
//             <Route exact path="/" element={<Home />} />
//             <Route path="/planks1" element={<Planks1 />} />
//             <Route path="/planks" element={<Planks />} />
//             <Route path="/Westplanks" element={<WestPlanks />} />
//             <Route path="/hide1" element={<Hide1 />} />
//             <Route path="/Westhide" element={<WestHide />} />
//             <Route path="/hide" element={<Hide />} />
//             <Route path="/stoneblock1" element={<Stoneblock1 />} />
//             <Route path="/Weststoneblock" element={<WestStoneblock />} />
//             <Route path="/stoneblock" element={<Stoneblock />} />
//             <Route path="/metalBar1" element={<Mrtalbar1 />} />
//             <Route path="/WestmetalBar" element={<WestMrtalbar />} />
//             <Route path="/metalBar" element={<Mrtalbar />} />
//             <Route path="/eastCloth1" element={<EastCloth1 />} />
//             <Route path="/WestCloth" element={<WestCloth />} />
//             <Route path="/eastCloth" element={<EastCloth />} />
//             <Route path="/eastCraft" element={<EastCraft />} />
//             <Route path="/tfour" element={<TFour />} />
//             <Route path="/fourOne" element={<FourOne />} />
//             <Route path="/tfive" element={<TFive />} />
//             <Route path="/fiveOne" element={<FiveOne />} />
//             <Route path="/tsix" element={<TSix />} />
//             <Route path="/sixOne" element={<SixOne />} />
//             <Route path="/seven" element={<Seven />} />
//             <Route path="/sevenOne" element={<SevenOne />} />
//             <Route path="/eight" element={<Eight />} />
//             <Route path="/eightOne" element={<EightOne />} />
//             <Route path="/tfourE" element={<TFourE />} />
//             <Route path="/fourOneE" element={<FourOneE />} />
//             <Route path="/tfiveE" element={<TFiveE />} />
//             <Route path="/fiveOneE" element={<FiveOneE />} />
//             <Route path="/tsixE" element={<TSixE />} />
//             <Route path="/sixOneE" element={<SixOneE />} />
//             <Route path="/sevenE" element={<SevenE />} />
//             <Route path="/sevenOneE" element={<SevenOneE />} />
//             <Route path="/eightE" element={<EightE />} />
//             <Route path="/eightOneE" element={<EightOneE />} />
//             <Route path="/west" element={<WEST />} />
//             <Route path="/east" element={<EAST />} />
//           </Routes>
//         </Router>
//         <Fragment>
//           <Content />
//           <ScrollButton />
//         </Fragment>
//       </>
//     );
//   }
// }

// export default App;
