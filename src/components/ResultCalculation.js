import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultCalculation(props) {
    const {capital, rate, months, total, errorMessage} = props;
  return (
    <View style = {styles.content}>
        {total && <Text>Result Total = </Text>}
        <View>
            <Text style = {styles.error}> {errorMessage}</Text>
        </View>
      <Text>Result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    
    content:{

        marginTop: 100,
        marginHorizontal: 50,

    },

    error: {
        textAlign: "center",
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    }
})