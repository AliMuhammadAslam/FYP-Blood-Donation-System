import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faCalendarCheck, faLocation, faArrowRight, faDroplet, faStarOfLife, faHandHoldingHeart, faArrowRotateLeft, faRightFromBracket, faHospital, faHospitalAlt, faHospitalUser, faHospitalWide, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Switch, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const OverlapView = () => {
  return <View style={styles.overlay}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faDroplet} size={20} color='#DE0A1E' />
        <Text style={{ color: 'black', fontSize: 12 }}>Vital Impact</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FontAwesomeIcon icon={faStarOfLife} size={20} color='#DE0A1E' />
        <Text style={{ color: 'black', fontSize: 12 }}>5 lives Saved</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#DE0A1E', fontWeight: 'bold', fontSize: 15 }}>13 March</Text>
        <Text style={{ color: 'black', fontSize: 12 }}>Next Donation</Text>
      </View>
    </View>
  </View>;
};


const AccountScreen = ({ navigation }) => {



  const [userDetails, setUserDetails] = useState();

  const [isEnabled, setIsEnabled] = useState(true);


  useEffect(() => {

    const UserRef = firestore().collection('users').doc(auth().currentUser.uid);

    UserRef.get().then((doc) => {
      if (doc.exists) {

        setUserDetails(doc.data());
      } else {
        console.log('Document doesnot exist.');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });

  }, [auth().currentUser.uid]);




  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const userLogout = async () => {

    try {

      await auth().signOut();
      Alert.alert("You have been successfully logged out.");
      navigation.navigate('Authentication');

    }
    catch (error) {

      console.log(error.code);
      Alert.alert(error.code);

    }



  }



  return (
    <SafeAreaView style={styles.container}>

      <View>

        {userDetails ?

          <><View style={styles.profileContainer}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: userDetails.image }}
                style={styles.avatar}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{userDetails.name}</Text>
              <Text style={styles.subtitle}>{userDetails.mobileNumber}</Text>

            </View>
            <View style={styles.starContainer}>
              <FontAwesomeIcon icon={faStar} size={15} color="#ffcc00" />
              <FontAwesomeIcon icon={faStar} size={15} color="#ffcc00" />
              <FontAwesomeIcon icon={faStar} size={15} color="#ffcc00" />
              <FontAwesomeIcon icon={faStar} size={15} color="#ffcc00" />
              <FontAwesomeIcon icon={faStar} size={15} color="#c7c7c7" />
            </View>
          </View>
            <OverlapView />
            <View style={styles.settingsContainer}>
              <View style={styles.rowContainer}>
                <View style={{ flexDirection: 'row', marginRight: 100 }}>
                  <View style={styles.iconContainer}>
                    <FontAwesomeIcon icon={faCalendarCheck} size={20} color="#DE0A1E" />
                  </View>
                  <Text style={styles.rowText}>Available to Donate</Text>
                </View>
                <Switch
                  trackColor={{ false: "#767577", true: "#DE0A1E" }}
                  thumbColor='white'
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <TouchableOpacity onPress={() => {
                navigation.navigate('EditProfile')
              }}>
                <View style={styles.rowContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.iconContainer}>
                      <FontAwesomeIcon icon={faUserEdit} size={20} color="#DE0A1E" />
                    </View>
                    <Text style={styles.rowText}>Edit Profile</Text>
                  </View>
                  <FontAwesomeIcon icon={faArrowRight} size={20} color="black" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                navigation.navigate('History', {
                  title: 'Donation History'
                })
              }}>
                <View style={styles.rowContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.iconContainer}>
                      <FontAwesomeIcon icon={faHandHoldingHeart} size={20} color="#DE0A1E" />
                    </View>
                    <Text style={styles.rowText}>View Donation History</Text>
                  </View>

                  <FontAwesomeIcon icon={faArrowRight} size={20} color="black" />

                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                navigation.navigate('History', {
                  title: 'Recieving History'
                })
              }}>
                <View style={styles.rowContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.iconContainer}>
                      <FontAwesomeIcon icon={faArrowRotateLeft} size={20} color="#DE0A1E" />
                    </View>
                    <Text style={styles.rowText}>View Receiving History</Text>
                  </View>
                  <FontAwesomeIcon icon={faArrowRight} size={20} color="black" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                navigation.navigate('OrganizationsList')
              }}>
                <View style={styles.rowContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.iconContainer}>
                      <FontAwesomeIcon icon={faHospital} size={20} color="#DE0A1E" />
                    </View>
                    <Text style={styles.rowText}>Register With An Organisation</Text>
                  </View>
                  <FontAwesomeIcon icon={faArrowRight} size={20} color="black" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={userLogout}>
                <View style={styles.rowContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.iconContainer}>
                      <FontAwesomeIcon icon={faRightFromBracket} size={20} color="#DE0A1E" />
                    </View>
                    <Text style={styles.rowText}>Log Out</Text>
                  </View>
                  <FontAwesomeIcon icon={faArrowRight} size={20} color="black" />
                </View>
              </TouchableOpacity>
            </View></>

          :

          <Text>Loading...</Text>

        }


      </View>



    </SafeAreaView>



  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DE0A1E',
    paddingHorizontal: 15,
    alignItems: 'center',
    paddingBottom: 200
  },
  profileContainer: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
    zIndex: 1
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  settingsContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  iconContainer: {
    marginRight: 10,
  },
  rowText: {
    fontSize: 16,
    color: 'black',
  },
  overlay: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 270,
    height: 70,
    zIndex: 2,
    position: 'absolute',
    top: '33%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: 42.5
  },

});

export default AccountScreen;
