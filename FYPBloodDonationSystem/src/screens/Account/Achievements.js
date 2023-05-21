import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, Image } from 'react-native';
import Header from "../../components/Header";




function achievements() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    
    
    
    return (
        <SafeAreaView style={[
        {//styles.container
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
        backgroundStyle
        ]}>
    
        
    
        <Header title="Achievements" isRed={true} />
        <View
    
            style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
    
            <Image style={styles.image}
                resizeMode={'contain'}
                source={require('../../assets/medals.jpg')} />  
    
        </View>
    
        
        <Text style={{marginLeft:40, marginRight:40, marginTop:10, fontSize:20}}>Tip: You must donate 10 times for a gold medal.</Text>
        
        
      <View style={{ flexDirection: 'row', margin:15, flex: 1, justifyContent: 'space-between'}}
        //{styles.listContainer}
        >
      <FlatList
        // ListHeaderComponent={"Category"}
        data={[
          {category: 'Devin', count: 23},
          {category: 'Dan  ', count: 23},
          {category: 'Domin', count: 23},
          {category: 'Jack ', count: 23},
          {category: 'James', count: 23},
        ]}
        renderItem={({item}) => <Text style={{flexDirection: 'row', margin:8, flex: 1, justifyContent: 'space-between'}}
        ><Text style={styles.item}>{item.category}</Text><Text style={styles.item}>{"          "}{item.count}</Text></Text>}
      />
    </View>
    
            
            <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Verify</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 30,
    marginBottom: 25,
    marginTop: 25,
  },
  footer: {
    margin: 10,
  },
  button: {
    width: 300,
    height: 40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    backgroundColor: "#DE0A1E",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    color: "white",
  },
    image: {
        height: 250,
        width: 250,
    },
    listContainer: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#F5FCFF',
        // borderColor: 'black',
        width : 250,
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        marginRight: 40,
        //letterSpacing: 5,
      },
});

export default achievements;
            
