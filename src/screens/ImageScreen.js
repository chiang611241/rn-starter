import React from "react";
import { View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/images/forest.jpg")}
      />
    </View>
  );
};

export default ImageScreen;
