import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
} from "../../../components/Navbar/NavbarElements";

const Enum = {
  T2_MOUNT_MULE: "Мул",
};
const Enumt3 = {
  T3_MOUNT_HORSE: "Лошадь",
  T3_MOUNT_OX: "Бык",
};
const Enumt4 = {
  T4_MOUNT_HORSE: "Лошадь",
  T4_MOUNT_OX: "Бык",
  T4_MOUNT_GIANTSTAG: "Лось",
};
const Enumt5 = {
  T5_MOUNT_HORSE: "Лошадь",
  T5_MOUNT_OX: "Бык",
  UNIQUE_MOUNT_RHINO_SEASON_BRONZE: "Бронзовый боевой носорог",
  T5_MOUNT_ARMORED_HORSE_SKIN_01: "Боевой конь",
  T5_MOUNT_COUGAR_KEEPER: "Быстрый коготь",
  T5_MOUNT_GREYWOLF_FW_CAERLEON: "Оседланный серый волк",
  T5_MOUNT_SWAMPDRAGON_FW_THETFORD: "Оседланная болотная саламандра",
  T5_MOUNT_ARMORED_HORSE: "Бронированный конь",
  T5_MOUNT_MOABIRD_FW_BRIDGEWATCH: "Оседланный моаберд",
  T5_MOUNT_DIREBEAR_FW_FORTSTERLING: "Оседланный зимний медведь",
  T5_MOUNT_DIREBOAR_FW_LYMHURST: "Лютокабан",
  T5_MOUNT_RAM_FW_MARTLOCK: "Оседланный толсторогий баран",
};
const Enumt6 = {
  T6_MOUNT_HORSE: "Лошадь",
  T6_MOUNT_OX: "Бык",
  T6_MOUNT_ARMORED_HORSE_SKIN_01: "Боевой конь",
  T6_MOUNT_COUGAR_KEEPER: "Быстрый коготь",
  T6_MOUNT_GREYWOLF_FW_CAERLEON: "Оседланный серый волк",
  T6_MOUNT_SWAMPDRAGON_FW_THETFORD: "Оседланная болотная саламандра",
  T6_MOUNT_ARMORED_HORSE: "Бронированный конь",
  T6_MOUNT_MOABIRD_FW_BRIDGEWATCH: "Оседланный моаберд",
  T6_MOUNT_DIREBEAR_FW_FORTSTERLING: "Оседланный зимний медведь",
  T6_MOUNT_DIREBOAR_FW_LYMHURST: "Лютокабан",
  T6_MOUNT_RAM_FW_MARTLOCK: "Оседланный толсторогий баран",
  T6_MOUNT_GIANTSTAG_MOOSE: "Лось ",
  T6_MOUNT_DIREWOLF: "Лютоволк",
  T6_MOUNT_SIEGE_BALLISTA: "Осадная баллиста",
  UNIQUE_MOUNT_MOABIRD_TELLAFRIEND: "Моа рекрутера",
  T6_MOUNT_FROSTRAM_ADC: "Снежный баран",
  UNIQUE_MOUNT_MORGANA_RAVEN_ADC: "Ворон Морганы",
  UNIQUE_MOUNT_DIVINE_OWL_ADC: "Божественная сова",
  UNIQUE_MOUNT_HERETIC_MULE_ADC: "Боевой мул Еретиков",
  UNIQUE_MOUNT_RHINO_SEASON_SILVER: "Серебряный боевой носорог",
  UNIQUE_MOUNT_TOWER_CHARIOT_SILVER: "Колесница с серебряной башней",
  UNIQUE_MOUNT_ARMORED_EAGLE_SILVER: "Серебряный боевой орел",
  UNIQUE_MOUNT_BEETLE_SILVER: "Серебряный жук-колосс",
  UNIQUE_MOUNT_BEHEMOTH_SILVER: "Серебряный бегемот",
  UNIQUE_MOUNT_ENT_SILVER: "Серебряный древний энт",
  UNIQUE_MOUNT_BATTLESPIDER_SILVER: "Серебряный гигантский конеед",
  UNIQUE_MOUNT_BASTION_SILVER: "Серебряный осадный бастион",
  UNIQUE_MOUNT_JUGGERNAUT_SILVER: "Серебряный Джаггернаут",
  UNIQUE_MOUNT_TANKBEETLE_SILVER: "Серебряный жук Фаланкс",
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

function Maunt() {
  const [item, setItem] = useState([]);
  const [itemt3, setItemt3] = useState([]);
  const [itemt4, setItemt4] = useState([]);
  const [itemt5, setItemt5] = useState([]);
  const [itemt6, setItemt6] = useState([]);

  function addFitch() {
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T2_MOUNT_MULE.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=4`
    )
      .then((res) => res.json())
      .then((json) => analysisJSON(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T3_MOUNT_HORSE,T3_MOUNT_OX,.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=4`
    )
      .then((res) => res.json())
      .then((json) => mauntt3(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T4_MOUNT_HORSE,T4_MOUNT_OX,T4_MOUNT_GIANTSTAG.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=4`
    )
      .then((res) => res.json())
      .then((json) => mauntt4(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/T5_MOUNT_GREYWOLF_FW_CAERLEON,T5_MOUNT_COUGAR_KEEPER,T5_MOUNT_DIREBOAR_FW_LYMHURST,T5_MOUNT_RAM_FW_MARTLOCK,T5_MOUNT_DIREBEAR_FW_FORTSTERLING,T5_MOUNT_MOABIRD_FW_BRIDGEWATCH,T5_MOUNT_ARMORED_HORSE,T5_MOUNT_SWAMPDRAGON_FW_THETFORD,T5_MOUNT_HORSE,T5_MOUNT_OX,UNIQUE_MOUNT_RHINO_SEASON_BRONZE,T5_MOUNT_ARMORED_HORSE_SKIN_01.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=4`
    )
      .then((res) => res.json())
      .then((json) => mauntt5(json));
    fetch(
      `https://east.albion-online-data.com/api/v2/stats/prices/UNIQUE_MOUNT_TANKBEETLE_SILVER,UNIQUE_MOUNT_JUGGERNAUT_SILVER,UNIQUE_MOUNT_BASTION_SILVER,UNIQUE_MOUNT_BATTLESPIDER_SILVER,UNIQUE_MOUNT_ENT_SILVER,UNIQUE_MOUNT_BEHEMOTH_SILVER,UNIQUE_MOUNT_BEETLE_SILVER,UNIQUE_MOUNT_ARMORED_EAGLE_SILVER,UNIQUE_MOUNT_TOWER_CHARIOT_SILVER,UNIQUE_MOUNT_RHINO_SEASON_SILVER,UNIQUE_MOUNT_HERETIC_MULE_ADC,T6_MOUNT_GREYWOLF_FW_CAERLEON,UNIQUE_MOUNT_DIVINE_OWL_ADC,UNIQUE_MOUNT_MORGANA_RAVEN_ADC,T6_MOUNT_FROSTRAM_ADC,UNIQUE_MOUNT_MOABIRD_TELLAFRIEND,T6_MOUNT_SIEGE_BALLISTA,T6_MOUNT_DIREWOLF,T6_MOUNT_GIANTSTAG_MOOSE,T6_MOUNT_COUGAR_KEEPER,T6_MOUNT_DIREBOAR_FW_LYMHURST,T6_MOUNT_RAM_FW_MARTLOCK,T6_MOUNT_DIREBEAR_FW_FORTSTERLING,T6_MOUNT_MOABIRD_FW_BRIDGEWATCH,T6_MOUNT_ARMORED_HORSE,T6_MOUNT_SWAMPDRAGON_FW_THETFORD,T6_MOUNT_HORSE,T6_MOUNT_OX,T6_MOUNT_ARMORED_HORSE_SKIN_01.json?locations=Caerleon,BlackMarket,Martlock,Thetford,Lymhurst,FortSterling,Bridgewatch&qualities=4`
    )
      .then((res) => res.json())
      .then((json) => mauntt6(json));
  }

  useEffect(() => {
    addFitch();
  }, []);

  function mauntt6(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
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

    setItemt6(array);
  }
  function mauntt5(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
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

    setItemt5(array);
  }
  function mauntt4(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
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

    setItemt4(array);
  }
  function mauntt3(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
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

    setItemt3(array);
  }

  function analysisJSON(data) {
    let array = [];
    data.map((data) => {
      const objectReadyJSON = {};

      for (let i = 0; i < array.length; i++) {
        if (array[i].item_id === data.item_id) {
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

  return (
    <>
      <div style={{ position: "sticky", top: "5px" }}>
        <div>
          <Nav>
            <NavMenu>
              <h1>Т 4 - отличное</h1>
              <NavLink to="/maunte" activeStyle>
                1
              </NavLink>
              <NavLink to="/maunt2e" activeStyle>
                2
              </NavLink>
              <NavLink to="/maunt3e" activeStyle>
                3
              </NavLink>
              <NavLink to="/maunt4e" activeStyle>
                4
              </NavLink>
              <NavLink to="/maunt5e" activeStyle>
                5
              </NavLink>
              <h1>Сервер: EAST</h1>
            </NavMenu>
          </Nav>
        </div>
      </div>
      <h1 style={{ margin: "0", padding: "0" }}>Маунт Т-2</h1>
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
            let url = `https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${items.item_id}`;
            return (
              <tr key={key}>
                <img style={{ width: "40px" }} src={url} />
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
      <h1 style={{ margin: "0", padding: "0" }}>Маунт Т-3</h1>
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
          {itemt3.map((items, key) => {
            let url = `https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${items.item_id}`;
            return (
              <tr key={key}>
                <img style={{ width: "40px" }} src={url} />
                <th>{Enumt3[items.item_id]}</th>
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
      <h1 style={{ margin: "0", padding: "0" }}>Маунт Т-4</h1>
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
          {itemt4.map((items, key) => {
            let url = `https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${items.item_id}`;
            return (
              <tr key={key}>
                <img style={{ width: "40px" }} src={url} />
                <th>{Enumt4[items.item_id]}</th>
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
      <h1 style={{ margin: "0", padding: "0" }}>Маунт Т-5</h1>
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
          {itemt5.map((items, key) => {
            let url = `https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/${items.item_id}`;
            return (
              <tr key={key}>
                <img style={{ width: "40px" }} src={url} />
                <th>{Enumt5[items.item_id]}</th>
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
      <h1 style={{ margin: "0", padding: "0" }}>Маунт Т-6</h1>
      <table
        style={{
          margin: "auto",
          backgroundImage:
            "linear-gradient(rgba(43,43,43,0.8), rgba(43,43,43,0.8))",
        }}
      >
        <thead>
          <tr style={{ height: "30px" }}>
            <th style={{ width: "250px" }}>Наименование</th>

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
          {itemt6.map((items, key) => {
            return (
              <tr key={key}>
                <th style={{ height: "30px" }}>{Enumt6[items.item_id]}</th>
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
    </>
  );
}

export default Maunt;
