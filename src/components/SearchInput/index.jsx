import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import "./style.scss";

import { top100Films } from "../../utils";

export default function SearchInput() {
  return (
    <div className="root-search-input">
      <Autocomplete
        id="highlights-demo"
        fullWidth={true}
        sx={{ width: 500 }}
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a GIFs"
            margin="normal"
            variant="standard"
          />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.title, inputValue);
          const parts = parse(option.title, matches);

          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      />
    </div>
  );
}
