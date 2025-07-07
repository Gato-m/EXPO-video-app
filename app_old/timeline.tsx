import {Image, Text, View} from "react-native";
import React from "react";

export default function TimeLine() {
    return (
        <View className="flex-1 flex-col items-center justify-center bg-blue-100 -mt-10">
            <Image className="w-28 h-28 mb-5"
                   source={require("../assets/images/react-logo.png")}
                   accessibilityLabel="Lietotnes logo"
            />
            <Text className={"mb-2 text-2xl color-fuchsia-700"}>JavaScript Mastery</Text>
            <Text className={"text-2xl text-center px-10 text-fuchsia-700 mb-3 font-bold"}>React Native Course for
                Beginners in 2025 | Build a Full Stack React Native App
            </Text>
            <Text>Add NativeWind Styling 27:01</Text>
            <Text>Routes and navigation 35:59</Text>
            <Text>TabBar 46:47</Text>


        </View>
    );
}
