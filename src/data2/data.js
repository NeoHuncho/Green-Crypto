import { getDocs, collection } from "firebase/firestore";
import { db } from "constants/initFirebase";
import formatDisplayValue from "utils/formatDisplayValue";

const data = {};

const fetchData = async () => {
  if (Object.keys(data).length === 0) {
    const crypto_snapshot = await getDocs(collection(db, "crypto_data"));
    const CO2_snapshot = await getDocs(collection(db, "CO2_example_data"));
    const country_snapshot = await getDocs(collection(db, "country_data"));
    const constants_snapshot = await getDocs(collection(db, "constants"));
    data["list_items"] = {};
    data["countries_data"] = {};
    data["constants"] = {};
    crypto_snapshot.forEach(
      (crypto) => (data["list_items"][crypto.id] = crypto.data())
    );
    CO2_snapshot.forEach((CO2) => (data["list_items"][CO2.id] = CO2.data()));
    country_snapshot.forEach(
      (country) => (data["countries_data"][country.id] = country.data())
    );
    constants_snapshot.forEach(
      (constant) => (data["constants"][constant.id] = constant.data())
    );
  }
  return data;
};

const updateData = (type, value) => {
  switch (type) {
    case "country":
      const list_items = [];
      for (const [name, itemData] of Object.entries(data["list_items"])) {
        if (!data["list_items"][name].gCO2) {
          data["list_items"][name].gCO2 =
            itemData.Wh_per_trans * data["countries_data"][value].gCO2_per_Wh;
        }
        data["list_items"][name].gCO2_display_value = formatDisplayValue(
          "gCO2",
          data["list_items"][name].gCO2
        );
        list_items.push({ ...data["list_items"][name], name: name });
      }
      data["list_items_array"] = list_items;
      break;
    case "sort_asc":
      return data["list_items_array"].sort(sortDataAsc);

    default:
      break;
  }
};

const sortDataAsc = (a, b) => {
  if (a.gCO2 < b.gCO2) {
    return -1;
  }
  if (a.gCO2 > b.gCO2) {
    return 1;
  }
  return 0;
};
export { data, fetchData, updateData };
