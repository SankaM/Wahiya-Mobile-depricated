import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OrderScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: "Montserrat-SemiBold", }}>Not Provied in Designs Yet</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
});

export default OrderScreen;