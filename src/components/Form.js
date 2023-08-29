import React from 'react';
import { StyleSheet, Text, TextInput, View, YellowBox} from 'react-native';
import colors from '../utils/colors';
import Picker from 'react-native-picker-select';
import RNPickerSelect from 'react-native-picker-select';


export default function Form(props) {


    const {setCapital ,setRate, setMonths} = props;


    return(
        <View style = {styles.viewForm}>
        <View style = {styles.viewInputs}>
            <TextInput placeholder="Amount"
            keyboardType='numeric'
            style ={styles.input}
            onChange = {(e) => setCapital(e.nativeEvent.text)
                }
                />
               
    
            <TextInput 
            placeholder="Rate %"
            keyboardType='numeric'
            style= {[styles.input, styles.inputRate]}
            onChange = {(e) => setRate(e.nativeEvent.text)}
            />



        </View> 
            <TextInput placeholder='# Months'
            keyboardType='numeric' 
            style= {[styles.input, styles.SelectItem]}
            onChange = {(e) => setMonths(e.nativeEvent.text)} />
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
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    },

    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000", 
        paddingHorizontal: 20,
    },

    inputRate: {
        width: '40%',
        marginLeft: 5,
    },

    SelectItem: {
        width: '104%',
        marginTop: 10,
    }
});