import React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import "./style.scss";

export default function SearchInput(props) {
  const { allGifsData, fetchingGifsList, getGifsListFetched } = props;

  const topGifData = React.useMemo(() => {
    if (allGifsData && getGifsListFetched) {
      return allGifsData?.map((item) => {
        return { id: item.id, title: item.title, imageUrl: item.embed_url };
      });
    }
  }, [getGifsListFetched, allGifsData]);

  console.log(topGifData, "topGifData");

  return (
    <div className="root-search-input">
      <Autocomplete
        multiple
        freeSolo
        id="tags-filled"
        sx={{ width: 500 }}
        loading={fetchingGifsList}
        options={topGifData?.map((option) => option.title)}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label="Search for a GIFs" variant="standard" />
        )}
      />
    </div>
  );
}
