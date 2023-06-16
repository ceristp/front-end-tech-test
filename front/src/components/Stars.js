import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getStarCountArray } from "../helpers/getStarCountArray";

export const StarsDisplay = ({ rating }) => {
  const symbols = getStarCountArray(rating);
  return (
    <span>
      {symbols.map((symbol, index) => {
        if (symbol === "s") {
          return <FontAwesomeIcon key={index} icon={faStar} />;
        } else if (symbol === "hs") {
          return <FontAwesomeIcon key={index} icon={faStarHalf} />;
        }
        return true;
      })}
      ({rating} out of 5)
    </span>
  );
};
