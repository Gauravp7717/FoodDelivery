import { useState } from "react";

const useFilterRes = (listOFres) => {
  const [filterRes, setFilter] = useState(listOFres);

  const filterBySearchText = (searchText) => {
    const filteredList = listOFres.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilter(filteredList);
  };

  const filterByRating = (rating) => {
    const filteredList = listOFres.filter((res) => res.info.avgRating > rating);
    setFilter(filteredList);
  };

  return { filterRes, filterBySearchText, filterByRating };
};

export default useFilterRes;
