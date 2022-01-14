export default function (a, b) {
  if (a.gCO2 < b.gCO2) {
    return -1;
  }
  if (a.gCO2 > b.gCO2) {
    return 1;
  }
  return 0;
}
