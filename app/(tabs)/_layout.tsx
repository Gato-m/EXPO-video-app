import React from 'react'
import { Tabs } from 'expo-router'
import TabIcon from '../components/tabs/tabicon'
import { icons } from '../constants/icons'

export default function _Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.home} title="Home" />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.search} title="Search" />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.save} title="Saved" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.person} title="Profile" />,
        }}
      />
    </Tabs>
  )
}
