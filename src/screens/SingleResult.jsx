import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import yelp from "../api/yelp";
import { ScrollView } from "react-native";
function SingleResult(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  const { id } = props.route.params;
  const getItem = async () => {
    try {
      const response = await yelp.get(`/${id}`);

      setData(response.data);

      console.log(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong !");
    }
  };

  useEffect(() => {
    getItem();
  }, []);
  return (
    <>
      <View className="p-2">
        <Text className="p-3 text-center font-bold text-[23px] shadow-lg">
          {data.name}
        </Text>

        <FlatList
          data={data?.photos}
          horizontal={true}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image
              key={item}
              className="h-24 w-44 mb-2 mr-2 rounded-md"
              source={{ uri: item }}
            />
          )}
        />
        <View className="">
          <Text>
            <Text className="font-bold">Phone Number</Text> : {data.phone}
          </Text>
          <Text>
            <Text className="font-bold">Reviews</Text> : {data.review_count}
          </Text>
          <Text>
            <Text className="font-bold">Rating</Text> : {data.rating}{" "}
          </Text>
        </View>
      </View>
    </>
  );
}

export default SingleResult;
