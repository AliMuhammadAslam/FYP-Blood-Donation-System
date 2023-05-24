import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ActivityIndicator, Dimensions } from 'react-native';
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
import { SafeAreaView } from 'react-native-safe-area-context';
//import ChatScreen from './ChatScreen';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app"
import { ScrollView } from 'react-native-gesture-handler';



// const Messages = [
//   {
//     id: '1',
//     userName: 'Jenny Doe',
//     userImg: require('../../assets/eye.png'),
//     messageTime: '4 mins ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '2',
//     userName: 'John Doe',
//     userImg: require('../../assets/eye.png'),
//     messageTime: '2 hours ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '3',
//     userName: 'Ken William',
//     userImg: require('../../assets/eye.png'),
//     messageTime: '1 hours ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '4',
//     userName: 'Selina Paul',
//     userImg: require('../../assets/eye.png'),
//     messageTime: '1 day ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '5',
//     userName: 'Christy Alex',
//     userImg: require('../../assets/eye.png'),
//     messageTime: '2 days ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '6',
//     userName: 'Nhristy Alex',
//     userImg: require('../../assets/eye.png'),
//     messageTime: '2 days ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '7',
//     userName: 'Mhristy Alex',
//     userImg: require('../../assets/eye.png'),
//     messageTime: '2 days ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '8',
//     userName: 'Lhristy Alex',
//     userImg: require('../../assets/eye.png'),
//     messageTime: '2 days ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
//   {
//     id: '9',
//     userName: 'Khristy Alex',
//     userImg: require('../../assets/eye.png'),
//     messageTime: '2 days ago',
//     messageText:
//       'Hey there, this is my test for a post of my social app in React Native.',
//   },
// ];

const MessagesScreen = () => {
  //const {navigation} = route.params;
  const [user, setUser] = React.useState('');
  const [chats, setChats] = React.useState([]);
  const [isLoading, setLoading] = useState(true);
  //const [rafai, setRafai] = React.useState([]);

  React.useEffect(()=> {
    const userCheck = auth().onAuthStateChanged(userExist=>{
      if(userExist)
        setUser(userExist)
      else setUser("")
    })
    return () => {
      userCheck();
      //console.log("LALA");
      //console.log(user.uid);
    }
  },[])

//   const userP = firebase.auth().currentUser;

// if (userP) {
//  //console.log('User: ', userP.uid);
// }

   const [users, setUsers] = useState(null)
  
//   const getUsers = async ()=> {
//   const querySanp = await firestore().collection('users').get();//.where('uid','!=',user.uid).get();
//   //console.log(querySanp);
//   const allUsers = querySanp.docs.map(documentSnapShot=>documentSnapShot.data());
//   //console.log(allUsers);
//   //const allUsers = await firestore().collection('users').where('uid','!=',user.uid).get().then(documentSnapShot => {documentSnapShot.data()});
//   setUsers(allUsers);
// }

const getAllChats = async () => {
  const usersRef = firestore().collection('users');

  usersRef.onSnapshot((querySnapshot) => {
    const data = [];

    querySnapshot.forEach((doc) => {
      const userId = doc.id;
      if (auth().currentUser.uid == userId) {
        setChats(doc.data().chats);
      };
      //console.log("Chats: "+auth().currentUser.chats);
      if (auth().currentUser.uid != userId && doc.data().isOrg == false) {
        for (let i = 0; i < chats.length; i++) {
          //console.log(doc.data().bloodValue);
          if (doc.id == chats[i]) {
            console.log("Chats with: " + doc.data().name);
            data.push({
              id: doc.id,
              name: doc.data().name,
              //address: doc.data().hospitalName,
              bloodGroup: doc.data().bloodValue,
              //chats: doc.data().chats
            });
          }
        };
      }
    });
    //console.log("Users: "+data);
    setUsers(data);
    setLoading(false);
  });
}

useEffect(()=>{
  //getAllChats()
  const usersRef = firestore().collection('users');

  usersRef.onSnapshot((querySnapshot) => {
    const data = [];

    querySnapshot.forEach((doc) => {
      const userId = doc.id;
      if (auth().currentUser.uid == userId) {
        setChats(doc.data().chats);
      };
      //console.log("Chats: "+auth().currentUser.chats);
      if (auth().currentUser.uid != userId && doc.data().isOrg == false) {
        for (let i = 0; i < chats.length; i++) {
          //console.log(doc.data().bloodValue);
          if (doc.id == chats[i]) {
            console.log("Chats with: " + doc.data().name);
            data.push({
              id: doc.id,
              name: doc.data().name,
              //address: doc.data().hospitalName,
              bloodGroup: doc.data().bloodValue,
              //chats: doc.data().chats
            });
          }
        };
      }
    });
    //console.log("Users: "+data);
    setUsers(data);
    setLoading(false);
  });
},[isLoading]);

  const navigation = useNavigation();

  return (
    <>
      <Header title="Messages" isRed={true} />
      {isLoading && users ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
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
                    <UserImg source={item.userImg}/>
                  </UserImgWrapper>
                  <TextSection>
                    <UserInfoText>
                      <UserName style={{color:"black"}}>{item.name}</UserName>
                      <PostTime style={{color:"black"}}>{item.messageTime}</PostTime>
                    </UserInfoText>
                    <MessageText style={{color:"black", textTransform: 'uppercase'}}>{item.bloodGroup}</MessageText>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
          />

        </View>
      </View>
      )}
    </>
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
});