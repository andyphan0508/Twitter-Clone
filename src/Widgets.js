import React from "react";
import "./Widgets.css";
import { TextField, FormControl, InputAdornment, Input } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widget">
      <h2>Widgets</h2>
      <div className="widgetInput">
        <Input
          type="text"
          placeholder="Search"
          className="inputText"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
};

export default Widgets;
