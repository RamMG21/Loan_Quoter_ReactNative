import { defaults } from 'chart.js';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View } from 'react-native';
import Form  from './src/components/Form'
import colors from './src/utils/colors'
export default function App() {
  return (
   
    <>
     <StatusBar
       barStyle="light-content"
      />
    <SafeAreaView style={styles.SafeArea}>
      <Text style = {styles.titleApp}>Loan Quoter</Text>
      <Form />
      </SafeAreaView>

      <SafeAreaView>
      <Text>Resultado</Text>
      </SafeAreaView>

      <SafeAreaView>
      <Text>Footer</Text>
      </SafeAreaView>
      
    </>
  )
}

const styles = StyleSheet.create({
  SafeArea: {
    
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    color: '#fff',
    marginTop: 20,
  }
});

