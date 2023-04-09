import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, FlatList, TextInput} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBold } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    }
  });


const organizations_list = () => {

    const [data, setData] = useState([
        { key: '1', name: 'Indus Hospital', address: 'Darussalam Society Sector 39\nKorangi, Karachi' },
        { key: '2', name: 'Agha Khan Hospital', address: 'Darussalam Society Sector 39\nKorangi, Karachi' },
        { key: '3', name: 'National Hospital', address: 'Darussalam Society Sector 39\nKorangi, Karachi' },
        { key: '4', name: 'Blood Bank PIC', address: 'Darussalam Society Sector 39\nKorangi, Karachi' },
        { key: '5', name: 'Jinnah Hospital', address: 'Darussalam Society Sector 39\nKorangi, Karachi' }
      ]);

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (text) => {
        const filtered = data.filter((item) => {
        return item.name.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filtered);
    };
    
      const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'column', borderRadius: 10, borderColor: '#808080', borderWidth:1, padding: 10, marginBottom: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>{item.name}</Text>
          <Text style={{paddingVertical: 5}}>{item.address}</Text>
          <TouchableOpacity style={{alignItems: 'center',backgroundColor: '#DE0A1E', borderRadius: 10, paddingVertical: 8}}>
            <Text style={{fontSize: 15, color: 'white'}}>{'Register'}</Text>
          </TouchableOpacity>
        </View>
      );

      

    return (
        <SafeAreaView style={{justifyContent: 'center', alignContent: 'center', flex: 1}}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>{"Blood Banks and Hospitals"}</Text>
            <View style={{ width: 30 }} />
        </View>
        
        <View style={{ flexDirection: 'column', margin:15, flex: 1}}>

            <TextInput
                placeholder="Search"
                onChangeText={(text) => handleSearch(text)}
                style={{borderRadius: 10, borderColor: '#808080', borderWidth:1, padding: 5, marginBottom: 10}}
            />

            <FlatList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                scrollEnabled={true}
            />
            
        </View>
        
        </SafeAreaView>
        );

};

export default organizations_list;