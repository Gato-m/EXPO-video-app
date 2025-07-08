import { View, Text, Image, ImageBackground } from 'react-native'
import { images } from '../../constants/images'
import React from 'react'

const TabIcon = ({ icon, title, focused }: { icon: any; title: string; focused: boolean }) => {
  const containerBase = 'w-full items-center justify-center mt-4'

  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className={`${containerBase} min-w-[98px] min-h-16 rounded-full overflow-hidden px-3 py-2`}
        resizeMode="stretch"
      >
        <View className="flex-col items-center justify-center">
          <Image source={icon} tintColor="#151312" className="size-5 mb-0" />
          <Text className="text-secondary text-sm font-semibold">{title}</Text>
        </View>
      </ImageBackground>
    )
  } else {
    return (
      <View className={`${containerBase} min-w-[98px] px-3 py-2`}>
        <View className="flex-col items-center justify-center">
          <Image source={icon} tintColor="#A8B5DB" className="size-5 mb-0" />
          <Text className="text-secondary text-xs">{title}</Text>
        </View>
      </View>
    )
  }
}

export default TabIcon
