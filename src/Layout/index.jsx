import React from "react";
import { useMutation } from "react-query";

import "./style.scss";

import SearchInputBox from "../components/SearchInput";
import { getListOfGifs } from "../services/giphy";

export default function Layout() {
  const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;
  const {
    mutate: getGifsListMutation,
    isSuccess: getGifsListFetched,
    isLoading: fetchingGifsList,
    data: allGifsData,
  } = useMutation((data) => getListOfGifs(data));

  React.useEffect(() => {
    const body = {
      api_key: giphyApiKey,
      limit: 500,
    };
    getGifsListMutation(body);
  }, [getGifsListMutation, giphyApiKey]);

  return (
    <div className="container">
      <SearchInputBox
        allGifsData={allGifsData?.data?.data}
        fetchingGifsList={fetchingGifsList}
        getGifsListFetched={getGifsListFetched}
      />
    </div>
  );
}
