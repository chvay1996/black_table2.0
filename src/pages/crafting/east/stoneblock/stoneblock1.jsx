import React, { useEffect, useState } from "react";

const Enum = {
  T2_ROCK: "Известняк (T2)",
  T3_ROCK: "Песчаник (T3)",
  T4_ROCK: "Травертин (T4)",
  T5_ROCK: "Гранит (T5)",
  T6_ROCK: "Сланц (T6)",
  T7_ROCK: "Базальт (T7)",
  T8_ROCK: "Мрамор (T8)",
};
let Enum1 = {
  T4_ROCK_LEVEL1: "Травертин (T - 4.1)",
  T5_ROCK_LEVEL1: "Гранит (T - 5.1)",
  T6_ROCK_LEVEL1: "Сланц (T - 6.1)",
  T7_ROCK_LEVEL1: "Базальт (T - 7.1)",
  T8_ROCK_LEVEL1: "Мрамор (T - 8.1)",
};
let Enum2 = {
  T4_ROCK_LEVEL2: "Травертин (T - 4.2)",
  T5_ROCK_LEVEL2: "Гранит (T - 5.2)",
  T6_ROCK_LEVEL2: "Сланц (T - 6.2)",
  T7_ROCK_LEVEL2: "Базальт (T - 7.2)",
  T8_ROCK_LEVEL2: "Мрамор (T - 8.2)",
};
let Enum3 = {
  T4_ROCK_LEVEL3: "Травертин (T - 4.3)",
  T5_ROCK_LEVEL3: "Гранит (T - 5.3)",
  T6_ROCK_LEVEL3: "Сланц (T - 6.3)",
  T7_ROCK_LEVEL3: "Базальт (T - 7.3)",
  T8_ROCK_LEVEL3: "Мрамор (T - 8.3)",
};
let STONEBLOCK = {
  T2_STONEBLOCK: "Блок извястника (T2)",
  T3_STONEBLOCK: "Блок песчаника(T3)",
  T4_STONEBLOCK: "Блок травертина(T4)",
  T5_STONEBLOCK: "Гранитный блокT5)",
  T6_STONEBLOCK: "Сланцевый блок (T6)",
  T7_STONEBLOCK: "Базальтовый блок(T7)",
  T8_STONEBLOCK: "Мраморный блок(T8)",
};
let STONEBLOCK1 = {
  T4_STONEBLOCK_LEVEL1: "Блок травертина(T - 4.1)",
  T5_STONEBLOCK_LEVEL1: "Гранитный блокT - 5.1)",
  T6_STONEBLOCK_LEVEL1: "Сланцевый блок (T - 6.1)",
  T7_STONEBLOCK_LEVEL1: "Базальтовый блок(T - 7.1)",
  T8_STONEBLOCK_LEVEL1: "Мраморный блок(T - 8.1)",
};
let STONEBLOCK2 = {
  T4_STONEBLOCK_LEVEL2: "Блок травертина(T - 4.2)",
  T5_STONEBLOCK_LEVEL2: "Гранитный блокT - 5.2)",
  T6_STONEBLOCK_LEVEL2: "Сланцевый блок (T - 6.2)",
  T7_STONEBLOCK_LEVEL2: "Базальтовый блок(T - 7.2)",
  T8_STONEBLOCK_LEVEL2: "Мраморный блок(T - 8.2)",
};
let STONEBLOCK3 = {
  T4_STONEBLOCK_LEVEL3: "Конопля(T - 4.3)",
  T5_STONEBLOCK_LEVEL3: "Гранитный блокT - 5.3)",
  T6_STONEBLOCK_LEVEL3: "Сланцевый блок (T - 6.3)",
  T7_STONEBLOCK_LEVEL3: "Базальтовый блок(T - 7.3)",
  T8_STONEBLOCK_LEVEL3: "Мраморный блок(T - 8.3)",
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
const EnumSTONEBLOCK1 = Object.fromEntries(
  Object.keys(STONEBLOCK1).map((key) => [key + "@1", STONEBLOCK1[key]])
);
const EnumSTONEBLOCK2 = Object.fromEntries(
  Object.keys(STONEBLOCK2).map((key) => [key + "@2", STONEBLOCK2[key]])
);
const EnumSTONEBLOCK3 = Object.fromEntries(
  Object.keys(STONEBLOCK3).map((key) => [key + "@3", STONEBLOCK3[key]])
);

function App() {
  const [item, setItem] = useState([]);
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [item3, setItem3] = useState([]);
  const [itemSTONEBLOCK, setItemSTONEBLOCK] = useState([]);
  const [itemSTONEBLOCK1, setItemSTONEBLOCK1] = useState([]);
  const [itemSTONEBLOCK2, setItemSTONEBLOCK2] = useState([]);
  const [itemSTONEBLOCK3, setItemSTONEBLOCK3] = useState([]);

  function addFitch() {
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T2_STONEBLOCK,T3_STONEBLOCK,T4_STONEBLOCK,T5_STONEBLOCK,T6_STONEBLOCK,T7_STONEBLOCK,T8_STONEBLOCK.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONSTONEBLOCK(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_STONEBLOCK_LEVEL1@1,T5_STONEBLOCK_LEVEL1@1,T6_STONEBLOCK_LEVEL1@1,T7_STONEBLOCK_LEVEL1@1,T8_STONEBLOCK_LEVEL1@1.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONSTONEBLOCK1(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_STONEBLOCK_LEVEL2@2,T5_STONEBLOCK_LEVEL2@2,T6_STONEBLOCK_LEVEL2@2,T7_STONEBLOCK_LEVEL2@2,T8_STONEBLOCK_LEVEL2@2.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONSTONEBLOCK2(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_STONEBLOCK_LEVEL3@3,T5_STONEBLOCK_LEVEL3@3,T6_STONEBLOCK_LEVEL3@3,T7_STONEBLOCK_LEVEL3@3,T8_STONEBLOCK_LEVEL3@3.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSONSTONEBLOCK3(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T2_ROCK,T3_ROCK,T4_ROCK,T5_ROCK,T6_ROCK,T7_ROCK,T8_ROCK.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_ROCK_LEVEL1@1,T5_ROCK_LEVEL1@1,T6_ROCK_LEVEL1@1,T7_ROCK_LEVEL1@1,T8_ROCK_LEVEL1@1.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON2(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_ROCK_LEVEL2@2,T5_ROCK_LEVEL2@2,T6_ROCK_LEVEL2@2,T7_ROCK_LEVEL2@2,T8_ROCK_LEVEL2@2.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON3(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_ROCK_LEVEL3@3,T5_ROCK_LEVEL3@3,T6_ROCK_LEVEL3@3,T7_ROCK_LEVEL3@3,T8_ROCK_LEVEL3@3.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON4(json));
  }

  useEffect(() => {
    addFitch();
  }, []);

  function analysisJSONSTONEBLOCK(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
          if (data.city === "Bridgewatch")
            array[i].Bridgewatch = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Martlock")
            array[i].Martlock = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Thetford")
            array[i].Thetford = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Fort Sterling")
            array[i].FortSterling = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Lymhurst")
            array[i].Lymhurst = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Caerleon")
            array[i].Caerleon = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          return false;
        }
      }
      objectReadyJSON.item_id = data.item_id;
      if (data.city === "Black Market")
        objectReadyJSON.BlackMarket = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.BlackMarket = { buy: 0, sell: 0 };
      if (data.city === "Bridgewatch")
        objectReadyJSON.Bridgewatch = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Bridgewatch = { buy: 0, sell: 0 };
      if (data.city === "Martlock")
        objectReadyJSON.Martlock = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Martlock = { buy: 0, sell: 0 };
      if (data.city === "Thetford")
        objectReadyJSON.Thetford = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Thetford = { buy: 0, sell: 0 };
      if (data.city === "FortSterling")
        objectReadyJSON.FortSterling = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.FortSterling = { buy: 0, sell: 0 };
      if (data.city === "Lymhurst")
        objectReadyJSON.Lymhurst = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      array.push(objectReadyJSON);
    });

    setItemSTONEBLOCK(array);
  }
  function analysisJSONSTONEBLOCK3(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
          if (data.city === "Bridgewatch")
            array[i].Bridgewatch = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Martlock")
            array[i].Martlock = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Thetford")
            array[i].Thetford = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Fort Sterling")
            array[i].FortSterling = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Lymhurst")
            array[i].Lymhurst = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Caerleon")
            array[i].Caerleon = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          return false;
        }
      }
      objectReadyJSON.item_id = data.item_id;
      if (data.city === "Black Market")
        objectReadyJSON.BlackMarket = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.BlackMarket = { buy: 0, sell: 0 };
      if (data.city === "Bridgewatch")
        objectReadyJSON.Bridgewatch = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Bridgewatch = { buy: 0, sell: 0 };
      if (data.city === "Martlock")
        objectReadyJSON.Martlock = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Martlock = { buy: 0, sell: 0 };
      if (data.city === "Thetford")
        objectReadyJSON.Thetford = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Thetford = { buy: 0, sell: 0 };
      if (data.city === "FortSterling")
        objectReadyJSON.FortSterling = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.FortSterling = { buy: 0, sell: 0 };
      if (data.city === "Lymhurst")
        objectReadyJSON.Lymhurst = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      array.push(objectReadyJSON);
    });

    setItemSTONEBLOCK3(array);
  }

  function analysisJSONSTONEBLOCK2(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
          if (data.city === "Bridgewatch")
            array[i].Bridgewatch = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Martlock")
            array[i].Martlock = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Thetford")
            array[i].Thetford = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Fort Sterling")
            array[i].FortSterling = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Lymhurst")
            array[i].Lymhurst = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Caerleon")
            array[i].Caerleon = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          return false;
        }
      }
      objectReadyJSON.item_id = data.item_id;
      if (data.city === "Black Market")
        objectReadyJSON.BlackMarket = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.BlackMarket = { buy: 0, sell: 0 };
      if (data.city === "Bridgewatch")
        objectReadyJSON.Bridgewatch = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Bridgewatch = { buy: 0, sell: 0 };
      if (data.city === "Martlock")
        objectReadyJSON.Martlock = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Martlock = { buy: 0, sell: 0 };
      if (data.city === "Thetford")
        objectReadyJSON.Thetford = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Thetford = { buy: 0, sell: 0 };
      if (data.city === "FortSterling")
        objectReadyJSON.FortSterling = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.FortSterling = { buy: 0, sell: 0 };
      if (data.city === "Lymhurst")
        objectReadyJSON.Lymhurst = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      array.push(objectReadyJSON);
    });

    setItemSTONEBLOCK2(array);
  }

  function analysisJSONSTONEBLOCK1(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
          if (data.city === "Bridgewatch")
            array[i].Bridgewatch = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Martlock")
            array[i].Martlock = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Thetford")
            array[i].Thetford = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Fort Sterling")
            array[i].FortSterling = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Lymhurst")
            array[i].Lymhurst = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Caerleon")
            array[i].Caerleon = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          return false;
        }
      }
      objectReadyJSON.item_id = data.item_id;
      if (data.city === "Black Market")
        objectReadyJSON.BlackMarket = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.BlackMarket = { buy: 0, sell: 0 };
      if (data.city === "Bridgewatch")
        objectReadyJSON.Bridgewatch = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Bridgewatch = { buy: 0, sell: 0 };
      if (data.city === "Martlock")
        objectReadyJSON.Martlock = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Martlock = { buy: 0, sell: 0 };
      if (data.city === "Thetford")
        objectReadyJSON.Thetford = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Thetford = { buy: 0, sell: 0 };
      if (data.city === "FortSterling")
        objectReadyJSON.FortSterling = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.FortSterling = { buy: 0, sell: 0 };
      if (data.city === "Lymhurst")
        objectReadyJSON.Lymhurst = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      array.push(objectReadyJSON);
    });

    setItemSTONEBLOCK1(array);
  }

  function analysisJSON(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
          if (data.city === "Bridgewatch")
            array[i].Bridgewatch = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Martlock")
            array[i].Martlock = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Thetford")
            array[i].Thetford = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Fort Sterling")
            array[i].FortSterling = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Lymhurst")
            array[i].Lymhurst = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Caerleon")
            array[i].Caerleon = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          return false;
        }
      }
      objectReadyJSON.item_id = data.item_id;
      if (data.city === "Black Market")
        objectReadyJSON.BlackMarket = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.BlackMarket = { buy: 0, sell: 0 };
      if (data.city === "Bridgewatch")
        objectReadyJSON.Bridgewatch = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Bridgewatch = { buy: 0, sell: 0 };
      if (data.city === "Martlock")
        objectReadyJSON.Martlock = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Martlock = { buy: 0, sell: 0 };
      if (data.city === "Thetford")
        objectReadyJSON.Thetford = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Thetford = { buy: 0, sell: 0 };
      if (data.city === "FortSterling")
        objectReadyJSON.FortSterling = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.FortSterling = { buy: 0, sell: 0 };
      if (data.city === "Lymhurst")
        objectReadyJSON.Lymhurst = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
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
          if (data.city === "Bridgewatch")
            array[i].Bridgewatch = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Martlock")
            array[i].Martlock = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Thetford")
            array[i].Thetford = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Fort Sterling")
            array[i].FortSterling = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Lymhurst")
            array[i].Lymhurst = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Caerleon")
            array[i].Caerleon = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          return false;
        }
      }
      objectReadyJSON.item_id = data.item_id;
      if (data.city === "Black Market")
        objectReadyJSON.BlackMarket = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.BlackMarket = { buy: 0, sell: 0 };
      if (data.city === "Bridgewatch")
        objectReadyJSON.Bridgewatch = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Bridgewatch = { buy: 0, sell: 0 };
      if (data.city === "Martlock")
        objectReadyJSON.Martlock = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Martlock = { buy: 0, sell: 0 };
      if (data.city === "Thetford")
        objectReadyJSON.Thetford = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Thetford = { buy: 0, sell: 0 };
      if (data.city === "FortSterling")
        objectReadyJSON.FortSterling = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.FortSterling = { buy: 0, sell: 0 };
      if (data.city === "Lymhurst")
        objectReadyJSON.Lymhurst = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
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
          if (data.city === "Bridgewatch")
            array[i].Bridgewatch = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Martlock")
            array[i].Martlock = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Thetford")
            array[i].Thetford = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Fort Sterling")
            array[i].FortSterling = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Lymhurst")
            array[i].Lymhurst = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Caerleon")
            array[i].Caerleon = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          return false;
        }
      }
      objectReadyJSON.item_id = data.item_id;
      if (data.city === "Black Market")
        objectReadyJSON.BlackMarket = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.BlackMarket = { buy: 0, sell: 0 };
      if (data.city === "Bridgewatch")
        objectReadyJSON.Bridgewatch = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Bridgewatch = { buy: 0, sell: 0 };
      if (data.city === "Martlock")
        objectReadyJSON.Martlock = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Martlock = { buy: 0, sell: 0 };
      if (data.city === "Thetford")
        objectReadyJSON.Thetford = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Thetford = { buy: 0, sell: 0 };
      if (data.city === "FortSterling")
        objectReadyJSON.FortSterling = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.FortSterling = { buy: 0, sell: 0 };
      if (data.city === "Lymhurst")
        objectReadyJSON.Lymhurst = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
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
          if (data.city === "Bridgewatch")
            array[i].Bridgewatch = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Martlock")
            array[i].Martlock = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Thetford")
            array[i].Thetford = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Fort Sterling")
            array[i].FortSterling = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Lymhurst")
            array[i].Lymhurst = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          if (data.city === "Caerleon")
            array[i].Caerleon = {
              buy: data.buy_price_max,
              sell: data.sell_price_min,
            };
          return false;
        }
      }
      objectReadyJSON.item_id = data.item_id;
      if (data.city === "Black Market")
        objectReadyJSON.BlackMarket = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.BlackMarket = { buy: 0, sell: 0 };
      if (data.city === "Bridgewatch")
        objectReadyJSON.Bridgewatch = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Bridgewatch = { buy: 0, sell: 0 };
      if (data.city === "Martlock")
        objectReadyJSON.Martlock = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Martlock = { buy: 0, sell: 0 };
      if (data.city === "Thetford")
        objectReadyJSON.Thetford = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Thetford = { buy: 0, sell: 0 };
      if (data.city === "FortSterling")
        objectReadyJSON.FortSterling = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.FortSterling = { buy: 0, sell: 0 };
      if (data.city === "Lymhurst")
        objectReadyJSON.Lymhurst = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      if (data.city === "Caerleon")
        objectReadyJSON.Caerleon = {
          buy: data.buy_price_max,
          sell: data.sell_price_min,
        };
      else objectReadyJSON.Caerleon = { buy: 0, sell: 0 };
      array.push(objectReadyJSON);
    });

    setItem3(array);
  }

  return (
    <>
      <div>
        <h1>Камень</h1>
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
              <th style={{ width: "75px" }}>Закупка</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 13, 0, 10%)",
                }}
              >
                Martlock
              </th>
              <th style={{ width: "75px" }}>Закупка</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 255, 128, 10%)",
                }}
              >
                Thetford
              </th>
              <th style={{ width: "75px" }}>Закупка</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(249, 230 ,217, 10%)",
                }}
              >
                Fort Sterling
              </th>
              <th style={{ width: "75px" }}>Закупка</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(60, 251, 43, 10%)",
                }}
              >
                Lymhurst
              </th>
              <th style={{ width: "75px" }}>Закупка</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(134, 67, 189, 10%)",
                }}
              >
                Carleon
              </th>
              <th style={{ width: "75px" }}>Закупка</th>
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
                    {items.Bridgewatch.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.buy}
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
                    {items.Bridgewatch.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.buy}
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
                    {items.Bridgewatch.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.buy}
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
                    {items.Bridgewatch.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.buy}
                  </th>{" "}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h1>Блоки</h1>
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
              <th style={{ width: "75px" }}>Закупка</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 13, 0, 10%)",
                }}
              >
                Martlock
              </th>
              <th style={{ width: "75px" }}>Закупка</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(255, 255, 128, 10%)",
                }}
              >
                Thetford
              </th>
              <th style={{ width: "75px" }}>Закупка</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(249, 230 ,217, 10%)",
                }}
              >
                Fort Sterling
              </th>
              <th style={{ width: "75px" }}>Закупка</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(60, 251, 43, 10%)",
                }}
              >
                Lymhurst
              </th>
              <th style={{ width: "75px" }}>Закупка</th>
              <th
                style={{
                  width: "75px",
                  backgroundColor: "rgb(134, 67, 189, 10%)",
                }}
              >
                Carleon
              </th>
              <th style={{ width: "75px" }}>Закупка</th>
            </tr>
          </thead>
          <tbody>
            {itemSTONEBLOCK.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{STONEBLOCK[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.buy}
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
            {itemSTONEBLOCK1.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{EnumSTONEBLOCK1[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.buy}
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
            {itemSTONEBLOCK2.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{EnumSTONEBLOCK2[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.buy}
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
            {itemSTONEBLOCK3.map((items, key) => {
              return (
                <tr key={key}>
                  <th>{EnumSTONEBLOCK3[items.item_id]}</th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(56, 211, 215, 10%)" }}>
                    {items.Bridgewatch.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 13, 0, 10%)" }}>
                    {items.Martlock.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(255, 255, 128, 10%)" }}>
                    {items.Thetford.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(249, 230 ,217, 10%)" }}>
                    {items.FortSterling.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(60, 251, 43, 10%)" }}>
                    {items.Lymhurst.buy}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.sell}
                  </th>
                  <th style={{ backgroundColor: "rgb(134, 67, 189, 10%)" }}>
                    {items.Caerleon.buy}
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
