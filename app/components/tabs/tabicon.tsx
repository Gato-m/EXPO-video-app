import { Text, Image, ImageBackground } from 'react-native'
import { images } from '../../constants/images'
import React from 'react'

const TabIcon = ({ icon, title }: { icon: any; title: string }) => {
  return (
    <ImageBackground
      source={images.highlight}
      className="flex flex-row flex-1 w-full min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icon} tintColor="#151312" className="size-5" />
      <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
    </ImageBackground>
  )
}

export default TabIcon
