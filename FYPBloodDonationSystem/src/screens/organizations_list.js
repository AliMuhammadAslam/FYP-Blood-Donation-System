import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, FlatList, TextInput, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faBold, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

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


const OrganizationsList = () => {

  const navigation = useNavigation();

  //const [requests, setRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const requestsRef = firestore().collection('users');
    requestsRef.onSnapshot((querySnapshot) => {
      const data = [];
      flag = false;
      querySnapshot.forEach((doc) => {
        if(doc.data().isOrg){

          const orgId = doc.id;

          const associationsRef = firestore().collection('OrganizationAssociations');
          associationsRef.onSnapshot((querySnapshot) => {

            querySnapshot.forEach((doc) => {

              if (orgId == doc.data().orgId && auth().currentUser.uid == doc.data().userId) {
                if(doc.data().status == "confirmed" || doc.data().status == "requested"){
                  flag = true;
                  //console.log(flag);
                  //console.log(doc.data().orgName);
                }
              }

            });

            if(flag == false){
              //console.log(flag);
              //console.log(doc.data().name);
              data.push({
                id: doc.id,
                name: doc.data().name,
                address: doc.data().address,
                description: doc.data().description
              });
  
            }else{
              flag = false;
            }

          });
            
        }
      });
      setFilteredData(data);
    });
  }, []);

  /*useEffect(() => {
    setFilteredData(data);
  }, [data]);*/

  const renderItem = ({ item }) => {

    if (searchQuery && !item.name.includes(searchQuery) && !item.address.includes(searchQuery)) {
        return null;
    }

    return (
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
      <Text style={{ paddingVertical: 15, color: 'black' }}>{item.address}</Text>
      </View>
      </View>
        
      <TouchableOpacity onPress={ () => navigation.navigate('Organization Info', {docId: item.id})} style={{alignItems: 'center',backgroundColor: '#DE0A1E', borderRadius: 10, paddingVertical: 8}}>
        <Text style={{fontSize: 15, color: 'white'}}>{'Register'}</Text>
      </TouchableOpacity>
      
      {/* <View style={{margin:2, marginTop:4, flex: 1, height: 1, backgroundColor: '#8C8C8C'}} /> */}
    </View>
    );

  };



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
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{ borderRadius: 10, borderColor: '#808080', borderWidth: 1, padding: 5, marginBottom: 10, color: 'black' }}
        />

        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
          extraData={searchQuery}
        />

      </View>

    </SafeAreaView>
  );

};

export default OrganizationsList;