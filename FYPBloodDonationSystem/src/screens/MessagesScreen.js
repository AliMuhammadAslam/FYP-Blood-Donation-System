import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
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
// import ChatScreen from './ChatScreen';
import {useNavigation } from '@react-navigation/native';



const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../assets/eye.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../assets/eye.png'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../assets/eye.png'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../assets/eye.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../assets/eye.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Nhristy Alex',
    userImg: require('../../assets/eye.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'Mhristy Alex',
    userImg: require('../../assets/eye.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '8',
    userName: 'Lhristy Alex',
    userImg: require('../../assets/eye.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '9',
    userName: 'Khristy Alex',
    userImg: require('../../assets/eye.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const MessagesScreen = () => {
  // const {navigation} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Messages" isRed={true} />
      <View>
        <View style={{ marginBottom: 100 }}>
          <FlatList
            data={Messages}
            keyExtractor={item => item.id}
            scrollEnabled={true}
            renderItem={({ item }) => (
              <Card onPress={() => navigation.navigate('ChatScreen', {userName: item.userName})}>

                <UserInfo>
                  <UserImgWrapper>
                    <UserImg source={item.userImg} />
                  </UserImgWrapper>
                  <TextSection>
                    <UserInfoText>
                      <UserName>{item.userName}</UserName>
                      <PostTime>{item.messageTime}</PostTime>
                    </UserInfoText>
                    <MessageText>{item.messageText}</MessageText>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
          />

        </View>
      </View>
    </SafeAreaView>


    // <SafeAreaView >
    //   <Header title="Messages" isRed={true} />
    //   <View>
    //   <Container>
    //     <FlatList
    //       data={Messages}
    //       keyExtractor={item => item.id}
    //       renderItem={({ item }) => (
    //         <Card onPress={() => navigation.navigate('ChatScreen', { userName: item.userName })}>

    //           <UserInfo>
    //             <UserImgWrapper>
    //               <UserImg source={item.userImg} />
    //             </UserImgWrapper>
    //             <TextSection>
    //               <UserInfoText>
    //                 <UserName>{item.userName}</UserName>
    //                 <PostTime>{item.messageTime}</PostTime>
    //               </UserInfoText>
    //               <MessageText>{item.messageText}</MessageText>
    //             </TextSection>
    //           </UserInfo>
    //         </Card>
    //       )}
    //     />
    //   </Container>
    //   </View>
    // </SafeAreaView>

  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 30,
  },
});