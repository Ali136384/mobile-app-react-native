import React from "react";
import ItemList from "./ItemList";
import useSearchApi from "../hooks/useSearchApi";
function ResultLists({ data }) {
  return (
    <>
      <ItemList cost="$" sectionTitle="Cost Effective" data={data} />
      <ItemList cost="$$" sectionTitle="Bit Pricer" data={data} />
      <ItemList cost="$$$" sectionTitle="Big Spender !" data={data} />
    </>
  );
}

export default ResultLists;
