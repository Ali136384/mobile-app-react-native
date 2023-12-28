import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import ItemDetails from "./ItemDetails";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ItemList(props) {
  const navigation = useNavigation();
  const filterdData = props.data.filter((ele) => ele.price === props.cost);
  return (
    <>
      {filterdData.length ? (
        <View className="p-2 ml-2">
          <Text className="font-bold text-[23px]">{props.sectionTitle}</Text>

          <FlatList
            showsHorizontalScrollIndicator={false}
            className=" border-b-[1px] border-gray-300 "
            data={filterdData}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SingelResult/:id", { id: item.id })
                }
              >
                <ItemDetails item={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      ) : null}
    </>
  );
}

export default ItemList;
