export const getStarCountArray = (rating) => {
  let starCounter = rating;
  const symbols = [];
  for (let i = 0; i <= 5; i++) {
    if (starCounter >= 1) {
      symbols.push("s");
    } else if (starCounter >= 0.5) {
      symbols.push("hs");
    }
    starCounter--;
  }
  return symbols;
};
