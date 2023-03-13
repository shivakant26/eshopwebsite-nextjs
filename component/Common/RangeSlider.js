import { useState } from "react";
import Slider from "@mui/material/Slider";
import Styles from "../../styles/Layout.module.css";

const RangeSlider = () => {
  const minDistance = 10;
  const [value1, setValue1] = useState([20, 37]);
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
    <>
      <div className={Styles.filter_by}>
        <h5>Filter by Price</h5>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          disableSwap
        />
        <div className={Styles.filter_btn}>
          <button>filter</button>
          <p>
            Price:${value1?.[0]} - ${value1?.[1]}
          </p>
        </div>
      </div>
    </>
  );
};
export default RangeSlider;
