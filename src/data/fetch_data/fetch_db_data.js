import { db } from "constants/initFirebase";
import { get, ref } from "firebase/database";
const get_db_data = async () => {
  const data = (await get(ref(db))).val();
  return data;
};
export default get_db_data;
