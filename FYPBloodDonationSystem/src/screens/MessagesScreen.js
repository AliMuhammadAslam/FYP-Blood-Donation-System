import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ActivityIndicator, Dimensions, ScrollView, RefreshControl, SafeAreaView, Image } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../../src/screens/MessageStyles';
import Header from "../components/Header";
//import ChatScreen from './ChatScreen';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app";


const MessagesScreen = () => {
  //const {navigation} = route.params;
  const [user, setUser] = React.useState('');
  const [chats, setChats] = React.useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isChats, setIsChats] = useState(true);
  const [count, setCount] = useState(0);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // count=count+1;
    setCount(count+1);
    console.log("refreshCount: "+count);
    setTimeout(() => {
      //getAllChats();
     
      setRefreshing(false);
    }, 2000);
  }, []);

  

  React.useEffect(()=> {
    const userCheck = auth().onAuthStateChanged(userExist=>{
      if(userExist)
        setUser(userExist)
      else setUser("")
    })
    return () => {
      userCheck();

    }
  });

   const [users, setUsers] = useState(null)

useEffect(()=>{
  //getAllChats();
  console.log("effectCount: "+count);
  setTimeout(() => {
    
  }, 2000);
  const usersRef = firestore().collection('users');

  const unsubscribe = usersRef.onSnapshot((querySnapshot) => {
    const data = [];

    querySnapshot.forEach((doc) => {
      const userId = doc.id;
      console.log("userId: "+doc.id);
      if (auth().currentUser.uid == userId) {
        setChats(doc.data().chats);
      };
      //console.log("Chats: "+auth().currentUser.chats);
      if (auth().currentUser.uid != userId && doc.data().isOrg == false) {
        if ( chats === undefined || chats.length == 0){
          console.log('no chats '+chats);
          setIsChats(false);
        }
          else{
        for (let i = 0; i < chats?.length; i++) {
          //setIsChats(true);
          //console.log(doc.data().image);
          if (doc.id == chats[i]) {
            console.log("Chats with: " + doc.data().name);
            data.push({
              id: doc.id,
              name: doc.data().name,
              //address: doc.data().hospitalName,
              bloodGroup: doc.data().bloodValue,
              image: String(doc.data().image),
              //chats: doc.data().chats
            });
          }
        };}
      }
    });
    //console.log("Users: "+data);
    setUsers(data);
    setLoading(false);
  });

  return () => {
    // Unsubscribe from the listener when the component is unmounted or when the user logs out
    unsubscribe();
  };

},[isLoading, count]);

  const navigation = useNavigation();

  return (
    <SafeAreaView >
    
      <Header title="Messages" isRed={true} navigation={navigation}/>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        >
          
        <Text></Text>
      </ScrollView>
      {isLoading && users ? (
        <ActivityIndicator size="large" color="black" />
      ) : chats===undefined || chats?.length==0 ? (
        <View style={{alignItems:'center', justifyContent:'center', display: 'flex'}}>
          <Text style={{color:"black", top:"40%", fontSize:20, color:'#5A5A5A'}}>No messages to display</Text>
        </View>
      ) : users && (
      <View>
        <View style={{ marginBottom: 100 }}>
          <FlatList
          
            data={users}
            keyExtractor={item => item.id}
            scrollEnabled={true}
            renderItem={({ item }) => (
              <Card 
              onPress={() => navigation.navigate("ChatScreen", {name: item.name, id:item.id})}
              >

                <UserInfo>
                  <UserImgWrapper>
                    {/* <UserImg style={styles.avatar} source={ item?.image}/> */}
                    <Image
                source={{ uri: item.image }}
                style={styles.avatar}
              />
                  </UserImgWrapper>
                  <TextSection>
                    <UserInfoText>
                      <UserName style={{color:"black"}}>{item?.name}</UserName>
                      <PostTime style={{color:"black"}}>{item?.messageTime}</PostTime>
                    </UserInfoText>
                    <MessageText style={{color:"black", textTransform: 'uppercase'}}>{item?.bloodGroup}</MessageText>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
          />

        </View>
      </View>
      )}
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // alignItems: 'center', 
    // justifyContent: 'center',
    // marginTop: 30,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#DE0A1E',
    alignItems: 'center',
    justifyContent: 'center',
    height: 10, 
    marginBottom: 20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 40,
    left: '50%',
    //marginRight: 20
  },
});