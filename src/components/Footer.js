import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors';

export default function Footer(props) {
    

    //De props vamos a obtener calculate
    const { calculate } = props;

  return (
    <View style ={styles.viewFooter}>
        
        <TouchableOpacity style = {styles.buttom} onPress={calculate}>
        <Text style = {styles.text}>CALCULATE</Text>
        </TouchableOpacity>
        
     
    </View>
  )
}

const styles = StyleSheet.create({


    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {

        fontWeight: "bold",
        fontSize: 18,
        color: '#fff',
        textAlign: "center",
    },

    buttom: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: '75%',
        textAlign: 'center',
    },

});