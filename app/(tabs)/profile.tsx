import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../globalStyles'

export default function Profile() {
  return (
    <View style={globalStyles.tabscreen}>
      <Text style={globalStyles.tabscreenText}>Profile</Text>
    </View>
  )
}
