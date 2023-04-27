import React from "react";
import { StyleSheet, View, Text } from "react-native";

const OrganisationInfoPage = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: 'black'
    }
});

export default OrganisationInfoPage;