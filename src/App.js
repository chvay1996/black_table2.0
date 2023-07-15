import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Three2 from "./pages/west/three/three2";
import Three3 from "./pages/west/three/three3";
import Three4 from "./pages/west/three/three4";
import Three5 from "./pages/west/three/three5";
import TFour from "./pages/west/four/tfour";
import Tfour2 from "./pages/west/four/tfour2";
import Tfour3 from "./pages/west/four/tfour3";
import Tfour4 from "./pages/west/four/tfour4";
import Tfour5 from "./pages/west/four/tfour5";
import FourOne from "./pages/west/four/fourOne/fourOne";
import FourOne2 from "./pages/west/four/fourOne/fourOne2";
import FourOne3 from "./pages/west/four/fourOne/fourOne3";
import FourOne4 from "./pages/west/four/fourOne/fourOne4";
import FourOne5 from "./pages/west/four/fourOne/fourOne5";
import TFive from "./pages/west/five/tfive";
import TFive2 from "./pages/west/five/tfive2";
import TFive3 from "./pages/west/five/tfive3";
import TFive4 from "./pages/west/five/tfive4";
import TFive5 from "./pages/west/five/tfive5";
import FiveOne from "./pages/west/five/fiveOne/fiveOne";
import FiveOne2 from "./pages/west/five/fiveOne/fiveOne2";
import FiveOne3 from "./pages/west/five/fiveOne/fiveOne3";
import FiveOne4 from "./pages/west/five/fiveOne/fiveOne4";
import FiveOne5 from "./pages/west/five/fiveOne/fiveOne5";
import TSix from "./pages/west/six/tsix";
import Tsix2 from "./pages/west/six/tsix2";
import Tsix3 from "./pages/west/six/tsix3";
import Tsix4 from "./pages/west/six/tsix4";
import Tsix5 from "./pages/west/six/tsix5";
import SixOne from "./pages/west/six/tsixOne/sixOne";
import SixOne2 from "./pages/west/six/tsixOne/sixOne2";
import SixOne3 from "./pages/west/six/tsixOne/sixOne3";
import SixOne4 from "./pages/west/six/tsixOne/sixOne4";
import SixOne5 from "./pages/west/six/tsixOne/sixOne5";
import Seven from "./pages/west/seven/seven";
import Seven2 from "./pages/west/seven/seven2";
import Seven3 from "./pages/west/seven/seven3";
import Seven4 from "./pages/west/seven/seven4";
import Seven5 from "./pages/west/seven/seven5";
import SevenOne from "./pages/west/seven/sevenOne/sevenOne";
import SevenOne2 from "./pages/west/seven/sevenOne/sevenOne2";
import SevenOne3 from "./pages/west/seven/sevenOne/sevenOne3";
import SevenOne4 from "./pages/west/seven/sevenOne/sevenOne4";
import SevenOne5 from "./pages/west/seven/sevenOne/sevenOne5";
import Eight from "./pages/west/eight/eight";
import Eight2 from "./pages/west/eight/eight2";
import Eight3 from "./pages/west/eight/eight3";
import Eight4 from "./pages/west/eight/eight4";
import Eight5 from "./pages/west/eight/eight5";
import EightOne from "./pages/west/eight/eightOne/eightOne";
import EightOne2 from "./pages/west/eight/eightOne/eightOne2";
import EightOne3 from "./pages/west/eight/eightOne/eightOne3";
import EightOne4 from "./pages/west/eight/eightOne/eightOne4";
import EightOne5 from "./pages/west/eight/eightOne/eightOne5";
import ScrollButton from "./pages/ScrollButton/ScrollButton";
import { Content } from "./pages/ScrollButton/Styles";
import THreeE from "./pages/east/three/three";
import Three2E from "./pages/east/three/three2";
import Three3E from "./pages/east/three/three3";
import Three4E from "./pages/east/three/three4";
import Three5E from "./pages/east/three/three5";
import TFourE from "./pages/east/four/tfour";
import Tfour2E from "./pages/east/four/tfour2";
import Tfour3E from "./pages/east/four/tfour3";
import Tfour4E from "./pages/east/four/tfour4";
import Tfour5E from "./pages/east/four/tfour5";
import FourOneE from "./pages/east/four/fourOne/fourOne";
import FourOne2E from "./pages/east/four/fourOne/fourOne2";
import FourOne3E from "./pages/east/four/fourOne/fourOne3";
import FourOne4E from "./pages/east/four/fourOne/fourOne4";
import FourOne5E from "./pages/east/four/fourOne/fourOne5";
import TFiveE from "./pages/east/five/tfive";
import TFive2E from "./pages/east/five/tfive2";
import TFive3E from "./pages/east/five/tfive3";
import TFive4E from "./pages/east/five/tfive4";
import TFive5E from "./pages/east/five/tfive5";
import FiveOneE from "./pages/east/five/fiveOne/fiveOne";
import FiveOne2E from "./pages/east/five/fiveOne/fiveOne2";
import FiveOne3E from "./pages/east/five/fiveOne/fiveOne3";
import FiveOne4E from "./pages/east/five/fiveOne/fiveOne4";
import FiveOne5E from "./pages/east/five/fiveOne/fiveOne5";
import TSixE from "./pages/east/six/tsix";
import Tsix2E from "./pages/east/six/tsix2";
import Tsix3E from "./pages/east/six/tsix3";
import Tsix4E from "./pages/east/six/tsix4";
import Tsix5E from "./pages/east/six/tsix5";
import SixOneE from "./pages/east/six/tsixOne/sixOne";
import SixOne2E from "./pages/east/six/tsixOne/sixOne2";
import SixOne3E from "./pages/east/six/tsixOne/sixOne3";
import SixOne4E from "./pages/east/six/tsixOne/sixOne4";
import SixOne5E from "./pages/east/six/tsixOne/sixOne5";
import SevenE from "./pages/east/seven/seven";
import Seven2E from "./pages/east/seven/seven2";
import Seven3E from "./pages/east/seven/seven3";
import Seven4E from "./pages/east/seven/seven4";
import Seven5E from "./pages/east/seven/seven5";
import SevenOneE from "./pages/east/seven/sevenOne/sevenOne";
import SevenOne2E from "./pages/east/seven/sevenOne/sevenOne2";
import SevenOne3E from "./pages/east/seven/sevenOne/sevenOne3";
import SevenOne4E from "./pages/east/seven/sevenOne/sevenOne4";
import SevenOne5E from "./pages/east/seven/sevenOne/sevenOne5";
import EightE from "./pages/east/eight/eight";
import Eight2E from "./pages/east/eight/eight2";
import Eight3E from "./pages/east/eight/eight3";
import Eight4E from "./pages/east/eight/eight4";
import Eight5E from "./pages/east/eight/eight5";
import EightOneE from "./pages/east/eight/eightOne/eightOne";
import EightOne2E from "./pages/east/eight/eightOne/eightOne2";
import EightOne3E from "./pages/east/eight/eightOne/eightOne3";
import EightOne4E from "./pages/east/eight/eightOne/eightOne4";
import EightOne5E from "./pages/east/eight/eightOne/eightOne5";
import Maunt from "./pages/west/maunts/maunt.jsx";
import Maunt2 from "./pages/west/maunts/maunt2.jsx";
import Maunt3 from "./pages/west/maunts/maunt3.jsx";
import Maunt4 from "./pages/west/maunts/maunt4.jsx";
import Maunt5 from "./pages/west/maunts/maunt5.jsx";
import Maunte from "./pages/east/maunts/maunt.jsx";
import Maunt2e from "./pages/east/maunts/maunt2.jsx";
import Maunt3e from "./pages/east/maunts/maunt3.jsx";
import Maunt4e from "./pages/east/maunts/maunt4.jsx";
import Maunt5e from "./pages/east/maunts/maunt5.jsx";
import Test from "./pages/contact";
import WEST from "./pages/west";
import EAST from "./pages/east";

