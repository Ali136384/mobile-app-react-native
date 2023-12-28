import React from "react";
import { Image, Text, View } from "react-native";

function ItemDetails({ item }) {
  return (
    <>
      <View className="py-2 flex gap-2 pr-3 ">
        {item.image_url ? (
          <Image
            className="rounded-xl"
            source={{ uri: item.image_url }}
            style={{ width: 300, height: 160 }}
          />
        ) : (
          <Image
            className="rounded-xl"
            style={{ width: 300, height: 160 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeQhQTtgB7bEsFlH6rxb5zPsOgOa5yxnCVQ&usqp=CAU",
            }}
          />
        )}
        <Text className="font-bold">{item.name}</Text>
        <View>
          <Text className="opacity-70">
            {item.rating} Stars, {item.review_count} Reviews
          </Text>
          {/* <Text>{item.is_closed ? "closed" : "open"}</Text> */}
        </View>
      </View>
    </>
  );
}

export default ItemDetails;
