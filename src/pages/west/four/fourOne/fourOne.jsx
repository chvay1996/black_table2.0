import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
} from "../../../../components/Navbar/NavbarElements";

let Enum = {
  T4_HEAD_CLOTH_SET1: "Колпак ученого (мастер)",
  T4_HEAD_CLOTH_SET2: "Колпак клирика (мастер)",
  T4_HEAD_CLOTH_SET3: "Колпак чародея (мастер)",
  T4_ARMOR_CLOTH_SET1: "Мантия ученого (мастер)",
  T4_ARMOR_CLOTH_SET2: "Мантия клирика (мастер)",
  T4_ARMOR_CLOTH_SET3: "Мантия чародея (мастер)",
  T4_SHOES_CLOTH_SET1: "Сандалии ученого (мастер)",
  T4_SHOES_CLOTH_SET2: "Сандалии клирика (мастер)",
  T4_SHOES_CLOTH_SET3: "Сандалии чародея (мастер)",
  T4_MAIN_ARCANESTAFF: "Мистический посох (мастер)",
  T4_2H_ARCANESTAFF: "Большой мистический посох (мастер)",
  T4_2H_ENIGMATICSTAFF: "Загадочный посох (мастер)",
  T4_MAIN_CURSEDSTAFF: "Проклятый посох (мастер)",
  T4_2H_CURSEDSTAFF: "Большой проклятый посох (мастер)",
  T4_2H_DEMONICSTAFF: "Демонический посох (мастер)",
  T4_MAIN_FIRESTAFF: "Огненный посох (мастер)",
  T4_2H_FIRESTAFF: "Большой огненный посох (мастер)",
  T4_2H_INFERNOSTAFF: "Адский посох (мастер)",
  T4_MAIN_FROSTSTAFF: "Морозный посох (мастер)",
  T4_2H_FROSTSTAFF: "Большой морозный посох (мастер)",
  T4_2H_GLACIALSTAFF: "Ледяной посох (мастер)",
  T4_MAIN_HOLYSTAFF: "Священный посох (мастер)",
  T4_2H_HOLYSTAFF: "Большой священный посох (мастер)",
  T4_2H_DIVINESTAFF: "Божественный посох (мастер)",
  T4_OFF_BOOK: "Книга заклинаний (мастер)",
  T4_HEAD_LEATHER_SET1: "Капюшон наемника (знатока)",
  T4_HEAD_LEATHER_SET2: "Капюшон охотника (мастер)",
  T4_HEAD_LEATHER_SET3: "Капюшон убийцы (мастер)",
  T4_ARMOR_LEATHER_SET1: "Куртка наемника (мастер)",
  T4_ARMOR_LEATHER_SET2: "Куртка охотника (мастер)",
  T4_ARMOR_LEATHER_SET3: "Куртка убийцы (мастер)",
  T4_SHOES_LEATHER_SET1: "Ботинки наемника (мастер)",
  T4_SHOES_LEATHER_SET2: "Ботинки охотника (мастер)",
  T4_SHOES_LEATHER_SET3: "Ботинки убийцы (мастер)",
  T4_2H_BOW: "Лук (мастер)",
  T4_2H_WARBOW: "Боевой лук (мастер)",
  T4_2H_LONGBOW: "Длинный лук (мастер)",
  T4_MAIN_SPEAR: "Копье (мастер)",
  T4_2H_SPEAR: "Пика (мастер)",
  T4_2H_GLAIVE: "Глефа (мастер)",
  T4_MAIN_NATURESTAFF: "Древесный посох (мастер)",
  T4_2H_NATURESTAFF: "Большой древесный посох (мастер)",
  T4_2H_WILDSTAFF: "Дикий посох (мастер)",
  T4_MAIN_DAGGER: "Кинжал (мастер)",
  T4_2H_DAGGERPAIR: "Парные кинжалы (мастер)",
  T4_2H_CLAWPAIR: "Когти (мастер)",
  T4_2H_QUARTERSTAFF: "Боевой шест (мастер)",
  T4_2H_IRONCLADEDSTAFF: "Железный посох (мастер)",
  T4_2H_DOUBLEBLADEDSTAFF: "Острый шест (мастер)",
  T4_OFF_TORCH: "Факел (мастер)",
  T4_HEAD_PLATE_SET1: "Шлем солдата (мастер)",
  T4_HEAD_PLATE_SET2: "Шлем рыцаря (мастер)",
  T4_HEAD_PLATE_SET3: "Шлем хранителя (мастер)",
  T4_ARMOR_PLATE_SET1: "Броня солдата (мастер)",
  T4_ARMOR_PLATE_SET2: "Броня рыцаря (мастер)",
  T4_ARMOR_PLATE_SET3: "Броня хранителя (мастер)",
  T4_SHOES_PLATE_SET1: "Сапоги солдата (мастер)",
  T4_SHOES_PLATE_SET2: "Сапоги рыцаря (мастер)",
  T4_SHOES_PLATE_SET3: "Сапоги хранителя (мастер)",
  T4_MAIN_SWORD: "Палаш (мастер)",
  T4_2H_CLAYMORE: "Клеймор (мастер)",
  T4_2H_DUALSWORD: "Парные мечи (мастер)",
  T4_MAIN_AXE: "Боевой топор (мастер)",
  T4_2H_AXE: "Большой топор (мастер)",
  T4_2H_HALBERD: "Алебарда (мастер)",
  T4_2H_MACE: "Булава (мастер)",
  T4_MAIN_MACE: "Тяжелая булава (мастер)",
  T4_2H_FLAIL: "Моргенштерн (мастер)",
  T4_2H_TOOL_SIEGEHAMMER: "Молот (мастер)",
  T4_2H_POLEHAMMER: "Чекан (мастер)",
  T4_2H_HAMMER: "Большой молот (мастер)",
  T4_2H_CROSSBOW: "Арбалет (мастер)",
  T4_2H_CROSSBOWLARGE: "Тяжелый арбалет (мастер)",
  T4_MAIN_1HCROSSBOW: "Легкий арбалет (мастер)",
  T4_OFF_SHIELD: "Щит (мастер)",
  T4_BAG: "Сумка (мастер)",
  T4_CAPE: "Плащ (мастер)",
};
let artef = {
  T4_HEAD_LEATHER_MORGANA: "Капюшон лазутчика",
  T4_ARMOR_LEATHER_MORGANA: "Куртка лазутчика",
  T4_SHOES_LEATHER_MORGANA: "Батинка лазутчика",
  T4_HEAD_CLOTH_KEEPER: "Колпак друида",
  T4_ARMOR_CLOTH_KEEPER: "Мантия друида",
  T4_SHOES_CLOTH_KEEPER: "Сандалии друида",
  T4_HEAD_PLATE_UNDEAD: "Могильный шлем",
  T4_ARMOR_PLATE_UNDEAD: "Могильная броня",
  T4_SHOES_PLATE_UNDEAD: "Могильные сапоги",
};
Enum = Object.fromEntries(
  Object.keys(Enum).map((key) => [key + "@1", Enum[key]])
);
artef = Object.fromEntries(
  Object.keys(artef).map((key) => [key + "@1", artef[key]])
);

