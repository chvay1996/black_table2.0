import React, { useEffect, useState } from "react";

const Enum = {
  T2_CLOTH: "Простая ткань (T2)",
  T3_CLOTH: "Аккуратная ткань (T3)",
  T4_CLOTH: "Прекрасная ткань (T4)",
  T5_CLOTH: "Изысканная ткань (T5)",
  T6_CLOTH: "Роскошная ткань (T6)",
  T7_CLOTH: "Роскошная ткань (T7)",
  T8_CLOTH: "Барочная ткань (T8)",
};
let Enum1 = {
  T4_CLOTH_LEVEL1: "Прекрасная ткань (T - 4.1)",
  T5_CLOTH_LEVEL1: "Изысканная ткань (T - 5.1)",
  T6_CLOTH_LEVEL1: "Роскошная ткань (T - 6.1)",
  T7_CLOTH_LEVEL1: "Роскошная ткань (T - 7.1)",
  T8_CLOTH_LEVEL1: "Барочная ткань (T - 8.1)",
};
let Enum2 = {
  T4_CLOTH_LEVEL2: "Прекрасная ткань (T - 4.2)",
  T5_CLOTH_LEVEL2: "Изысканная ткань (T - 5.2)",
  T6_CLOTH_LEVEL2: "Роскошная ткань (T - 6.2)",
  T7_CLOTH_LEVEL2: "Роскошная ткань (T - 7.2)",
  T8_CLOTH_LEVEL2: "Барочная ткань (T - 8.2)",
};
let Enum3 = {
  T4_CLOTH_LEVEL3: "Прекрасная ткань (T - 4.3)",
  T5_CLOTH_LEVEL3: "Изысканная ткань (T - 5.3)",
  T6_CLOTH_LEVEL3: "Роскошная ткань (T - 6.3)",
  T7_CLOTH_LEVEL3: "Роскошная ткань (T - 7.3)",
  T8_CLOTH_LEVEL3: "Барочная ткань (T - 8.3)",
};
let FIBER = {
  T2_FIBER: "Хлопок (T2)",
  T3_FIBER: "Лен(T3)",
  T4_FIBER: "Конопля(T4)",
  T5_FIBER: "Небесный цветок(T5)",
  T6_FIBER: "Хлопок янтарного листа (T6)",
  T7_FIBER: "Подсолнечник(T7)",
  T8_FIBER: "Призрачная конопля(T8)",
};
let FIBER1 = {
  T4_FIBER_LEVEL1: "Конопля(T - 4.1)",
  T5_FIBER_LEVEL1: "Небесный цветок(T - 5.1)",
  T6_FIBER_LEVEL1: "Хлопок янтарного листа (T - 6.1)",
  T7_FIBER_LEVEL1: "Подсолнечник(T - 7.1)",
  T8_FIBER_LEVEL1: "Призрачная конопля(T - 8.1)",
};
let FIBER2 = {
  T4_FIBER_LEVEL2: "Конопля(T - 4.2)",
  T5_FIBER_LEVEL2: "Небесный цветок(T - 5.2)",
  T6_FIBER_LEVEL2: "Хлопок янтарного листа (T - 6.2)",
  T7_FIBER_LEVEL2: "Подсолнечник(T - 7.2)",
  T8_FIBER_LEVEL2: "Призрачная конопля(T - 8.2)",
};
let FIBER3 = {
  T4_FIBER_LEVEL3: "Конопля(T - 4.3)",
  T5_FIBER_LEVEL3: "Небесный цветок(T - 5.3)",
  T6_FIBER_LEVEL3: "Хлопок янтарного листа (T - 6.3)",
  T7_FIBER_LEVEL3: "Подсолнечник(T - 7.3)",
  T8_FIBER_LEVEL3: "Призрачная конопля(T - 8.3)",
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
const EnumFIBER1 = Object.fromEntries(
  Object.keys(FIBER1).map((key) => [key + "@1", FIBER1[key]])
);
const EnumFIBER2 = Object.fromEntries(
  Object.keys(FIBER2).map((key) => [key + "@2", FIBER2[key]])
);
const EnumFIBER3 = Object.fromEntries(
  Object.keys(FIBER3).map((key) => [key + "@3", FIBER3[key]])
);

function App() {
  const [item, setItem] = useState([]);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [itemFIBER, setItemFIBER] = useState([]);
  const [itemFIBER1, setItemFIBER1] = useState([]);
  const [itemFIBER2, setItemFIBER2] = useState([]);
  const [itemFIBER3, setItemFIBER3] = useState([]);

  function addFitch() {
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T2_FIBER,T3_FIBER,T4_FIBER,T5_FIBER,T6_FIBER,T7_FIBER,T8_FIBER.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONFIBER(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_FIBER_LEVEL1@1,T5_FIBER_LEVEL1@1,T6_FIBER_LEVEL1@1,T7_FIBER_LEVEL1@1,T8_FIBER_LEVEL1@1.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONFIBER1(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_FIBER_LEVEL2@2,T5_FIBER_LEVEL2@2,T6_FIBER_LEVEL2@2,T7_FIBER_LEVEL2@2,T8_FIBER_LEVEL2@2.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONFIBER2(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_FIBER_LEVEL3@3,T5_FIBER_LEVEL3@3,T6_FIBER_LEVEL3@3,T7_FIBER_LEVEL3@3,T8_FIBER_LEVEL3@3.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONFIBER3(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T2_CLOTH,T3_CLOTH,T4_CLOTH,T5_CLOTH,T6_CLOTH,T7_CLOTH,T8_CLOTH.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_CLOTH_LEVEL1@1,T5_CLOTH_LEVEL1@1,T6_CLOTH_LEVEL1@1,T7_CLOTH_LEVEL1@1,T8_CLOTH_LEVEL1@1.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON2(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_CLOTH_LEVEL2@2,T5_CLOTH_LEVEL2@2,T6_CLOTH_LEVEL2@2,T7_CLOTH_LEVEL2@2,T8_CLOTH_LEVEL2@2.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON3(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_CLOTH_LEVEL3@3,T5_CLOTH_LEVEL3@3,T6_CLOTH_LEVEL3@3,T7_CLOTH_LEVEL3@3,T8_CLOTH_LEVEL3@3.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON4(json));
  }

  useEffect(() => {
    addFitch();
  }, []);

  function analysisJSONFIBER(data) {
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

    setItemFIBER(array);
  }
  function analysisJSONFIBER3(data) {
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

    setItemFIBER3(array);
  }

  function analysisJSONFIBER2(data) {
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

    setItemFIBER2(array);
  }

  function analysisJSONFIBER1(data) {
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

    setItemFIBER1(array);
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
        <h1>Ткань</h1>
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
              <th style={{ width: "225px" }}></th>

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
              <th style={{ width: "225px" }}></th>

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
              <th style={{ width: "225px" }}></th>

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
        <h1>Волокно</h1>
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
            {itemFIBER.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{FIBER[items.item_id]}</th>
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
              <th style={{ width: "225px" }}></th>

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
            {itemFIBER1.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{EnumFIBER1[items.item_id]}</th>
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
              <th style={{ width: "225px" }}></th>

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
            {itemFIBER2.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{EnumFIBER2[items.item_id]}</th>
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
              <th style={{ width: "225px" }}></th>

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
            {itemFIBER3.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{EnumFIBER3[items.item_id]}</th>
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
