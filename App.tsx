import { defaults } from 'chart.js';
import React from 'react';
import {SafeAreaView, 
  StyleSheet, 
  Text, 
  StatusBar,
  View, 
  LogBox,
  Button 
} from 'react-native';
import Form  from './src/components/Form'
import Footer  from './src/components/Footer'
import colors from './src/utils/colors'
import {useState} from 'react';



export default function App() {

  //Aqui vamos a guardar dos elementos uno que es la variable donde se guarda el estado
  // y la funcion que actuializa el estado.
  //Por norma general para la funcion se empieza con 'set'
  const [capital, setCapital] = useState(null);
  const [rate, setRate] = useState(null);
  const [months, setMonths] = useState(null);

  const calculate = () => {
    console.log("capital ->", capital)
    console.log("rate ->", rate)
    console.log("months ->", months)
  }

  return (
   
    <>
     <StatusBar
       barStyle="light-content"
      />

      
    <SafeAreaView style={styles.SafeArea}>
     <View style = {styles.backgraound}/>
      <Text style = {styles.titleApp}>Loan Quoter</Text>
      <Form 
       setCapital = {setCapital} 
       setRate = {setRate} 
       setMonths = {setMonths}
      />
    </SafeAreaView>

     
      <View>
       <Text>Resultado</Text>
       </View>

       <Footer calculate = {calculate} />
       
    </>
  )
}

const styles = StyleSheet.create({
  SafeArea: {
    backgroundColor: '#f00',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    color: '#fff',
    marginTop: 40,
  },

  backgraound: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },

  
  

});

