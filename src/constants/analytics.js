import { logEvent } from "firebase/analytics";
import { analytics } from "./initFirebase";

const logEventAnalytics = (name, value) => {
  console.log(name);
  if (!value) logEvent(analytics, name);
  else logEvent(analytics, name, value);
};


export default logEventAnalytics;
