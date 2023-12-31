import React, { useEffect, useState } from "react";
import { Nav, NavLink, NavMenu } from "../components/Navbar/NavbarElements";

const Enum = {
  T3_HEAD_CLOTH_SET1: "Колпак ученого (странник)",
  T3_ARMOR_CLOTH_SET1: "Мантия ученого (странник)",
  T3_SHOES_CLOTH_SET1: "Сандалии ученого (странник)",
  T3_OFF_BOOK: "Книга заклинаний (странник)",
  T3_HEAD_LEATHER_SET1: "Капюшон наемника (странник)",
  T3_ARMOR_LEATHER_SET1: "Куртка наемника (странник)",
  T3_SHOES_LEATHER_SET1: "Ботинки наемника (странник)",
  T3_2H_BOW: "Лук (странник)",
  T3_MAIN_FROSTSTAFF: "Морозный посох (странник)",
  T3_MAIN_SPEAR: "Копье (странник)",
  T3_MAIN_DAGGER: "Кинжал (странник)",
  T3_OFF_TORCH: "Факел (странник)",
  T3_HEAD_PLATE_SET1: "Шлем солдата (странник)",
  T3_ARMOR_PLATE_SET1: "Броня солдата (странник)",
  T3_SHOES_PLATE_SET1: "Сапоги солдата (странник)",
  T3_MAIN_SWORD: "Палаш (странник)",
  T3_MAIN_AXE: "Боевой топор (странник)",
  T3_MAIN_MACE: "Тяжелая булава (странник)",
  T3_2H_TOOL_SIEGEHAMMER: "Молот (странник)",
  T3_2H_CROSSBOW: "Арбалет (странник)",
  T3_OFF_SHIELD: "Щит (странник)",
  T3_BAG: "Сумка (странник)",
  T3_CAPE: "Плащ (странник)",
};

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
  const [itemBridgewatch, setItemBridgewatch] = useState(true);
  const [itemMartlock, setItemMartlock] = useState(false);
  const [itemThetford, setItemThetford] = useState(false);
  const [itemFortSterling, setItemFortSterling] = useState(false);
  const [itemLymhurst, setItemLymhurst] = useState(false);
  const [itemCarleon, setItemCarleon] = useState(false);

  function addFitch() {
    fetch(
      `https://WEST.albion-online-data.com/api/v2/stats/prices/T3_HEAD_CLOTH_SET1,T3_ARMOR_CLOTH_SET1,T3_SHOES_CLOTH_SET1,T3_OFF_BOOK,T3_HEAD_LEATHER_SET1,T3_ARMOR_LEATHER_SET1,T3_SHOES_LEATHER_SET1,T3_2H_BOW,T3_MAIN_SPEAR,T3_MAIN_DAGGER,T3_OFF_TORCH,T3_HEAD_PLATE_SET1,T3_ARMOR_PLATE_SET1,T3_SHOES_PLATE_SET1,T3_MAIN_SWORD,T3_MAIN_AXE,T3_MAIN_MACE,T3_2H_TOOL_SIEGEHAMMER,T3_2H_CROSSBOW,T3_OFF_SHIELD,T3_BAG,T3_CAPE.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=1`
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
  }, []);

  function analysisJSON(data) {
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
      else objectReadyJSON.Lymhurst = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_min,
          sell: data.sell_price_min,
          sellDate: data.sell_price_min_date,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      array.push(objectReadyJSON);
    });

    setItem(array);
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
      <div>
        <font style={{ color: profitColor }}>{profit}</font> |
        <font style={{ color: profitColorProc }}>{profitProc}%</font>
      </div>
    );
  }

  return (
    <>
      <div style={{ position: "sticky", top: "5px" }}>
        <>
          <Nav>
            <NavMenu>
              <div style={{ display: "contents" }}>
                <NavLink to="/threeE">T 3</NavLink>
                <>
                  <NavLink to="/tfourE">T 4.0</NavLink>
                  <NavLink to="/fourOneE">T 4.1</NavLink>
                </>
                <>
                  <NavLink to="/tfiveE">Т 5.0</NavLink>
                  <NavLink to="/fiveOneE">Т 5.1</NavLink>
                </>
                <>
                  <NavLink to="/tsixE">T 6.0</NavLink>
                  <NavLink to="/sixOneE">T 6.1</NavLink>
                </>
                <>
                  <NavLink to="/sevenE">T 7.0</NavLink>
                  <NavLink to="/sevenOneE">T 7.1</NavLink>
                </>
                <>
                  <NavLink to="/eightE">T 8.0</NavLink>
                  <NavLink to="/eightOneE">T 8.1</NavLink>
                </>
              </div>
              <h1>Т 3 - обычное</h1>
              <NavLink to="/threeE" activeStyle>
                1
              </NavLink>
              <NavLink to="/three2E" activeStyle>
                2
              </NavLink>
              <NavLink to="/three3E" activeStyle>
                3
              </NavLink>
              <NavLink to="/three4E" activeStyle>
                4
              </NavLink>
              <NavLink to="/three5E" activeStyle>
                5
              </NavLink>
              <h1>Сервер: WEST</h1>
            </NavMenu>
          </Nav>
        </>
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
