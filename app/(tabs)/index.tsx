import { ScrollView, View, Image } from 'react-native'
import React from 'react'
import { images } from '../constants/images'
import { icons } from '../constants/icons'
import SearchBar from '../components/homescreen/SearcBar'

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full h-full" />

      <ScrollView className="flex-1 px-5 showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}">
        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-5" />

        <View className="flex-1 mt-5">
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  )
}