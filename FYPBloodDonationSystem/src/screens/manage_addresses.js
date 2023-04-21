import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';

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
});


const manageAddresses = () => {

    return (
    <SafeAreaView style={{justifyContent: 'center', alignContent: 'center', backgroundColor: "white", flex: 1}}>
      <Header title="Manage Address" isRed={true} />
      <ScrollView>
        <View style={{ flexDirection: 'column', margin:25}}>
            <Text style={{fontWeight: 'bold', paddingBottom: 20, color: 'black', fontSize: 16}}>
              {"Add multiple locations where you can travel to donate blood."}
            </Text> 

            <View style={{flexDirection:'row', borderRadius: 10, borderColor:'black', borderWidth: 1, padding: 10, marginBottom: 20, justifyContent:'space-between', alignItems:'center'}}>

                <Text style={{color:'black'}}>
                    Gulshan, Karachi
                </Text>

                <View style={{borderRadius: 10, backgroundColor:'#DE0A1E', borderWidth: 1, padding: 5, width: 65}}>

                    <Text style={{color:'white', textAlign:'center'}}>
                        Home
                    </Text>

                </View>                

            </View>

            <View style={{flexDirection:'row', borderRadius: 10, borderColor:'black', borderWidth: 1, padding: 10, marginBottom: 20, justifyContent:'space-between', alignItems:'center'}}>

                <Text style={{color:'black'}}>
                    DHA - Phase 4
                </Text>

                <View style={{borderRadius: 10, backgroundColor:'#DE0A1E', borderWidth: 1, padding: 5, width: 65}}>

                    <Text style={{color:'white', textAlign:'center'}}>
                        Work
                    </Text>

                </View>                

            </View>

            <TouchableOpacity style={{alignSelf:'center'}}>
                <View style={{flexDirection:'row', borderRadius: 10, backgroundColor:'#DE0A1E', borderWidth: 1, padding: 5, justifyContent:'center', width: 100}}>

                    <Text style={{color:'white'}}>
                        Add more
                    </Text>

                    <FontAwesomeIcon icon={faPlus} size={20} color='white' />
                    

                </View>
            </TouchableOpacity>
          
          
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  };
  
export default manageAddresses;