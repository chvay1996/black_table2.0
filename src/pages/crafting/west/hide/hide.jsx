import React, { useEffect, useState } from "react";

const Enum = {
  T2_HIDE: "Прочная шкура (T2)",
  T3_HIDE: "Тонкая шкураT3)",
  T4_HIDE: "Средняя шкураT4)",
  T5_HIDE: "Тяжелая шкура(T5)",
  T6_HIDE: "Прочная шкура(T6)",
  T7_HIDE: "Толстая шкура(T7)",
  T8_HIDE: "Бревна из белого дерева(T8)",
};
let Enum1 = {
  T4_HIDE_LEVEL1: "Средняя шкураT - 4.1)",
  T5_HIDE_LEVEL1: "Тяжелая шкура(T - 5.1)",
  T6_HIDE_LEVEL1: "Прочная шкура(T - 6.1)",
  T7_HIDE_LEVEL1: "Толстая шкура(T - 7.1)",
  T8_HIDE_LEVEL1: "Эластичная шкура(T - 8.1)",
};
let Enum2 = {
  T4_HIDE_LEVEL2: "Средняя шкураT - 4.2)",
  T5_HIDE_LEVEL2: "Тяжелая шкура(T - 5.2)",
  T6_HIDE_LEVEL2: "Прочная шкура(T - 6.2)",
  T7_HIDE_LEVEL2: "Толстая шкура(T - 7.2)",
  T8_HIDE_LEVEL2: "Эластичная шкура(T - 8.2)",
};
let Enum3 = {
  T4_HIDE_LEVEL3: "Средняя шкураT - 4.3)",
  T5_HIDE_LEVEL3: "Тяжелая шкура(T - 5.3)",
  T6_HIDE_LEVEL3: "Прочная шкура(T - 6.3)",
  T7_HIDE_LEVEL3: "Толстая шкура(T - 7.3)",
  T8_HIDE_LEVEL3: "Эластичная шкура(T - 8.3)",
};
let LEATHER = {
  T2_LEATHER: "Жесткая кожа (T2)",
  T3_LEATHER: "Толстая кожа(T3)",
  T4_LEATHER: "Обработанная кожа(T4)",
  T5_LEATHER: "Вылеченная кожа(T5)",
  T6_LEATHER: "Закаленная кожа(T6)",
  T7_LEATHER: "Армированная кожа(T7)",
  T8_LEATHER: "Укрепленная кожа(T8)",
};
let LEATHER1 = {
  T4_LEATHER_LEVEL1: "Обработанная кожа(T - 4.1)",
  T5_LEATHER_LEVEL1: "Вылеченная кожа(T - 5.1)",
  T6_LEATHER_LEVEL1: "Закаленная кожа(T - 6.1)",
  T7_LEATHER_LEVEL1: "Армированная кожа(T - 7.1)",
  T8_LEATHER_LEVEL1: "Укрепленная кожа(T - 8.1)",
};
let LEATHER2 = {
  T4_LEATHER_LEVEL2: "Обработанная кожа(T - 4.2)",
  T5_LEATHER_LEVEL2: "Вылеченная кожа(T - 5.2)",
  T6_LEATHER_LEVEL2: "Закаленная кожа(T - 6.2)",
  T7_LEATHER_LEVEL2: "Армированная кожа(T - 7.2)",
  T8_LEATHER_LEVEL2: "Укрепленная кожа(T - 8.2)",
};
let LEATHER3 = {
  T4_LEATHER_LEVEL3: "Обработанная кожа(T - 4.3)",
  T5_LEATHER_LEVEL3: "Вылеченная кожа(T - 5.3)",
  T6_LEATHER_LEVEL3: "Закаленная кожа(T - 6.3)",
  T7_LEATHER_LEVEL3: "Армированная кожа(T - 7.3)",
  T8_LEATHER_LEVEL3: "Укрепленная кожа(T - 8.3)",
};

