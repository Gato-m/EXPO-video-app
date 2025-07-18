import { Image, View, TextInput } from 'react-native'
import React from 'react'
import { icons } from '../../constants/icons'

interface Props {
    placeholder: string
    onPress: () => void //move to the search screen
}

const SearchBar = ({ placeholder, onPress }: Props) => {
    return (
        <View className="flex-row items-center px-5 py-4 bg-dark-200">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />

            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                placeholderTextColor="#ab85bb"
                className="flex-1 ml-2 text-white"
                value=""
                onChangeText={(text) => { }}
            />
        </View>
    )
}

export default SearchBar