import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loader({ loading }) {
  return (
    <div>
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        ""
      )}
    </div>
  );
}

export default Loader;
