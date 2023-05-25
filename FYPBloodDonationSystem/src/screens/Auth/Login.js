import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Login = ({navigation}) => {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(true);
  const userLogin = () => {

    if (email.length == 0 || password.length == 0) {

      Alert.alert('Please fill in the required fields')

    }
    else {

      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Signed in!');

          const usersRef = firestore().collection('users').doc(auth().currentUser.uid);

          usersRef.get().then((doc) => {
            if (doc.exists) {
              const id = auth().currentUser.uid;
              if (doc.data().isOrg) {
                navigation.navigate('TabNavigationOrganizations');
              }
              else {
                console.log(id + " " + doc.data().name);
                navigation.navigate('TabNavigation');
              }
            } else {
              console.log('Document doesnot exist.');
            }
          }).catch((error) => {
            console.log('Error getting document:', error);
          });



        })
        .catch(error => {

          if (error.code === 'auth/user-not-found') {
            console.log('User not found!');
          }

          if (error.code === 'auth/wrong-password') {
            console.log('That password is invalid!');
          }

          Alert.alert(error.code);

          console.error(error);
        });

    }

  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email Address"
        inputMode='email'
        keyboardType='email-address'
        placeholderTextColor="#808080"
        mode='outlined'
        outlineStyle={{
          borderRadius: 10,
          borderColor: '#969696'
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={isVisible}
        right={
          <TextInput.Icon
            icon={isVisible ? require('../../../assets/eye-off.png') : require('../../../assets/eye.png')}
            iconColor='#969696'
            onPress={() =>
              setIsVisible(!isVisible)
            }
          />
        }
        placeholder="Password"
        placeholderTextColor="#808080"
        mode='outlined'
        outlineStyle={{
          borderRadius: 10,
          borderColor: '#969696'
        }}
      />

      <TouchableOpacity style={styles.button} onPress={userLogin}>
        <Text style={styles.btnText}>Log In</Text>

      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={{ color: '#353535' }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('SignupFirst')
        }}>
          <Text style={{ color: "#DE0A1E" }}>Signup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={{ color: '#353535' }}>Forgot your password?</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('ForgotPassword')
        }}>
          <Text style={{ color: "#DE0A1E" }}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'white'
  },
  header: {
    fontSize: 30,
    marginBottom: 30,
    color: "black",
  },
  input: {
    width: '100%',
    marginBottom: 12,
    backgroundColor: "white",
  },
  button: {
    width: '100%',
    height: 40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    backgroundColor: "#DE0A1E",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    color: "white",
  },
  footer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Login;