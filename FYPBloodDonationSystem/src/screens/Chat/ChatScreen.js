import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send, InputToolbar} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from "../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowDown, faArrowLeft, faBars, faBold, faCalendar, faDroplet, faGear, faHome, faMessage, faPaperPlane, faPerson, faPlusSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth, { firebase } from '@react-native-firebase/auth';
//import firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';
import { serverTimestamp } from "@react-native-firebase/firestore";
import { useNavigation } from '@react-navigation/native';

const ChatScreen = ({route}) => {

  const {name, id} = route.params;
  //userName = "ALI";
  console.log("Name: "+name);
  const [messages, setMessages] = useState([]);
  const user = firebase.auth().currentUser;

  const navigation = useNavigation();

  const getAllMessages = async () => {
    const docid = id > user.uid ? user.uid+"-"+id : id+"-"+user.uid   
    const msgResponse = await firestore().collection('Chats')
    .doc(docid)
    .collection('messages')
    .orderBy('createdAt', "desc")
    .get()
    const allTheMsgs = msgResponse.docs.map(docSanp => {
      return {
        ...docSanp.data(),
        createdAt:docSanp.data().createdAt.toDate()
      }
    })
    setMessages(allTheMsgs)
  }

  useEffect(() => {
    getAllMessages()
  },[]);


  // const onSend = useCallback((messages = []) => {
  //   setMessages((previousMessages) =>
  //     GiftedChat.append(previousMessages, messages),
  //   );
  // }, []);

  const onSend = (msgArray) => {
    const msg = msgArray[0]
    const usermsg = {
      ...msg,
      sentBy: user.uid,
      sentTo: id,
      createdAt: new Date()
    }
    setMessages(previousMessages => GiftedChat.append(previousMessages, usermsg))
    const chatid = id > user.uid ? user.uid+ "-" +id : id+ "-" +user.uid
    
    firestore().collection('Chats')
    .doc(chatid)
    .collection('messages')
    .add({...usermsg, //createdAt:serverTimestamp()
    })

    const receiveRef = firestore().collection('users').doc(id);
    console.log("receiver: "+receiveRef);
    // Atomically add a new region to the "regions" array field.
    receiveRef.set({
      'chats': firestore.FieldValue.arrayUnion(auth().currentUser.uid),
    }, { merge: true });
    //   await updateDoc(firestore().collection('Chats').doc(), {
    //     regions: arrayUnion("greater_virginia")
    // });

    const chatRef = firestore().collection('users').doc(auth().currentUser.uid);
    console.log("sender: "+chatRef);
    // Atomically add a new region to the "regions" array field.
    chatRef.set({
      'chats': firestore.FieldValue.arrayUnion(id),
    }, { merge: true });
  }


  const renderSend = (props) => {
    return (
      <Send style={{color:"#000"}} {...props}>
        <View style={{marginBottom: 15, marginRight: 20}}>
          {/* <MaterialCommunityIcons
            name="send"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          /> */}
          <FontAwesomeIcon icon={faPaperPlane} size={20} color={'#DE0A1E'} marginBottom={30} marginRight={30} />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            //backgroundColor: '#2e64e5',
            backgroundColor: '#DE0A1E',
          },
          left: {
            backgroundColor: '#eaeaea',
            marginLeft: -40,
            //left: '0%',
          }
        }}
        textProps={{
          style: {
            color: props.position === 'left' ? '#000' : '#fff',
          },
        }}
        textStyle={{
          right: {
            color: '#000000',
          },
          left:{
            color: '#ffffff'
          }
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesomeIcon icon={faArrowDown} size={22} color={'#333'} />
    );
  }

  renderInputToolbar = (props) => {
    // Here you will return your custom InputToolbar.js file you copied before and include with your stylings, edits.
    
    return (
         <InputToolbar {...props} textInputStyle={{ color: "#000000" }} />
    );
}

  return (
    <SafeAreaView style={
      {//styles.container
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        
      }}>
        {/* <ScrollView> */}
       <Header title={name} isRed={true} navigation={navigation}/> 
        
          <GiftedChat
          
            messages={messages}
            onSend={text => onSend(text)}
            user={{
              _id: user.uid,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
            renderInputToolbar={this.renderInputToolbar} 
            //textProps={{ style: { color: 'red' } }}
          />

         {/* </ScrollView> */}
     </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});