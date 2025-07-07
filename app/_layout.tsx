import React from 'react'
import {Stack} from 'expo-router'
import "../globals.css"

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="(mazi_tabuchi)"
                options={{
                    title: "MyApp",
                    headerShown: false,
                }}
            />;
        </Stack>
    )
}
