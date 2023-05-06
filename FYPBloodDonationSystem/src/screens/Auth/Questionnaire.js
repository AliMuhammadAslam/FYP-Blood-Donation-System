import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const RadioButton = ({text}) => {

    const options = ['Yes', 'No'];
    const [selectedOption, setSelectedOption] = useState();
    
    const handleSelectOption = (index) => {
        setSelectedOption(index);
    };
  

  return (
    <View style={{ flexDirection: 'column', borderRadius: 10, borderColor: '#808080', borderWidth:1, padding: 10, marginBottom: 10}}>
    
      <Text style={{fontWeight: '400', color: 'black'}}>
        {text}
      </Text>
      <View style={{ flexDirection: 'row' }}>
      {options.map((option, index) => {
        return (
          <TouchableOpacity key={index} style={styles.radioButton} onPress={() => setSelectedOption(index)}>
            {selectedOption === index ? (
            <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center', color:'black' }}>
                <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: 'black' }} />
            </View>
            ) : (
            <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center' }} />
            )}
           <Text style={styles.radioButtonText}>{option}</Text>
          </TouchableOpacity>
        );
      })}
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DE0A1E',
    height: 60,
    paddingHorizontal: 10,
  },
  backButton: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioButtonText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    marginRight: 10
  },
});

const Questionnaire = () => {

    return (
    <SafeAreaView style={{justifyContent: 'center', alignContent: 'center'}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>{"Questionnaire"}</Text>
        <View style={{ width: 30 }} />
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'column', margin:15}}>
          <Text style={{fontWeight: 'bold', paddingBottom: 15, color: 'black'}}>
              {"Kindly fill up the following Questionnaire to be able to donate and receive blood."}
          </Text>
          <RadioButton text={"Do you have Diabetes ?"} />
          <RadioButton text={"Have you ever had problems with your heart or lungs ?"} />
          <RadioButton text={"Have you had COVID-19 in the last 30 days ?"} />
          <RadioButton text={"Have you ever had a positive test for the HIV / AIDS virus ?"} />
          <RadioButton text={"Have you ever had cancer ?"} />
          <RadioButton text={"In the last 3 months have you had a vaccination?"} />
          
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  };
  
export default Questionnaire;