function App() {
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
  const keys = prompt("Введите ключ!").trim();
  if (keyPlayer.includes(keys)) {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/three" element={<THree />} />
            <Route path="/three2" element={<Three2 />} />
            <Route path="/three3" element={<Three3 />} />
            <Route path="/three4" element={<Three4 />} />
            <Route path="/three5" element={<Three5 />} />
            <Route path="/threeE" element={<THreeE />} />
            <Route path="/three2E" element={<Three2E />} />
            <Route path="/three3E" element={<Three3E />} />
            <Route path="/three4E" element={<Three4E />} />
            <Route path="/three5E" element={<Three5E />} />

            <Route exact path="/test" element={<Test />} />
            <Route exact path="/maunt" element={<Maunt />} />
            <Route exact path="/maunt2" element={<Maunt2 />} />
            <Route exact path="/maunt3" element={<Maunt3 />} />
            <Route exact path="/maunt4" element={<Maunt4 />} />
            <Route exact path="/maunt5" element={<Maunt5 />} />
            <Route exact path="/maunte" element={<Maunte />} />
            <Route exact path="/maunt2e" element={<Maunt2e />} />
            <Route exact path="/maunt3e" element={<Maunt3e />} />
            <Route exact path="/maunt4e" element={<Maunt4e />} />
            <Route exact path="/maunt5e" element={<Maunt5e />} />

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
            <Route path="/tfour2" element={<Tfour2 />} />
            <Route path="/tfour3" element={<Tfour3 />} />
            <Route path="/tfour4" element={<Tfour4 />} />
            <Route path="/tfour5" element={<Tfour5 />} />
            <Route path="/fourOne" element={<FourOne />} />
            <Route path="/fourOne2" element={<FourOne2 />} />
            <Route path="/fourOne3" element={<FourOne3 />} />
            <Route path="/fourOne4" element={<FourOne4 />} />
            <Route path="/fourOne5" element={<FourOne5 />} />
            <Route path="/tfive" element={<TFive />} />
            <Route path="/tfive2" element={<TFive2 />} />
            <Route path="/tfive3" element={<TFive3 />} />
            <Route path="/tfive4" element={<TFive4 />} />
            <Route path="/tfive5" element={<TFive5 />} />
            <Route path="/fiveOne" element={<FiveOne />} />
            <Route path="/fiveOne2" element={<FiveOne2 />} />
            <Route path="/fiveOne3" element={<FiveOne3 />} />
            <Route path="/fiveOne4" element={<FiveOne4 />} />
            <Route path="/fiveOne5" element={<FiveOne5 />} />
            <Route path="/tsix" element={<TSix />} />
            <Route path="/tsix2" element={<Tsix2 />} />
            <Route path="/tsix3" element={<Tsix3 />} />
            <Route path="/tsix4" element={<Tsix4 />} />
            <Route path="/tsix5" element={<Tsix5 />} />
            <Route path="/sixOne" element={<SixOne />} />
            <Route path="/sixOne2" element={<SixOne2 />} />
            <Route path="/sixOne3" element={<SixOne3 />} />
            <Route path="/sixOne4" element={<SixOne4 />} />
            <Route path="/sixOne5" element={<SixOne5 />} />
            <Route path="/seven" element={<Seven />} />
            <Route path="/seven2" element={<Seven2 />} />
            <Route path="/seven3" element={<Seven3 />} />
            <Route path="/seven4" element={<Seven4 />} />
            <Route path="/seven5" element={<Seven5 />} />
            <Route path="/sevenOne" element={<SevenOne />} />
            <Route path="/sevenOne2" element={<SevenOne2 />} />
            <Route path="/sevenOne3" element={<SevenOne3 />} />
            <Route path="/sevenOne4" element={<SevenOne4 />} />
            <Route path="/sevenOne5" element={<SevenOne5 />} />
            <Route path="/eight" element={<Eight />} />
            <Route path="/eight2" element={<Eight2 />} />
            <Route path="/eight3" element={<Eight3 />} />
            <Route path="/eight4" element={<Eight4 />} />
            <Route path="/eight5" element={<Eight5 />} />
            <Route path="/eightOne" element={<EightOne />} />
            <Route path="/eightOne2" element={<EightOne2 />} />
            <Route path="/eightOne3" element={<EightOne3 />} />
            <Route path="/eightOne4" element={<EightOne4 />} />
            <Route path="/eightOne5" element={<EightOne5 />} />
            <Route path="/tfourE" element={<TFourE />} />
            <Route path="/tfour2E" element={<Tfour2E />} />
            <Route path="/tfour3E" element={<Tfour3E />} />
            <Route path="/tfour4E" element={<Tfour4E />} />
            <Route path="/tfour5E" element={<Tfour5E />} />
            <Route path="/fourOneE" element={<FourOneE />} />
            <Route path="/fourOne2E" element={<FourOne2E />} />
            <Route path="/fourOne3E" element={<FourOne3E />} />
            <Route path="/fourOne4E" element={<FourOne4E />} />
            <Route path="/fourOne5E" element={<FourOne5E />} />
            <Route path="/tfiveE" element={<TFiveE />} />
            <Route path="/tfive2E" element={<TFive2E />} />
            <Route path="/tfive3E" element={<TFive3E />} />
            <Route path="/tfive4E" element={<TFive4E />} />
            <Route path="/tfive5E" element={<TFive5E />} />
            <Route path="/fiveOneE" element={<FiveOneE />} />
            <Route path="/fiveOne2E" element={<FiveOne2E />} />
            <Route path="/fiveOne3E" element={<FiveOne3E />} />
            <Route path="/fiveOne4E" element={<FiveOne4E />} />
            <Route path="/fiveOne5E" element={<FiveOne5E />} />
            <Route path="/tsixE" element={<TSixE />} />
            <Route path="/tsix2E" element={<Tsix2E />} />
            <Route path="/tsix3E" element={<Tsix3E />} />
            <Route path="/tsix4E" element={<Tsix4E />} />
            <Route path="/tsix5E" element={<Tsix5E />} />
            <Route path="/sixOneE" element={<SixOneE />} />
            <Route path="/sixOne2E" element={<SixOne2E />} />
            <Route path="/sixOne3E" element={<SixOne3E />} />
            <Route path="/sixOne4E" element={<SixOne4E />} />
            <Route path="/sixOne5E" element={<SixOne5E />} />
            <Route path="/sevenE" element={<SevenE />} />
            <Route path="/seven2E" element={<Seven2E />} />
            <Route path="/seven3E" element={<Seven3E />} />
            <Route path="/seven4E" element={<Seven4E />} />
            <Route path="/seven5E" element={<Seven5E />} />
            <Route path="/sevenOneE" element={<SevenOneE />} />
            <Route path="/sevenOne2E" element={<SevenOne2E />} />
            <Route path="/sevenOne3E" element={<SevenOne3E />} />
            <Route path="/sevenOne4E" element={<SevenOne4E />} />
            <Route path="/sevenOne5E" element={<SevenOne5E />} />
            <Route path="/eightE" element={<EightE />} />
            <Route path="/eight2E" element={<Eight2E />} />
            <Route path="/eight3E" element={<Eight3E />} />
            <Route path="/eight4E" element={<Eight4E />} />
            <Route path="/eight5E" element={<Eight5E />} />
            <Route path="/eightOneE" element={<EightOneE />} />
            <Route path="/eightOne2E" element={<EightOne2E />} />
            <Route path="/eightOne3E" element={<EightOne3E />} />
            <Route path="/eightOne4E" element={<EightOne4E />} />
            <Route path="/eightOne5E" element={<EightOne5E />} />
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
  } else alert("Обратитесь к администрации!");

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/west" element={<WEST />} />
          <Route path="/east" element={<EAST />} />
          <Route path="/three" element={<THree />} />
          <Route path="/three2" element={<Three2 />} />
          <Route path="/three3" element={<Three3 />} />
          <Route path="/three4" element={<Three4 />} />
          <Route path="/three5" element={<Three5 />} />
          <Route path="/threeE" element={<THreeE />} />
          <Route path="/three2E" element={<Three2E />} />
          <Route path="/three3E" element={<Three3E />} />
          <Route path="/three4E" element={<Three4E />} />
          <Route path="/three5E" element={<Three5E />} />
        </Routes>
      </Router>
      <Fragment>
        <Content />
        <ScrollButton />
      </Fragment>
    </>
  );
}

export default App;
