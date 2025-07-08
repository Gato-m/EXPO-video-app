import { View, Text, Image, ImageBackground } from 'react-native'
import { images } from '../../constants/images'
import React from 'react'

const TabIcon = ({ icon, title, focused }: { icon: any; title: string; focused: boolean }) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row flex-1 w-full min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
      </ImageBackground>
    )
  } else {
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={icon} tintColor="#A8B5DB" className="size-5" />
      </View>
    )
  }
}

export default TabIcon
