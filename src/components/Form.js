import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../utils/colors';

export default function Form() {
    return(
        <View style = {StyleSheet.viewForm}>
        <View style = {StyleSheet.viewInputs}>
            <TextInput placeholder='Amount'/>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: -90,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
    },
    viewInputs: {
        //flexDirection: 'row',
    }
});