const Enum1Item = Object.fromEntries(
  Object.keys(Enum1).map((key) => [key + "@1", Enum1[key]])
);
const Enum2Item = Object.fromEntries(
  Object.keys(Enum2).map((key) => [key + "@2", Enum2[key]])
);
const Enum3Item = Object.fromEntries(
  Object.keys(Enum3).map((key) => [key + "@3", Enum3[key]])
);
const EnumLEATHER1 = Object.fromEntries(
  Object.keys(LEATHER1).map((key) => [key + "@1", LEATHER1[key]])
);
const EnumLEATHER2 = Object.fromEntries(
  Object.keys(LEATHER2).map((key) => [key + "@2", LEATHER2[key]])
);
const EnumLEATHER3 = Object.fromEntries(
  Object.keys(LEATHER3).map((key) => [key + "@3", LEATHER3[key]])
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
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [itemLEATHER, setItemLEATHER] = useState([]);
  const [itemLEATHER1, setItemLEATHER1] = useState([]);
  const [itemLEATHER2, setItemLEATHER2] = useState([]);
  const [itemLEATHER3, setItemLEATHER3] = useState([]);

  function addFitch() {
    fetch(
      `https://west.albion-online-data.com/api/v2/stats/prices/T2_LEATHER,T3_LEATHER,T4_LEATHER,T5_LEATHER,T6_LEATHER,T7_LEATHER,T8_LEATHER.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONLEATHER(json));
    fetch(
      `https://west.albion-online-data.com/api/v2/stats/prices/T4_LEATHER_LEVEL1@1,T5_LEATHER_LEVEL1@1,T6_LEATHER_LEVEL1@1,T7_LEATHER_LEVEL1@1,T8_LEATHER_LEVEL1@1.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONLEATHER1(json));
    fetch(
      `https://west.albion-online-data.com/api/v2/stats/prices/T4_LEATHER_LEVEL2@2,T5_LEATHER_LEVEL2@2,T6_LEATHER_LEVEL2@2,T7_LEATHER_LEVEL2@2,T8_LEATHER_LEVEL2@2.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONLEATHER2(json));
    fetch(
      `https://west.albion-online-data.com/api/v2/stats/prices/T4_LEATHER_LEVEL3@3,T5_LEATHER_LEVEL3@3,T6_LEATHER_LEVEL3@3,T7_LEATHER_LEVEL3@3,T8_LEATHER_LEVEL3@3.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONLEATHER3(json));
    fetch(
      `https://west.albion-online-data.com/api/v2/stats/prices/T2_HIDE,T3_HIDE,T4_HIDE,T5_HIDE,T6_HIDE,T7_HIDE,T8_HIDE.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON(json));
    fetch(
      `https://west.albion-online-data.com/api/v2/stats/prices/T4_HIDE_LEVEL1@1,T5_HIDE_LEVEL1@1,T6_HIDE_LEVEL1@1,T7_HIDE_LEVEL1@1,T8_HIDE_LEVEL1@1.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON2(json));
    fetch(
      `https://west.albion-online-data.com/api/v2/stats/prices/T4_HIDE_LEVEL2@2,T5_HIDE_LEVEL2@2,T6_HIDE_LEVEL2@2,T7_HIDE_LEVEL2@2,T8_HIDE_LEVEL2@2.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON3(json));
    fetch(
      `https://west.albion-online-data.com/api/v2/stats/prices/T4_HIDE_LEVEL3@3,T5_HIDE_LEVEL3@3,T6_HIDE_LEVEL3@3,T7_HIDE_LEVEL3@3,T8_HIDE_LEVEL3@3.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON4(json));
  }

  useEffect(() => {
    addFitch();
  }, []);

  function analysisJSONLEATHER(data) {
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

    setItemLEATHER(array);
  }
  function analysisJSONLEATHER3(data) {
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

    setItemLEATHER3(array);
  }

  function analysisJSONLEATHER2(data) {
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

    setItemLEATHER2(array);
  }

  function analysisJSONLEATHER1(data) {
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

    setItemLEATHER1(array);
  }

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

    setItem(array);
  }
  function analysisJSON2(data) {
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

    setItem1(array);
  }
  function analysisJSON3(data) {
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

    setItem2(array);
  }
  function analysisJSON4(data) {
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

    setItem3(array);
  }

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

  return (
    <>
      <div>
        <h1>Шкура</h1>
        <table
          style={{
            margin: "auto",
            backgroundImage:
              "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
          }}
        >
          <thead>
            <tr style={{ height: "30px" }}>
              <th style={{ width: "200px" }}>Наименование</th>

              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(56, 211, 215, 10%)",
                }}
              >
                Bridgewatch
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 13, 0, 10%)",
                }}
              >
                Martlock
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 255, 128, 10%)",
                }}
              >
                Thetford
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(249, 230 ,217, 10%)",
                }}
              >
                Fort Sterling
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(60, 251, 43, 10%)",
                }}
              >
                Lymhurst
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(134, 67, 189, 10%)",
                }}
              >
                Carleon
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
            </tr>
          </thead>
          <tbody>
            {item.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{Enum[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {checkTimeBD(items.Bridgewatch.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {checkTimeBD(items.Martlock.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {checkTimeBD(items.Thetford.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {checkTimeBD(items.FortSterling.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {checkTimeBD(items.Lymhurst.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {checkTimeBD(items.Caerleon.sellDate)}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table
          style={{
            margin: "auto",
            backgroundImage:
              "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "200px" }}>Наименование</th>

              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(56, 211, 215, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 13, 0, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 255, 128, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(249, 230 ,217, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(60, 251, 43, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(134, 67, 189, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
            </tr>
          </thead>{" "}
          <tbody>
            {item1.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{Enum1Item[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {checkTimeBD(items.Bridgewatch.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {checkTimeBD(items.Martlock.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {checkTimeBD(items.Thetford.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {checkTimeBD(items.FortSterling.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {checkTimeBD(items.Lymhurst.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {checkTimeBD(items.Caerleon.sellDate)}
                  </th>{" "}
                </tr>
              );
            })}
          </tbody>
        </table>
        <table
          style={{
            margin: "auto",
            backgroundImage:
              "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "200px" }}>Наименование</th>

              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(56, 211, 215, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 13, 0, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 255, 128, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(249, 230 ,217, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(60, 251, 43, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(134, 67, 189, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
            </tr>
          </thead>{" "}
          <tbody>
            {item2.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{Enum2Item[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {checkTimeBD(items.Bridgewatch.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {checkTimeBD(items.Martlock.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {checkTimeBD(items.Thetford.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {checkTimeBD(items.FortSterling.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {checkTimeBD(items.Lymhurst.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {checkTimeBD(items.Caerleon.sellDate)}
                  </th>{" "}
                </tr>
              );
            })}
          </tbody>
        </table>
        <table
          style={{
            margin: "auto",
            backgroundImage:
              "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "200px" }}>Наименование</th>

              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(56, 211, 215, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 13, 0, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 255, 128, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(249, 230 ,217, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(60, 251, 43, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(134, 67, 189, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
            </tr>
          </thead>{" "}
          <tbody>
            {item3.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{Enum3Item[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {checkTimeBD(items.Bridgewatch.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {checkTimeBD(items.Martlock.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {checkTimeBD(items.Thetford.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {checkTimeBD(items.FortSterling.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {checkTimeBD(items.Lymhurst.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {checkTimeBD(items.Caerleon.sellDate)}
                  </th>{" "}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h1>Кожа</h1>
        <table
          style={{
            margin: "auto",
            backgroundImage:
              "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
          }}
        >
          <thead>
            <tr style={{ height: "30px" }}>
              <th style={{ width: "200px" }}>Наименование</th>

              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(56, 211, 215, 10%)",
                }}
              >
                Bridgewatch
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 13, 0, 10%)",
                }}
              >
                Martlock
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 255, 128, 10%)",
                }}
              >
                Thetford
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(249, 230 ,217, 10%)",
                }}
              >
                Fort Sterling
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(60, 251, 43, 10%)",
                }}
              >
                Lymhurst
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(134, 67, 189, 10%)",
                }}
              >
                Carleon
              </th>
              <th style={{ width: "75px" }}>lastUpdate</th>
            </tr>
          </thead>
          <tbody>
            {itemLEATHER.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{LEATHER[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {checkTimeBD(items.Bridgewatch.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {checkTimeBD(items.Martlock.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {checkTimeBD(items.Thetford.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {checkTimeBD(items.FortSterling.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {checkTimeBD(items.Lymhurst.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {checkTimeBD(items.Caerleon.sellDate)}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table
          style={{
            margin: "auto",
            backgroundImage:
              "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "200px" }}>Наименование</th>

              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(56, 211, 215, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 13, 0, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 255, 128, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(249, 230 ,217, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(60, 251, 43, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(134, 67, 189, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
            </tr>
          </thead>{" "}
          <tbody>
            {itemLEATHER1.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{EnumLEATHER1[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {checkTimeBD(items.Bridgewatch.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {checkTimeBD(items.Martlock.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {checkTimeBD(items.Thetford.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {checkTimeBD(items.FortSterling.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {checkTimeBD(items.Lymhurst.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {checkTimeBD(items.Caerleon.sellDate)}
                  </th>{" "}
                </tr>
              );
            })}
          </tbody>
        </table>
        <table
          style={{
            margin: "auto",
            backgroundImage:
              "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "200px" }}>Наименование</th>

              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(56, 211, 215, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 13, 0, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 255, 128, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(249, 230 ,217, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(60, 251, 43, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(134, 67, 189, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
            </tr>
          </thead>{" "}
          <tbody>
            {itemLEATHER2.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{EnumLEATHER2[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {checkTimeBD(items.Bridgewatch.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {checkTimeBD(items.Martlock.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {checkTimeBD(items.Thetford.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {checkTimeBD(items.FortSterling.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {checkTimeBD(items.Lymhurst.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {checkTimeBD(items.Caerleon.sellDate)}
                  </th>{" "}
                </tr>
              );
            })}
          </tbody>
        </table>
        <table
          style={{
            margin: "auto",
            backgroundImage:
              "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "200px" }}>Наименование</th>

              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(56, 211, 215, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 13, 0, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 255, 128, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(249, 230 ,217, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(60, 251, 43, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(134, 67, 189, 10%)",
                }}
              ></th>
              <th style={{ width: "75px" }}></th>
            </tr>
          </thead>{" "}
          <tbody>
            {itemLEATHER3.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{EnumLEATHER3[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {checkTimeBD(items.Bridgewatch.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {checkTimeBD(items.Martlock.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {checkTimeBD(items.Thetford.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {checkTimeBD(items.FortSterling.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {checkTimeBD(items.Lymhurst.sellDate)}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {checkTimeBD(items.Caerleon.sellDate)}
                  </th>{" "}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
