import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faCalendarCheck, faLocation, faArrowRight, faClockRotateLeft, faClock, faDroplet, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const OverlapView = () => {
    return <View style={styles.overlay}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                <FontAwesomeIcon icon={faDroplet} size={20} color='#DE0A1E'/>
                <Text style={{color:'black', fontSize:12}}>O- Group</Text>
            </View>
            <View style={{marginRight: 10}}/>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                <FontAwesomeIcon icon={faStarOfLife} size={20} color='#DE0A1E'/>
                <Text style={{color:'black', fontSize:12}}>5 lives Saved</Text>
            </View>
            <View style={{marginRight: 10}}/>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                <Text style={{color:'#DE0A1E', fontWeight:'bold', fontSize:15}}>13 March</Text>
                <Text style={{color:'black', fontSize:12}}>Next Donation</Text>
            </View>
        </View>
    </View>;
  };
  

const Account = () => {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
     <View style={styles.profileContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://placeimg.com/100/100/people' }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>Shahzaib Khan</Text>
        <Text style={styles.subtitle}>090078601</Text>
      </View>
      <View style={styles.starContainer}>
        <FontAwesomeIcon icon={faStar} size={20} color="#ffcc00" />
        <FontAwesomeIcon icon={faStar} size={20} color="#ffcc00" /> 
        <FontAwesomeIcon icon={faStar} size={20} color="#ffcc00" /> 
        <FontAwesomeIcon icon={faStar} size={20} color="#ffcc00" /> 
        <FontAwesomeIcon icon={faStar} size={20} color="#c7c7c7" /> 
      </View>
     </View>
     <OverlapView/>
     <View style={styles.settingsContainer}>
        <View style={styles.rowContainer}>
          <View style={{flexDirection:'row', marginRight: 100}}>
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
        <View style={styles.rowContainer}>
          <View style={{flexDirection:'row'}}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faLocation} size={20} color="#DE0A1E" />
          </View>
          <Text style={styles.rowText}>Manage Address</Text>
          </View>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faArrowRight} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <View style={{flexDirection:'row'}}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faClockRotateLeft} size={20} color="#DE0A1E" />
          </View>
          <Text style={styles.rowText}>View Donation History</Text>
          </View>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faArrowRight} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <View style={{flexDirection:'row'}}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faClock} size={20} color="#DE0A1E" />
          </View>
          <Text style={styles.rowText}>View Receiving History</Text>
          </View>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faArrowRight} size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>


    </View>
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
    //marginHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  iconContainer: {
    marginRight: 10,
  },
  rowText: {
    //flex: 1,
    fontSize: 16,
    color:'black',
    //fontWeight: 'bold',
    //paddingRight: 100
  },
  overlay: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 270,
    height: 70,
    zIndex: 2,
    position: 'absolute',
    top: 245,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },

});

export default Account;