function checkTime(firstDate, secondDate) {
  let getDate = (string) =>
    new Date(0, 0, 0, string.split(":")[0], string.split(":")[1]);
  let different = getDate(secondDate) - getDate(firstDate);

  let hours = Math.floor((different % 86400000) / 3600000);
  let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
  let result = hours + ":" + minutes;
  return result;
}

function checkTimeBD(Other) {
  let timeTamp = Other.split("T")[1].split(":");
  let globalTamp = new Date().toUTCString().split(" ")[4].split(":");

  if (Other !== 0) {
    let checkTimes = checkTime(
      `${timeTamp[0]}:${timeTamp[1]}`,
      `${globalTamp[0]}:${globalTamp[1]}`
    );
    if (!checkTimes.match("-")) return checkTimes;
  }
}

function App() {
  const [item, setItem] = useState([]);
  const [qualities, setQualities] = useState(1);
  const [qualitiesName, setQualitiesName] = useState("Обычное");
  const [itemArtef, setItemArtef] = useState([]);
  const [itemBridgewatch, setItemBridgewatch] = useState(true);
  const [itemMartlock, setItemMartlock] = useState(false);
  const [itemThetford, setItemThetford] = useState(false);
  const [itemFortSterling, setItemFortSterling] = useState(false);
  const [itemLymhurst, setItemLymhurst] = useState(false);
  const [itemCarleon, setItemCarleon] = useState(false);

  function addFitch() {
    fetch(
      `https://WEST.albion-online-data.com/api/v2/stats/prices/T4_HEAD_CLOTH_SET1@1,T4_HEAD_CLOTH_SET2@1,T4_HEAD_CLOTH_SET3@1,T4_ARMOR_CLOTH_SET1@1,T4_ARMOR_CLOTH_SET2@1,T4_ARMOR_CLOTH_SET3@1,T4_SHOES_CLOTH_SET1@1,T4_SHOES_CLOTH_SET2@1,T4_SHOES_CLOTH_SET3@1,T4_MAIN_ARCANESTAFF@1,T4_2H_ARCANESTAFF@1,T4_2H_ENIGMATICSTAFF@1,T4_MAIN_CURSEDSTAFF@1,T4_2H_CURSEDSTAFF@1,T4_2H_DEMONICSTAFF@1,T4_MAIN_FIRESTAFF@1,T4_2H_FIRESTAFF@1,T4_2H_INFERNOSTAFF@1,T4_2H_FROSTSTAFF@1,T4_2H_FROSTSTAFF@1,T4_2H_GLACIALSTAFF@1,T4_MAIN_HOLYSTAFF@1,T4_2H_HOLYSTAFF@1,T4_2H_DIVINESTAFF@1,T4_OFF_BOOK@1,T4_HEAD_LEATHER_SET2@1,T4_HEAD_LEATHER_SET3@1,T4_ARMOR_LEATHER_SET1@1,T4_ARMOR_LEATHER_SET2@1,T4_ARMOR_LEATHER_SET3@1,T4_SHOES_LEATHER_SET1@1,T4_SHOES_LEATHER_SET2@1,T4_SHOES_LEATHER_SET3@1,T4_2H_BOW@1,T4_2H_WARBOW@1,T4_2H_LONGBOW@1,T4_MAIN_SPEAR@1,T4_2H_SPEAR@1,T4_2H_GLAIVE@1,T4_MAIN_NATURESTAFF@1,T4_2H_NATURESTAFF@1,T4_2H_WILDSTAFF@1,T4_MAIN_DAGGER@1,T4_2H_DAGGERPAIR@1,T4_2H_CLAWPAIR@1,T4_2H_QUARTERSTAFF@1,T4_2H_IRONCLADEDSTAFF@1,T4_2H_DOUBLEBLADEDSTAFF@1,T4_OFF_TORCH@1,T4_HEAD_PLATE_SET1@1,T4_HEAD_PLATE_SET2@1,T4_HEAD_PLATE_SET3@1,T4_ARMOR_PLATE_SET1@1,T4_ARMOR_PLATE_SET2@1,T4_ARMOR_PLATE_SET3@1,T4_SHOES_PLATE_SET1@1,T4_SHOES_PLATE_SET2@1,T4_SHOES_PLATE_SET3@1,T4_MAIN_SWORD@1,T4_2H_CLAYMORE@1,T4_2H_DUALSWORD@1,T4_MAIN_AXE@1,T4_2H_AXE@1,T4_2H_HALBERD@1,T4_2H_MACE@1,T4_MAIN_MACE@1,T4_2H_FLAIL@1,T4_2H_TOOL_SIEGEHAMMER@1,T4_2H_POLEHAMMER@1,T4_2H_HAMMER@1,T4_2H_CROSSBOW@1,T4_2H_CROSSBOWLARGE@1,T4_MAIN_1HCROSSBOW@1,T4_OFF_SHIELD@1,T4_BAG@1,T4_CAPE@1.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=${qualities}`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON(json, setItem));
    fetch(
      `https://WEST.albion-online-data.com/api/v2/stats/prices/T4_SHOES_PLATE_UNDEAD@1,T4_ARMOR_PLATE_UNDEAD@1,T4_HEAD_PLATE_UNDEAD@1,T4_SHOES_CLOTH_KEEPER@1,T4_ARMOR_CLOTH_KEEPER@1,T4_HEAD_CLOTH_KEEPER@1,T4_SHOES_LEATHER_MORGANA@1,T4_ARMOR_LEATHER_MORGANA@1,T4_HEAD_LEATHER_MORGANA@1.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=${qualities}`
    )
      .then((res) => res.json())
      .then((json) => {
        const filteredData = json.filter(
          (data) => itemBridgewatch || data.city !== "Bridgewatch",
          (data) => itemMartlock || data.city !== "Martlock",
          (data) => itemThetford || data.city !== "Thetford",
          (data) => itemFortSterling || data.city !== "FortSterling",
          (data) => itemLymhurst || data.city !== "Lymhurst",
          (data) => itemCarleon || data.city !== "Carleon"
        );
        analysisJSON(filteredData);
      });
  }

  useEffect(() => {
    addFitch();
  }, [qualities, qualitiesName]);

  function analysisJSON(data, arrays) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
          if (data.city === "Black Market")
            array[i].BlackMarket = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Bridgewatch")
            array[i].Bridgewatch = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Martlock")
            array[i].Martlock = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Thetford")
            array[i].Thetford = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Fort Sterling")
            array[i].FortSterling = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Lymhurst")
            array[i].Lymhurst = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          if (data.city === "Caerleon")
            array[i].Caerleon = {
              buy: data.buy_price_min,
              sell: data.sell_price_min,
              sellDate: data.sell_price_min_date,
            };
          return false;
        }
      }
      objectReadyJSON.item_id = data.item_id;
      if (data.city === "Black Market")
        objectReadyJSON.BlackMarket = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.BlackMarket = { buy: 0, sell: 0 };
      if (data.city === "Bridgewatch")
        objectReadyJSON.Bridgewatch = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Bridgewatch = { buy: 0, sell: 0 };
      if (data.city === "Martlock")
        objectReadyJSON.Martlock = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Martlock = { buy: 0, sell: 0 };
      if (data.city === "Thetford")
        objectReadyJSON.Thetford = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Thetford = { buy: 0, sell: 0 };
      if (data.city === "FortSterling")
        objectReadyJSON.FortSterling = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.FortSterling = { buy: 0, sell: 0 };
      if (data.city === "Lymhurst")
        objectReadyJSON.Lymhurst = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      array.push(objectReadyJSON);
    });

    arrays(array);
  }

  function profit(BM, Other) {
    let profitColor;
    let profitStart = Math.ceil(Math.round((BM / 100) * 89.5));
    let profit = Math.ceil(profitStart - Other);
    let profitProc = Math.ceil((profit / profitStart) * 100);
    let profitColorProc;
    if (profit < 0) {
      profitColor = "#db0000";
    } else profitColor = "#00e500";
    if (profitProc > 40 && profitProc < 60) {
      profitColorProc = "#ffe000";
    } else if (profitProc >= 60) {
      profitColorProc = "#00c4ff";
    } else profitColorProc = "#e98282";
    return (
      <h>
        <font style={{ color: profitColor }}>{profit}</font> |
        <font style={{ color: profitColorProc }}>{profitProc}%</font>
      </h>
    );
  }

  return (
    <>
      <div style={{ position: "sticky", top: "5px" }}>
        <>
          <Nav>
            <NavMenu>
              <div style={{ display: "contents" }}>
                <NavLink to="/three">T 3</NavLink>
                <>
                  <NavLink to="/tfou">T 4.0</NavLink>
                  <NavLink to="/fourOne">T 4.1</NavLink>
                </>
                <>
                  <NavLink to="/tfive">Т 5.0</NavLink>
                  <NavLink to="/fiveOne">Т 5.1</NavLink>
                </>
                <>
                  <NavLink to="/tsix">T 6.0</NavLink>
                  <NavLink to="/sixOne">T 6.1</NavLink>
                </>
                <>
                  <NavLink to="/seven">T 7.0</NavLink>
                  <NavLink to="/sevenOne">T 7.1</NavLink>
                </>
                <>
                  <NavLink to="/eight">T 8.0</NavLink>
                  <NavLink to="/eightOne">T 8.1</NavLink>
                </>
              </div>
              <h1>Т 4.1 - {qualitiesName}</h1>
              <NavLink
                onClick={() => {
                  setQualities(1);
                  setQualitiesName("обычное");
                }}
              >
                1
              </NavLink>
              <NavLink
                onClick={() => {
                  setQualities(2);
                  setQualitiesName("хорошее");
                }}
              >
                2
              </NavLink>
              <NavLink
                onClick={() => {
                  setQualities(3);
                  setQualitiesName("выдающиеся");
                }}
              >
                3
              </NavLink>
              <NavLink
                onClick={() => {
                  setQualities(4);
                  setQualitiesName("отличное");
                }}
              >
                4
              </NavLink>
              <NavLink
                onClick={() => {
                  setQualities(5);
                  setQualitiesName("шедевр");
                }}
              >
                5
              </NavLink>

              <h1>Сервер: WEST</h1>
            </NavMenu>
          </Nav>
        </>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <label for="Bridgewatch">Bridgewatch</label>
          <div>
            <input
              type="checkbox"
              id="Bridgewatch"
              name="Bridgewatch"
              value="Bridgewatch"
              checked={itemBridgewatch}
              onClick={() => {
                setItemBridgewatch(!itemBridgewatch);
              }}
            />
          </div>
        </div>
        <div>
          <label for="Martlock">Martlock</label>
          <div>
            <input
              type="checkbox"
              id="Martlock"
              name="Martlock"
              value="Martlock"
              onClick={() => {
                setItemMartlock(!itemMartlock);
              }}
            />
          </div>
        </div>
        <div>
          <label for="Thetford">Thetford</label>
          <div>
            <input
              type="checkbox"
              id="Thetford"
              name="Thetford"
              value="Thetford"
              onClick={() => {
                setItemThetford(!itemThetford);
              }}
            />
          </div>
        </div>
        <div>
          <label for="Fort Sterling">Fort Sterling</label>
          <div>
            <input
              type="checkbox"
              id="Fort Sterling"
              name="Fort Sterling"
              value="Fort Sterling"
              onClick={() => {
                setItemFortSterling(!itemFortSterling);
              }}
            />
          </div>
        </div>
        <div>
          <label for="Lymhurst">Lymhurst</label>
          <div>
            <input
              type="checkbox"
              id="Lymhurst"
              name="Lymhurst"
              value="Lymhurst"
              onClick={() => {
                setItemLymhurst(!itemLymhurst);
              }}
            />
          </div>
        </div>
        <div>
          <label for="Carleon">Carleon</label>
          <div>
            <input
              type="checkbox"
              id="Carleon"
              name="Carleon"
              value="Carleon"
              onClick={() => {
                setItemCarleon(!itemCarleon);
              }}
            />
          </div>
        </div>
      </div>
      <table
        style={{
          margin: "auto",
          backgroundImage:
            "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
        }}
      >
        <thead>
          <tr style={{ height: "30px" }}>
            <th style={{ width: "30px" }}>icon</th>
            <th style={{ width: "250px" }}>Наименование</th>
            <th style={{ width: "65px" }}>BlackMarket</th>
            <th style={{ width: "60px" }}>-%</th>
            <th style={{ width: "65px" }}>lastUpdate</th>
            {itemBridgewatch && (
              <>
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgba(56, 211, 215, 0.1)",
                  }}
                >
                  Bridgewatch
                </th>
                <th
                  style={{
                    width: "60px",
                    backgroundColor: "rgba(56, 211, 215, 0.1)",
                  }}
                >
                  profit
                </th>
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgba(56, 211, 215, 0.1)",
                  }}
                >
                  lastUpdate
                </th>
              </>
            )}
            {itemMartlock && (
              <>
                {" "}
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgb(255, 13, 0, 10%)",
                  }}
                >
                  Martlock
                </th>
                <th
                  style={{
                    width: "60px",
                    backgroundColor: "rgb(255, 13, 0, 10%)",
                  }}
                >
                  profit
                </th>
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgb(255, 13, 0, 10%)",
                  }}
                >
                  lastUpdate
                </th>
              </>
            )}
            {itemThetford && (
              <>
                {" "}
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgb(255, 255, 128, 10%)",
                  }}
                >
                  Thetford
                </th>
                <th
                  style={{
                    width: "60px",
                    backgroundColor: "rgb(255, 255, 128, 10%)",
                  }}
                >
                  profit
                </th>
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgb(255, 255, 128, 10%)",
                  }}
                >
                  lastUpdate
                </th>
              </>
            )}
            {itemFortSterling && (
              <>
                {" "}
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgb(249, 230 ,217, 10%)",
                  }}
                >
                  Fort Sterling
                </th>
                <th
                  style={{
                    width: "60px",
                    backgroundColor: "rgb(249, 230 ,217, 10%)",
                  }}
                >
                  profit
                </th>
                <th
                  style={{
                    width: "60px",
                    backgroundColor: "rgb(249, 230 ,217, 10%)",
                  }}
                >
                  lastUpdate
                </th>
              </>
            )}
            {itemLymhurst && (
              <>
                {" "}
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgb(60, 251, 43, 10%)",
                  }}
                >
                  Lymhurst
                </th>
                <th
                  style={{
                    width: "60px",
                    backgroundColor: "rgb(60, 251, 43, 10%)",
                  }}
                >
                  profit
                </th>
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgb(60, 251, 43, 10%)",
                  }}
                >
                  lastUpdate
                </th>
              </>
            )}
            {itemCarleon && (
              <>
                {" "}
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgb(134, 67, 189, 10%)",
                  }}
                >
                  Carleon
                </th>
                <th
                  style={{
                    width: "60px",
                    backgroundColor: "rgb(134, 67, 189, 10%)",
                  }}
                >
                  profit
                </th>
                <th
                  style={{
                    width: "65px",
                    backgroundColor: "rgb(134, 67, 189, 10%)",
                  }}
                >
                  lastUpdate
                </th>
              </>
            )}{" "}
          </tr>
        </thead>
        <tbody>
          {item.map((items, key) => {
            let url = `https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${items.item_id}`;
            return (
              <tr key={key}>
                <img style={{ width: "25px" }} src={url} />
                <th>{Enum[items.item_id]}</th>
                <th>{items.BlackMarket.sell}</th>
                <th>{Math.round((items.BlackMarket.sell / 100) * 89.5)}</th>
                <th>{checkTimeBD(items.BlackMarket.sellDate)}</th>
                {itemBridgewatch && (
                  <>
                    <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                      {items.Bridgewatch.sell}
                    </th>
                    <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                      {items.BlackMarket.sell && items.Bridgewatch.sell
                        ? profit(items.BlackMarket.sell, items.Bridgewatch.sell)
                        : ""}
                    </th>
                    <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                      {checkTimeBD(items.Martlock.sellDate)}
                    </th>{" "}
                  </>
                )}
                {itemMartlock && (
                  <>
                    {" "}
                    <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                      {items.Martlock.sell}
                    </th>
                    <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                      {items.BlackMarket.sell && items.Martlock.sell
                        ? profit(items.BlackMarket.sell, items.Martlock.sell)
                        : ""}
                    </th>
                    <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                      {checkTimeBD(items.Martlock.sellDate)}
                    </th>
                  </>
                )}
                {itemThetford && (
                  <>
                    {" "}
                    <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                      {items.Thetford.sell}
                    </th>
                    <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                      {items.BlackMarket.sell && items.Thetford.sell
                        ? profit(items.BlackMarket.sell, items.Thetford.sell)
                        : ""}
                    </th>
                    <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                      {checkTimeBD(items.Thetford.sellDate)}
                    </th>
                  </>
                )}{" "}
                {itemFortSterling && (
                  <>
                    {" "}
                    <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                      {items.FortSterling.sell}
                    </th>
                    <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                      {items.BlackMarket.sell && items.FortSterling.sell
                        ? profit(
                            items.BlackMarket.sell,
                            items.FortSterling.sell
                          )
                        : ""}
                    </th>
                    <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                      {checkTimeBD(items.FortSterling.sellDate)}
                    </th>
                  </>
                )}
                {itemLymhurst && (
                  <>
                    {" "}
                    <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                      {items.Lymhurst.sell}
                    </th>
                    <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                      {items.BlackMarket.sell && items.Lymhurst.sell
                        ? profit(items.BlackMarket.sell, items.Lymhurst.sell)
                        : ""}
                    </th>
                    <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                      {checkTimeBD(items.Lymhurst.sellDate)}
                    </th>
                  </>
                )}
                {itemCarleon && (
                  <>
                    {" "}
                    <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                      {items.Caerleon.sell}
                    </th>
                    <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                      {items.BlackMarket.sell && items.Caerleon.sell
                        ? profit(items.BlackMarket.sell, items.Caerleon.sell)
                        : ""}
                    </th>
                    <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                      {checkTimeBD(items.Caerleon.sellDate)}
                    </th>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
