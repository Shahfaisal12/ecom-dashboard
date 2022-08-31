import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

///Price range

function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 10;

//End Price range

const PriceRange = () => {
  /// Price range
  const [value1, setValue1] = React.useState([20, 37]);

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
  //Price Range end

  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "10px",
        paddingTop: "10px",
        background: "#F8FCFF",
        border: "1px solid #FAF1F1",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "0px",
          display: "flex",
          bgcolor: "background.paper",
          borderRadius: 1,
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom>
            Select Price Range
          </Typography>
        </Box>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
        </Box>
      </Box>
    </div>
  );
};

export default PriceRange;
