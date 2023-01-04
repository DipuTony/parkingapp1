import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';

const WebViewIndex = () => {

    const [hideLoader, setHideLoader] = useState(true)

    const url = 'https://reactnative.dev/';

    const hideSpinner = () => {
        console.warn("Page Loaded")
        setHideLoader(false)
    }

    return (
        <>
            {hideLoader &&
                <ActivityIndicator
                    // style={{ position: "absolute" }}
                    size="large"
                    color="#009688"
                />
            }
            <SafeAreaView style={{ flex: 1 }}>
                <WebView
                    onLoad={() => hideSpinner()}
                    source={{ uri: url }} />
            </SafeAreaView>

        </>
    )
}

export default WebViewIndex