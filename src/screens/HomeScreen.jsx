import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ItemList from "../components/ItemList";
import useSearchApi from "../hooks/useSearchApi";
import ResultLists from "../components/ResultsList";
function HomeScreen() {
  const [inpValue, setInpValue] = useState("");
  const [errorMessage, data, searchApi] = useSearchApi();
  return (
    <View className=" h-full">
      <SearchBar
        term={inpValue}
        onChangeTerm={(newTerm) => setInpValue(newTerm)}
        onTermSubmit={() => searchApi(inpValue)}
      />
      {/* <Text>We have found {data.length} results ! </Text> */}
      {data.length ? null : (
        <Text className="p-2 text-center text-red-500 font-bold text-[20px]">
          {errorMessage}
        </Text>
      )}
      <ScrollView>
        <ResultLists data={data} />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
