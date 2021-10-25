import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import DeleteIcon from '@mui/icons-material/Delete';

import GifCard from "../Card";

import "./style.scss";

export default function SearchInput(props) {
  const { allGifsData, fetchingGifsList, getGifsListFetched } = props;
  const [selectedGifs, setSelectedGifs] = React.useState([])

  const topGifData = React.useMemo(() => {
    if (allGifsData && getGifsListFetched) {
      return allGifsData?.map((item) => {
        return { id: item.id, title: item.title, imageUrl: item.embed_url };
      });
    }
  }, [getGifsListFetched, allGifsData]);

  const excludedDuplicateData = topGifData?.reduce((unique, o) => {
    if (!unique.some(obj => obj.title === o.title)) {
      unique.push(o);
    }
    return unique;
  }, []);


  const handleChange = (_e, newValue) => {
    setSelectedGifs((prevState) => {
      return ([...prevState, newValue])
    });
  }


  return (
    <>

      <div className="root-search-input">
        <div>
          <Autocomplete
            autoHighlight
            id="highlights-demo"
            sx={{ width: 500 }}
            clearIcon={null}
            loading={fetchingGifsList}
            options={excludedDuplicateData}
            onChange={(e, newValue) => handleChange(e, newValue)}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} label="Search for a GIFs" variant="standard" />
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
        <div className="gifContent">
          {selectedGifs.filter((d) => d !== null)?.map((item) => {
            return (
              <>
                <div key={item} className="giftDelete">
                  <GifCard imageUrl={item?.imageUrl} />
                  <DeleteIcon id="deleteIcon" />
                </div>
              </>
            )
          })}
        </div>
      </div>

    </>
  );
}
