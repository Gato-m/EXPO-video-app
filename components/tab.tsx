import React from 'react'
import {Image, ImageBackground, ImageSourcePropType, StyleSheet, Text} from 'react-native'

type TabProps = {
    name: string
    title: string
    imageSource: ImageSourcePropType
    focusedImageSource: ImageSourcePropType
    focused: boolean
}

const Tab:  = ({name, title, imageSource, focusedImageSource, focused}) => {
    return (
        <ImageBackground
            source={focused ? focusedImageSource : undefined}
            style={[
                styles.background,
                focused && styles.backgroundFocused
            ]}
            imageStyle={{borderRadius: 9999}}
        >
            <Image
                source={focused ? focusedImageSource : imageSource}
                style={styles.icon}
                tintColor="#151312"
            />
            <Text style={styles.text}>{title}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 112,
        minHeight: 56,
        marginTop: 16,
        justifyContent: 'center',
        borderRadius: 9999,
        overflow: 'hidden'
    },
    backgroundFocused: {
        // Add extra styles for focused state if needed
    },
    icon: {
        width: 20,
        height: 20
    },
    text: {
        color: '#151312',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8
    }
})

export default Tab