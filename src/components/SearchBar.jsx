import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
function SearchBar({ term, onChangeTerm, onTermSubmit }) {
  return (
    <>
      <View className="bg-gray-200 w-[90%] h-12 self-center mt-4 rounded-xl  relative flex justify-center mb-3">
        <View className="h-full ">
          <TextInput
            onChangeText={(text) => onChangeTerm(text)}
            autoCorrect={false}
            className="px-10 h-full placeholder:text-[16px]"
            placeholder="Search"
            value={term}
            onEndEditing={onTermSubmit}
          />
        </View>
        <View className="absolute ml-3">
          <AntDesign
            className="font-bold "
            name="search1"
            size={25}
            color="black"
          />
        </View>
      </View>
    </>
  );
}

export default SearchBar;
