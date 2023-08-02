import React from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import HomePage from "./components/HomePage";
import {COLOR} from "./components/utils/CONSTANTS";
import {useFonts} from 'expo-font';


export default function App() {
    const [fontsLoaded] = useFonts({
        'MontserratLight': require('./assets/fonts/static/Montserrat-Light.ttf'),
        'MontserratRegular': require('./assets/fonts/static/Montserrat-Regular.ttf'),
        'MontserratMedium': require('./assets/fonts/static/Montserrat-Medium.ttf'),
        'MontserratSemiBold': require('./assets/fonts/static/Montserrat-SemiBold.ttf'),
        'MontserratBold': require('./assets/fonts/static/Montserrat-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <HomePage/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },

});
