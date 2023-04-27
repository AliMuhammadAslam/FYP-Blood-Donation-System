import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, FlatList, TextInput, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBold, faDroplet } from '@fortawesome/free-solid-svg-icons';
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
  },
  containerTwo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {

  }
});


const RegReceiversList = () => {

  const [data, setData] = useState([
    { key: '1', name: 'Haris', address: 'Darussalam Society Sector 39\nKorangi, Karachi', bloodGroup: 'AB+'},
    { key: '2', name: 'Yunus', address: 'Darussalam Society Sector 39\nKorangi, Karachi', bloodGroup: 'A-' },
    { key: '3', name: 'Javed', address: 'Darussalam Society Sector 39\nKorangi, Karachi', bloodGroup: 'B+' },
    { key: '4', name: 'Samad', address: 'Darussalam Society Sector 39\nKorangi, Karachi', bloodGroup: 'O-' },
    { key: '5', name: 'Jing Xiao', address: 'Darussalam Society Sector 39\nKorangi, Karachi', bloodGroup: 'AB-' }
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
    <View style={{ flexDirection: 'column', borderRadius: 10, borderColor: '#808080', borderWidth: 1, padding: 10, marginBottom: 10, justifyContent: 'flex-end', }}>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'flex-end',
        alignItems: 'center',
        //justifyContent: 'flex-end',
        
        }}>
          <View>
      <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>{item.name}</Text>
      <Text style={{ paddingVertical: 5, color: 'black' }}>{item.address}</Text>
      </View>
      <View style={{position: 'absolute', right: 0}}>
      <FontAwesomeIcon icon={faDroplet} size={55} color="#DE0A1E" />
      <Text style={{color: 'white', position:'absolute', right: 14, marginTop: 14, fontWeight: 'bold'}}>{item.bloodGroup}</Text>
      </View>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        
      </View>
      {/* <View style={{margin:2, marginTop:4, flex: 1, height: 1, backgroundColor: '#8C8C8C'}} /> */}
    </View>
  );



  return (
    <SafeAreaView style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
      {/* <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <FontAwesomeIcon icon={faArrowLeft} size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>{"Blood Banks and Hospitals"}</Text>
            <View style={{ width: 30 }} />
        </View> */}

      <View style={{ flexDirection: 'column', margin: 15, flex: 1, color: 'black' }}>

        <TextInput
          placeholder="Search"
          placeholderTextColor="gray"
          onChangeText={(text) => handleSearch(text)}
          style={{ borderRadius: 10, borderColor: '#808080', borderWidth: 1, padding: 5, marginBottom: 10, color: 'black' }}
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

export default RegReceiversList;